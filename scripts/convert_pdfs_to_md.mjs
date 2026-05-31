import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';

const IN_DIR = path.join(process.cwd(), 'informacoes');
const OUT_DIR = path.join(IN_DIR, 'docs-md');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const KEYWORDS = {
  cores: [/cor(es)?/i, /color/i, /paleta/i],
  tipografia: [/tipografia/i, /font/i, /fonte/i, /tipo de letra/i],
  componentes: [/componente/i, /component/i, /botão/i, /button/i, /card/i],
  grids: [/grid/i, /grelha/i, /coluna/i, /colunas/i, /layout/i],
  padroes_visuais: [/padr[oã]o/i, /pattern/i, /estilo/i],
  regras_ux: [/ux/i, /usabilidade/i, /acessibilida/i, /regra/i, /guideline/i],
  observacoes_importantes: [/observa/i, /nota/i, /importante/i, /dica/i, /aten[cç][aã]o/i]
};

const HEX_RE = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g;
const RGB_RE = /rgb\([^\)]+\)/g;

function extractSnippets(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const snippets = {};
  Object.keys(KEYWORDS).forEach(k => snippets[k] = []);
  lines.forEach(line => {
    Object.entries(KEYWORDS).forEach(([k, arr]) => {
      for (const rx of arr) {
        if (rx.test(line)) { snippets[k].push(line); break; }
      }
    });
  });
  return snippets;
}

async function processPdf(file) {
  const data = fs.readFileSync(file);
  const parser = new PDFParse({ data });
  const content = await parser.getText();
  const text = content.text || '';
  const sections = {};
  Object.entries(KEYWORDS).forEach(([k, arr]) => {
    sections[k] = [];
    arr.forEach(rx => {
      const m = text.match(rx) || [];
      m.forEach(x => { if (!sections[k].includes(x)) sections[k].push(x); });
    });
  });
  sections.hex_colors = Array.from(new Set((text.match(HEX_RE) || [])));
  sections.rgb_colors = Array.from(new Set((text.match(RGB_RE) || [])));
  sections.snippets = extractSnippets(text);

  const base = path.basename(file, path.extname(file)).replace(/\s+/g, '_');
  const outFile = path.join(OUT_DIR, `${base}.md`);

  let md = `# ${path.basename(file)}\n\n---\n\n## Transcrição completa\n\n`;
  md += text + '\n\n---\n\n## Extração: Tokens visuais e notas\n\n';
  const order = ['cores','hex_colors','rgb_colors','tipografia','componentes','grids','padroes_visuais','regras_ux','observacoes_importantes'];
  order.forEach(sec => {
    md += `### ${sec.replace(/_/g,' ')}\n\n`;
    const items = sections[sec] || [];
    if (items.length) items.forEach(it => md += `- ${it}\n`);
    else md += '- (nenhum item encontrado)\n';
    md += '\n';
  });
  md += '## Trechos relevantes (snippets)\n\n';
  Object.entries(sections.snippets).forEach(([sec, lines]) => {
    md += `### ${sec.replace(/_/g,' ')}\n\n`;
    if (lines.length) lines.forEach(ln => md += `- ${ln}\n`);
    else md += '- (nenhum trecho encontrado)\n';
    md += '\n';
  });

  fs.writeFileSync(outFile, md, 'utf-8');
  console.log('Gerado:', outFile);
}

async function main() {
  const files = fs.readdirSync(IN_DIR).filter(f => f.toLowerCase().endsWith('.pdf'));
  if (!files.length) { console.log('Nenhum PDF encontrado em informacoes/'); return; }
  for (const f of files) {
    console.log('Processando', f);
    await processPdf(path.join(IN_DIR, f));
  }
  console.log('Concluído.');
}

main().catch(err => { console.error(err); process.exit(1); });
