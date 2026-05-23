# Estrutura do arquivo final

Ordem fixa definida em `content/assembly.yaml`:

```
┌─────────────────────────────────────┐
│  Hero (mascote BIA + título)        │  ← IDL capa
├─────────────────────────────────────┤
│  1. Material didático (gerado)      │  ← content/generated/material-principal.html
├─────────────────────────────────────┤
│  ▼ Transição — Material de consulta │
├─────────────────────────────────────┤
│  2. Lista de exercícios (PDF)       │  ← embutido no HTML
├─────────────────────────────────────┤
│  ▼ Transição — Caderno + livro      │
├─────────────────────────────────────┤
│  3. Lógica completo (PDF)           │  ← arquivo na pasta dist/
└─────────────────────────────────────┘
```

## Entrega ao aluno

| Artefato | Tamanho aprox. |
|----------|----------------|
| `modo_sennin_....html` | ~500 KB (lista embutida + mascote) |
| `lista-exercicios-livro.pdf` | 0,16 MB (cópia em dist/) |
| `logica-completo.pdf` | 137 MB |

**Importante:** o PDF `logica-completo.pdf` é grande demais para embutir num único HTML. O build copia os três arquivos para `dist/` — envie a **pasta inteira** (ou zip) para o aluno abrir no celular/desktop.

## Contexto (não enviar ao aluno)

- `context/somente-leitura/avaliacao1-prova-anterior.pdf`
- `context/somente-leitura/gersting-fundamentos-matematicos.pdf`

## Próximo passo

Gerar `material-principal.html` conforme `prompts/inicial.md`, usando os PDFs de contexto.
