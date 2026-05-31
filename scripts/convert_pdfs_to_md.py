#!/usr/bin/env python3
import os
import re
from pathlib import Path
from pypdf import PdfReader

IN_DIR = Path("informacoes")
OUT_DIR = IN_DIR / "docs-md"
OUT_DIR.mkdir(exist_ok=True)

KEYWORDS = {
    "cores": [r"cor(es)?", r"color", r"paleta", r"#(?:[0-9a-fA-F]{3,6})", r"rgb\("],
    "tipografia": [r"tipografia", r"font", r"fonte", r"tipo de letra"],
    "componentes": [r"componente", r"component", r"botão", r"button", r"card", r"navbar"],
    "grids": [r"grid", r"grelha", r"coluna", r"colunas", r"layout"],
    "padrões_visuais": [r"padr[oã]o", r"pattern", r"padr[aã]o visual", r"estilo"],
    "regras_ux": [r"ux", r"usabilidade", r"acessibilida", r"regra(s)?", r"guideline", r"diretriz"],
    "observacoes_importantes": [r"observa", r"nota", r"importante", r"dica", r"aten[cç][aã]o"],
}

HEX_RE = re.compile(r"#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})")
RGB_RE = re.compile(r"rgb\([^\)]+\)")


def extract_text_from_pdf(path: Path) -> str:
    reader = PdfReader(str(path))
    texts = []
    for i, page in enumerate(reader.pages):
        try:
            t = page.extract_text() or ""
        except Exception:
            t = ""
        texts.append(f"\n\n<!-- PAGE {i+1} -->\n\n")
        texts.append(t)
    return "\n".join(texts)


def find_matches(text: str, patterns):
    matches = set()
    for pat in patterns:
        for m in re.findall(pat, text, flags=re.I):
            if isinstance(m, tuple):
                matches.add(" ".join([x for x in m if x]))
            else:
                matches.add(m)
    return sorted(x for x in matches if x)


def extract_sections(text: str) -> dict:
    sections = {}
    lower = text
    for section, patterns in KEYWORDS.items():
        found = set()
        for pat in patterns:
            for m in re.findall(pat, lower, flags=re.I):
                if isinstance(m, tuple):
                    found.add(" ".join([x for x in m if x]))
                else:
                    found.add(str(m))
        sections[section] = sorted(found)

    # extract hex and rgb colors
    sections["hex_colors"] = sorted(set(re.findall(HEX_RE, text)))
    sections["rgb_colors"] = sorted(set(re.findall(RGB_RE, text)))

    # simple heuristics: collect lines that contain keywords for contextual snippets
    snippets = {k: [] for k in KEYWORDS.keys()}
    for line in text.splitlines():
        l = line.strip()
        if not l:
            continue
        for section, patterns in KEYWORDS.items():
            for pat in patterns:
                if re.search(pat, l, flags=re.I):
                    snippets[section].append(l)
                    break
    sections['snippets'] = snippets
    return sections


def write_markdown(out_path: Path, title: str, text: str, sections: dict):
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(f"# {title}\n\n")
        f.write("---\n\n")
        f.write("## Transcrição completa\n\n")
        f.write(text)
        f.write("\n\n---\n\n")
        f.write("## Extração: Tokens visuais e notas\n\n")
        for sec in [
            'cores', 'hex_colors', 'rgb_colors', 'tipografia', 'componentes', 'grids', 'padrões_visuais', 'regras_ux', 'observacoes_importantes'
        ]:
            if sec in sections:
                f.write(f"### {sec.replace('_', ' ').title()}\n\n")
                items = sections[sec]
                if isinstance(items, list) and items:
                    for it in items:
                        f.write(f"- {it}\n")
                else:
                    f.write("- (nenhum item encontrado)\n")
                f.write("\n")
        f.write("## Trechos relevantes (snippets)\n\n")
        for sec, lines in sections.get('snippets', {}).items():
            f.write(f"### {sec.replace('_', ' ').title()}\n\n")
            if lines:
                for ln in lines:
                    f.write(f"- {ln}\n")
            else:
                f.write("- (nenhum trechp encontrado)\n")
            f.write("\n")


def main():
    pdfs = list(IN_DIR.glob("*.pdf"))
    if not pdfs:
        print("Nenhum PDF encontrado em informacoes/")
        return

    for pdf in pdfs:
        print(f"Processando: {pdf.name}")
        text = extract_text_from_pdf(pdf)
        sections = extract_sections(text)
        base = pdf.stem.replace(' ', '_')
        out_file = OUT_DIR / f"{base}.md"
        write_markdown(out_file, pdf.stem, text, sections)
        print(f"Gerado: {out_file}")

    print("Concluído.")


if __name__ == '__main__':
    main()
