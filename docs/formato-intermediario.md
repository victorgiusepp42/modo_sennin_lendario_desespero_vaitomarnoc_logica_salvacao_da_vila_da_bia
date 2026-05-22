# Formato intermediário (IDL)

**IDL** = Intermediate Didactic Language — YAML estruturado, validado por JSON Schema.

## Por que um intermediário?

- Edição e revisão mais simples que o formato final otimizado
- Um mesmo conteúdo pode gerar **várias saídas** (HTML, EPUB, etc.)
- Validação automática de estrutura antes do build
- Bom para colaboração com agente/IA (blocos tipados, metadados claros)

## Raiz do documento

```yaml
$schema: ../../schemas/material.idl.schema.json
meta:
  id: string
  title: string
  version: semver
  language: BCP 47 (ex. pt-BR)
structure:
  - id: string
    title: string
    blocks: [...]
```

## Tipos de bloco (v0)

| type | Campos principais |
|------|-------------------|
| `heading` | `level` (1–6), `text` |
| `paragraph` | `text` |
| `list` | `ordered` (bool), `items` (string[]) |
| `callout` | `variant` (info, warning, tip), `title?`, `text` |
| `image` | `src`, `alt`, `caption?` |
| `code` | `language?`, `text` |
| `divider` | — |

Novos tipos devem ser adicionados ao schema antes de uso em produção.

## Assets

Referenciar com caminho relativo ao arquivo IDL, por exemplo:

```yaml
- type: image
  src: ../assets/diagrama.png
  alt: Descrição acessível
```

O conversor final resolverá e embutirá ou copiará conforme o formato de saída.
