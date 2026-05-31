# Referências Obrigatórias

A pasta `informacoes/` contém materiais fornecidos pelo cliente.

Esses materiais são a fonte da verdade para:

- Design
- Layout
- Componentes
- Tipografia
- Espaçamentos
- Cores
- Branding
- Estrutura das páginas

Antes de qualquer alteração visual:

1. Ler os arquivos da pasta `informacoes/`
2. Identificar quais documentos são relevantes para a tarefa
3. Explicar quais referências serão utilizadas
4. Somente depois iniciar a implementação

Em caso de conflito:

PDFs da pasta `informacoes/` possuem prioridade máxima.

## Continuação de Projeto Existente

Este projeto NÃO está começando do zero.

Existe uma implementação já em andamento.

Antes de criar qualquer nova interface:

1. Analisar os componentes existentes.
2. Analisar os padrões visuais existentes.
3. Analisar os layouts existentes.
4. Identificar repetições de estilo.
5. Reutilizar a mesma abordagem.

Evitar criar novas direções visuais.

A prioridade é manter consistência com o que já foi desenvolvido.

---

## Fidelidade ao Projeto Atual

O projeto hospedado deve ser considerado referência visual parcial.

Ao criar novas seções:

* seguir o mesmo padrão visual
* seguir a mesma linguagem de componentes
* seguir a mesma hierarquia tipográfica
* seguir os mesmos espaçamentos
* seguir a mesma proposta estética

Evitar diferenças perceptíveis entre páginas antigas e novas.

O usuário final não deve perceber quais partes foram criadas posteriormente.

---

## Criação de Novos Componentes

Antes de criar um componente:

1. Procurar componente semelhante.
2. Verificar reutilização.
3. Verificar composição.
4. Somente então criar um novo componente.

Preferir:

* composição
* reutilização
* extensibilidade

Evitar:

* duplicação
* variantes desnecessárias
* abstrações prematuras

---

## Placeholder Strategy

Quando faltar:

* imagens
* ícones
* renders arquitetônicos
* logos
* assets visuais

Criar componentes temporários reutilizáveis.

Exemplo:

components/placeholders/

* PlaceholderImage
* PlaceholderLogo
* PlaceholderGalleryItem
* PlaceholderIcon

Esses componentes devem ser facilmente substituíveis posteriormente sem necessidade de refatoração estrutural.

---

## Arquitetura Frontend

Manter organização escalável.

Preferir:

app/
components/
features/
hooks/
lib/
services/
types/
utils/

Evitar:

* lógica espalhada
* arquivos genéricos gigantes
* componentes com múltiplas responsabilidades

---

## Qualidade Obrigatória

Todo código deve:

* seguir boas práticas modernas de React
* seguir boas práticas modernas de Next.js
* seguir boas práticas modernas de TypeScript
* possuir tipagem adequada
* evitar re-renderizações desnecessárias
* evitar código morto
* evitar dependências desnecessárias

Sempre considerar:

* manutenção futura
* legibilidade
* escalabilidade
* performance
