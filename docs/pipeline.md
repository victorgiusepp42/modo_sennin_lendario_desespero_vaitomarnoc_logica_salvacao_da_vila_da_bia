# Pipeline de build

## Estágios

| Estágio | Entrada | Saída | Implementação |
|---------|---------|-------|----------------|
| 1. Ingestão | `context/`, `prompts/` | Rascunho IDL em `content/` | Agente + autor |
| 2. Validação | `content/**/*.idl.yaml` | Relatório de erros | `src/idl/validate.ts` |
| 3. Compilação | IDL validado | Artefato em `dist/` | `src/converters/*` |

## Formato final (a definir)

Critérios desejados:

- Abrir facilmente em **iOS**, **Android** e **desktop**
- Arquivo **o mais leve possível**
- Offline-first quando fizer sentido

Candidatos comuns (decisão após o prompt do usuário):

| Formato | Prós | Contras |
|---------|------|---------|
| HTML único (bundle) | Universal, um arquivo, leve com assets embutidos opcionais | Sem “app de leitura” nativo |
| EPUB | Leitores em todas as plataformas | Um pouco mais de tooling |
| PDF | Visual fixo | Geralmente mais pesado |

O placeholder em `src/converters/html-bundle/` gera um HTML mínimo para testar o fluxo.

## Adicionar um conversor

1. Criar pasta em `src/converters/<nome>/`
2. Exportar função `compile(material: IdlDocument): Promise<BuildResult>`
3. Registrar em `src/cli.ts`
