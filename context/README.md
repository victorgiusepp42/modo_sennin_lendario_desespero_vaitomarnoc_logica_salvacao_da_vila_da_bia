# Contexto do projeto

## Somente leitura (NÃO entram no arquivo final)

Usados pelo agente ao **gerar** o guia principal (`content/generated/material-principal.html`).

| Arquivo | Origem | Uso |
|---------|--------|-----|
| `somente-leitura/avaliacao1-prova-anterior.pdf` | AVALIACAO1.pdf | Section 7 — prova explicada questão a questão |
| `somente-leitura/gersting-fundamentos-matematicos.pdf` | Livro Gersting | Citações de página, conceitos, tabelas |

## Anexos no arquivo final (consulta)

Copiados para `dist/` no build. Ordem em `content/assembly.yaml`.

| Arquivo | Origem | No HTML |
|---------|--------|---------|
| `../appendices/lista-exercicios-livro.pdf` | Lista_Exercicios_Livro.pdf | Embutido (~165 KB) |
| `../appendices/logica-completo.pdf` | Logica_Completo.pdf | Link + viewer (~137 MB, mesma pasta) |

## Prompt

`prompts/inicial.md` — especificação pedagógica completa (copiada de `prompt_logica_ia.md`).
