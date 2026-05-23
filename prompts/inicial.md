# Material a gerar: HTML único de revisão da disciplina "Fundamentos de Lógica para Inteligência Artificial"

## Contexto e propósito final

O output do Cursor é UM ARQUIVO HTML semântico que será convertido em PDF.
O PDF servirá como material de revisão para alunos do curso de IA da UFCAT/IMTec
que FORAM MAL na primeira prova e estão tendo uma segunda oportunidade.

Premissa-chave: não é só "revisão preguiçosa". É REMEDIAÇÃO. Os alunos vieram
de uma reprovação e precisam REALMENTE entender — não só memorizar.

O Cursor deve focar 100% em:
1. Arquitetura da informação correta
2. Conteúdo pedagogicamente eficiente para REMEDIAÇÃO
3. HTML semântico limpo com seções claramente delimitadas (article, section, aside, table, figure) para facilitar quebras de página inteligentes na conversão para PDF
4. Marcação de componentes pedagógicos via classes CSS bem nomeadas

A estética NÃO é trabalho do Cursor — outra IA vai estilizar depois lendo este mesmo HTML semântico.

## Restrições importantes do formato PDF

- NÃO use `<details>`, `<summary>`, nem qualquer elemento colapsável: em PDF eles ficam inconsistentes
- NÃO use JavaScript, hovers, ou qualquer interatividade
- TUDO deve estar SEMPRE visível
- Use `<section>`, `<article>`, `<aside>` com classes claras para facilitar quebras de página pela CSS depois (ex: `page-break-inside: avoid` em worked examples)

## O HTML NÃO deve conter

O aluno vai receber, em paralelo, uma lista de exercícios separada (Lista_Exercicios_Livro.docx). Portanto NÃO inclua:
- Listas de exercícios próprias do material
- Mini-quizzes para o aluno resolver
- Seções de "auto-avaliação" com perguntas
- Qualquer pergunta esperando resposta do aluno

O HTML DEVE conter:
- Conceitos explicados em passos escalonados
- Exemplos ilustrativos no texto
- Exemplos RESOLVIDOS (worked examples) com raciocínio visível
- Pegadinhas/erros comuns marcados
- Tabelas-verdade, tabelas de equivalências, esquemas, mnemônicos
- Sugestões INLINE de qual exercício da lista treinar cada conceito
- A PROVA ANTERIOR EXPLICADA questão por questão (section dedicada — ver abaixo)

## Materiais de referência em anexo

1. `Fundamentos_matematicos_para_a_ciencia_da_computacao_Gersting.pdf` — livro-base. Cite páginas específicas quando referenciar um conceito.
2. `Lista_Exercicios_Livro.docx` — lista de exercícios separada (não transcrever).
3. `Logica_Completo.pdf` — resumo manuscrito do aluno com anotações dele. Prioridade: o que ele destacou ali são pontos centrais.
4. `Prova_Logica_IA.pdf` — prova anterior COM GABARITO. Esta prova deve ser reproduzida e explicada questão por questão na Section 7 (ver abaixo).

## Público-alvo refinado

- Aluno universitário que NÃO foi bem na primeira prova.
- Pode ter dificuldades conceituais reais (não só falta de prática).
- Precisa de progressão escalonada: do exemplo cotidiano → formalização → técnica.
- Precisa de REDUNDÂNCIA INTENCIONAL: conceitos importantes aparecem várias vezes em contextos diferentes ao longo do material.
- Tom empático sem ser paternalista. Direto, técnico, com humanidade.

## Notação a usar (consistente com a prova e o livro Gersting)

- Negação: ′ (prime), como em A′. Pode usar ¬ quando for mais legível em parágrafos, mas em fórmulas use ′.
- Conjunção: ∧
- Disjunção: ∨
- Condicional: →
- Bicondicional: ↔
- Equivalência sintática (em cadeias de prova): ⇔
- Implicação semântica/dedutiva: ⊢
- Verdadeiro/Falso: V/F (como na prova) — não T/F
- Constantes lógicas em transformações: 0 (falso) e 1 (verdadeiro)
- Quantificadores: ∀ e ∃
- Todos os símbolos em UTF-8 direto, não entidades HTML

Inclua uma TABELA DE NOTAÇÃO logo no início do material para o aluno consultar.

## Princípios pedagógicos OBRIGATÓRIOS

### 1. Concrete → Abstract (Mayer)
Cada novo conceito começa com um exemplo cotidiano em português, depois formaliza. Nunca abra com a fórmula.

### 2. Passos escalonados e redundância intencional
Para audiência em remediação:
- Quebre cada conceito em micro-passos
- Quando introduzir um símbolo novo, repita seu nome por extenso nas próximas 3 ocorrências antes de só usar o símbolo
- Reafirme regras-chave em momentos diferentes (na seção que introduz, no worked example, no cheat sheet)

### 3. Worked examples com raciocínio visível (Sweller)
Este é o componente MAIS IMPORTANTE do material.
Para cada técnica de prova, mostre UMA prova resolvida com o "pensamento" do aluno em comentários laterais que respondam:
- Por que escolhi essa regra agora?
- Que padrão na fbf me sinalizou que essa era a regra certa?
- O que eu faria se travasse aqui?

Estrutura: `<div class="worked-example">` com `<ol class="steps">` e `<span class="thinking">` nos comentários explicativos.

### 4. Dual coding (Paivio)
- Toda tabela-verdade aparece como `<table>` real
- Diagramas SVG inline simples (caixas + setas) para fluxos de demonstração
- Cadeias de equivalência como sequência vertical visual com a justificativa ao lado de cada passo

### 5. Surface misconceptions
Onde o aluno tipicamente erra, marque com:
```html
<aside class="pegadinha">⚠️ <strong>Pegadinha:</strong> ...</aside>
```

Pegadinhas obrigatórias (extraídas dos exercícios E da prova):
- Negação de "ou" e "e" (De Morgan): negar (A ∨ B) NÃO é (A′ ∨ B′)
- Diferença entre "se", "só se", "se e somente se"
- ¬∀x ≡ ∃x¬ e ¬∃x ≡ ∀x¬ — não esquecer de NEGAR o predicado também
- Ordem dos quantificadores: ∀x∃y ≠ ∃y∀x (com contraexemplo concreto)
- Em pe → pu: SEMPRE usar a MESMA constante introduzida pela pe
- Constante introduzida por pe NÃO é arbitrária: não pode aplicar gu nela
- Distinguir VERDADE em uma interpretação vs VALIDADE (verdade em toda interpretação) — caiu na Q5.c

### 6. Cognitive load — chunks pequenos
- Nenhuma seção tem mais que 3 parágrafos curtos seguidos sem elemento visual
- Nenhum parágrafo passa de ~4 linhas
- Listas até ~7 itens; se mais, agrupar

### 7. Referências cruzadas para a lista
Cada conceito principal termina com:
```html
<p class="ref">📖 Livro: pp. X–Y | 📝 Pratique na lista: Ex. 1.X.Y</p>
```

### 8. Resumão de Bolso ao fim de cada section
Cada seção (1–6) termina com:
```html
<aside class="resumao">
  <h4>Resumão de Bolso</h4>
  <ul class="takeaways">3–5 takeaways diretos</ul>
  <p class="practice-hint">📝 Pratique esta seção: Ex. 1.X.Y a 1.X.Z</p>
</aside>
```

## Estrutura do HTML

### Section 0 — Hero / Mapa
- `<h1>Lógica para IA — Guia de Sobrevivência da Segunda Chance</h1>`
- Parágrafo curto: "se você está aqui, é porque a primeira prova não rolou. Tudo bem. Este material foi feito para destravar exatamente os pontos que derrubam a maioria. Vamos passo a passo."
- Mapa visual da progressão das seções
- Tabela de notação (símbolos usados ao longo do material)
- Estimativa de tempo de leitura
- Aviso: a lista de exercícios vem em separado; este documento sugere exercícios mas não os contém

### Section 1 — Proposições, Conectivos, Tabelas-Verdade (refere Gersting 1.1)

1.1 O que é proposição? (afirmação que pode ser V ou F)
- Exemplos vs não-exemplos
- Referência Ex. 1.1.1

1.2 Os 5 conectivos
- Tabela: símbolo / nome / português / quando V
- Cada conectivo com exemplo cotidiano antes da tabela-verdade
- Atenção especial ao condicional → (intuição do "se chover, levo guarda-chuva" + por que V→F é a única que dá F)

1.3 Como construir uma tabela-verdade em 4 passos
- Worked example: tabela-verdade de (A ∧ B)′ ↔ A′ ∨ B′ (esta é a Q1.b da prova — adianta o conteúdo dela)

1.4 Tradução português → fbf
- Os padrões essenciais (com Ex. 1.1.5, 1.1.7)
- Worked example simples
- ⚠️ Pegadinha: "só se" vs "se" (atenção em Ex. 1.1.5.c)

1.5 Negação correta usando De Morgan
- Por que (A ∨ B)′ = A′ ∧ B′ (e não A′ ∨ B′)
- ⚠️ Pegadinha com Ex. 1.1.9 e 1.1.10

1.6 Tautologia, contradição, contingência

1.7 Resumão de Bolso

### Section 2 — Equivalências Lógicas e Provas por Equivalência (refere Gersting 1.1, tabela 1)

Esta section foi expandida porque a prova mostrou que equivalências são absolutamente centrais (Q1.c e Q2).

2.1 O que é equivalência lógica?
- Duas fbfs P e Q são equivalentes (P ⇔ Q) quando têm a mesma tabela-verdade
- Diferença entre ↔ (operador lógico) e ⇔ (metalinguagem para "são equivalentes")

2.2 Tabela COMPLETA de equivalências (reproduzir tabela 1 do Gersting/prova)
- Comutatividade, associatividade, distributividade (∨ e ∧)
- De Morgan
- Condicional como disjunção: P → Q ⇔ P′ ∨ Q
- Dupla negação
- Definição de equivalência: P ↔ Q ⇔ (P → Q) ∧ (Q → P)
- Elementos neutros e dominação
- Complementaridade: P ∨ P′ ⇔ 1 e P ∧ P′ ⇔ 0
- Idempotência (se aparecer no livro)

2.3 Provando que uma fbf é tautologia por cadeia de equivalências
- Estratégia geral: começar pelo lado mais complexo, simplificar até chegar no outro
- Worked example completo: prove (A ∧ B)′ ∧ (A ∨ B′) ⇔ B′ — passo a passo com o raciocínio de por que cada equivalência foi escolhida (este é EXATAMENTE o exercício da Q1.c — adiantar aqui)

2.4 Heurística: "quando travar, tente..."
- Aplicar De Morgan nas negações de grupos
- Trocar condicionais por disjunções
- Procurar A ∨ A′ ou A ∧ A′ pra colapsar com complementaridade
- Distribuir para fatorar

2.5 Resumão de Bolso

### Section 3 — Argumentos em Lógica Proposicional (refere Gersting 1.2)

3.1 O que é um argumento válido (intuição: se hipóteses V, conclusão V)

3.2 Duas formas de provar validade:
- Cadeia de equivalências (estilo Q2 da prova)
- Sequência de regras de inferência (estilo Ex. 1.2.12, 1.2.14)

3.3 As regras de inferência principais (tabela com forma e "quando usar")
- mp, mt, sd, sh, simp, conj, ad

3.4 Worked example 1: prova de validade por EQUIVALÊNCIA (adaptado da Q2 da prova: argumento sobre tarifas/usinas/contas)
- Mostrar passo a passo: traduzir PT → fbf → cadeia de ⇔ → conclusão

3.5 Worked example 2: prova de validade por REGRAS DE INFERÊNCIA (adaptado do Ex. 1.2.12 ou estrutura similar)
- Mostrar sequência numerada com justificativa por linha

3.6 Heurística: "qual técnica usar?"
- Use equivalências quando a estrutura sugere transformação algébrica
- Use inferência quando você quer "extrair" conclusões das hipóteses

3.7 ⚠️ Pegadinha: confundir → com ⊢ ou ⇔

3.8 Resumão de Bolso

### Section 4 — Quantificadores e Predicados (refere Gersting 1.3)

4.1 ∀ e ∃ — quando usar cada um (analogia cotidiana)

4.2 Predicados unários e binários
- A(x), B(x), C(x) — propriedade de um elemento
- W(x,y), M(x,y) — relação entre dois elementos
- Importante: predicados BINÁRIOS aparecem em provas (cai na Q4)

4.3 Tradução português → fbf
- Os 6 padrões essenciais (referência Ex. 1.3.14)
- Atenção especial a domínio: "todo estudante da turma" vs "todo mundo" (cai na Q3.a — diferença entre quantificar sobre domínio restrito ou usar predicado E(x) extra)
- ⚠️ Pegadinha: "todo X é Y" usa →, "algum X é Y" usa ∧

4.4 Tradução fbf → português (caminho inverso, cai na Q3.b)
- Worked example: ler ∃x[P(x) ∧ R(x)′] em português natural

4.5 Negação de quantificadores
- ¬∀x P(x) ⇔ ∃x ¬P(x)
- ¬∃x P(x) ⇔ ∀x ¬P(x)
- Referência Ex. 1.3.28

4.6 Ordem dos quantificadores: ∀x∃y ≠ ∃y∀x
- Contraexemplo concreto: "todo número tem um maior" vs "existe número maior que todos"
- Referência Ex. 1.3.4

4.7 Worked example complexo: tradução estilo Ex. 1.3.26.f
"Nenhuma mulher trabalha para Ivan" → (∀x)[W(x,i) → (W(x))′]

4.8 Resumão de Bolso

### Section 5 — Demonstrações em Lógica de Predicados (refere Gersting 1.4)

5.1 As 4 regras novas + as antigas
- pu (particularização universal)
- pe (particularização existencial) com a RESTRIÇÃO da constante nova
- gu (generalização universal) com a RESTRIÇÃO de não vir de pe
- ge (generalização existencial)
- + tudo da lógica proposicional ainda vale

5.2 Receita de bolo (decision tree em prosa):
1. Tem ∃ nas hipóteses? pe PRIMEIRO (constante nova, ex: a)
2. Tem ∀ nas hipóteses? pu com a MESMA constante a
3. Aplica mp/mt/sd/simp como na proposicional
4. Pra concluir ∃: ge no final
5. Pra concluir ∀: gu (CUIDADO: constante tem que ser arbitrária)

5.3 Worked example COMPLETO baseado na Q4 da prova:
"Todo estudante de CC trabalha mais que alguém..." passo a passo
Mostrar:
- Tradução PT → fbfs (com predicados binários!)
- Cada linha da prova com justificativa
- Comentários "💭 por que essa regra agora"

5.4 Worked example com SILOGISMO clássico
- Referência Ex. 1.4.31 — fazer pelo menos UM dos 4 silogismos (sugestão: Darii ou Ferio)

5.5 ⚠️ Pegadinhas críticas:
- pe e depois pu: MESMA constante
- gu não pode ser aplicado em constante vinda de pe
- Em predicados binários, MANTER os índices certos: W(m,a) ≠ W(a,m)

5.6 Resumão de Bolso

### Section 6 — Sintaxe, Semântica, Validade (refere Gersting 1.3-1.4)

Esta section existe porque a Q5 da prova explorou esses conceitos meta-lógicos explicitamente. Sem ela, o aluno que recebeu nota baixa na Q5 não vai melhorar.

6.1 Sintaxe vs Semântica
- Sintaxe: as regras de formação de fbfs (estrutura, símbolos, gramática)
- Semântica: o que significa uma fbf numa interpretação específica
- Analogia: sintaxe é a gramática da frase, semântica é o significado

6.2 Fórmula bem-formada (fbf)
- O que torna uma expressão uma fbf válida sintaticamente
- Exemplos vs não-exemplos

6.3 Verdade em uma interpretação vs Validade
- Uma fbf é VERDADEIRA em uma interpretação quando ela vale naquela interpretação específica (domínio + atribuição de predicados)
- Uma fbf é VÁLIDA quando é verdadeira em TODAS as interpretações possíveis (análogo proposicional: tautologia)
- Worked example: a mesma fbf pode ser V em uma interpretação e F em outra

6.4 Argumento válido (definição semântica)
- Não existe interpretação onde todas as premissas sejam V e a conclusão seja F
- Diferença entre "argumento válido" e "fbf válida"

6.5 Validade SEMÂNTICA vs Demonstrabilidade SINTÁTICA
- Validade: propriedade semântica (sobre todas as interpretações)
- Demonstrabilidade: propriedade sintática (existe prova formal)

6.6 Corretude e Completude do sistema dedutivo
- Corretude: "todo argumento DEMONSTRÁVEL é VÁLIDO" (o sistema de prova não engana — se você consegue provar, é mesmo verdadeiro)
- Completude: "todo argumento VÁLIDO é DEMONSTRÁVEL" (o sistema de prova é poderoso — toda verdade tem prova)
- Worked example: a lógica de predicados de 1ª ordem é correta e completa (resultado de Gödel)

6.7 ⚠️ Pegadinha conceitual: "tautologia" só faz sentido em lógica proposicional; em lógica de predicados, o termo correto é "fbf válida" ou "argumento válido"

6.8 Resumão de Bolso

### Section 7 — A Prova Anterior Explicada (a section mais importante)

Esta section é o coração do material remedial. Para CADA uma das 5 questões da prova em anexo, fazer:

**(A) Cabeçalho da questão:**
- Número e pontuação
- Tópico que cobra: linkar com a section correspondente do material
- Dificuldade percebida: estimar (Baixa/Média/Alta) com base na complexidade
- `<h3>Questão N (X pts) — [Tópico]</h3>`

**(B) Enunciado parafraseado:**
- Reescrever em linguagem mais didática SEM perder fidelidade
- Destacar o que está sendo pedido

**(C) "O que essa questão está realmente cobrando":**
- Identificar o conceito-chave por trás da questão
- Apontar a section do material onde isso é explicado

**(D) "Onde a maioria erra":**
- Misconception específica que provavelmente derrubou os alunos
- Marcado como `<aside class="pegadinha">`

**(E) Resolução passo a passo com raciocínio visível:**
- Não só o gabarito — o caminho do raciocínio
- Use a estrutura de worked-example
- Cada passo: o QUE foi feito + o PORQUÊ
- Para Q1.b (tabela-verdade): mostrar tabela completa
- Para Q1.c e Q2 (cadeia de equivalências): mostrar cada ⇔ com nome da regra
- Para Q3.c (validade semântica): mostrar o raciocínio em prosa
- Para Q4 (prova formal de predicados): mostrar sequência numerada com comentários laterais
- Para Q5 (conceitos): explicar cada conceito com exemplo concreto

**(F) "Estratégia geral para esse tipo de questão":**
- Quando o aluno vir uma questão parecida no futuro, o que ele deve fazer
- 2–3 frases diretas

**(G) "Para fixar":**
- Sugerir 1–2 exercícios da lista que treinam o mesmo padrão

#### Q1.a (5pts) — Tradução PT → fbf com 3 letras:
- Identifica a estrutura: condicional cuja antecedente é uma conjunção
- Misconception: confundir N (notas pagas) com sua negação N′
- Cuidado especial: "as notas NÃO forem pagas" é N′, "o cliente NÃO ficará feliz" é C′
- Gabarito: (N′ ∧ L) → C′
- Strategy: "ler devagar e nomear cada átomo positivamente antes de aplicar negações"

#### Q1.b (5pts) — Tabela-verdade pra verificar tautologia:
- A fbf é (A ∧ B)′ ↔ A′ ∨ B′ — uma das leis de De Morgan
- Reproduzir tabela completa (4 linhas + colunas intermediárias)
- Conceito-chave: tautologia = a coluna final é toda V
- Strategy: "calcule as subexpressões antes da operação principal"

#### Q1.c (10pts) — Prova de equivalência por cadeia:
- A fbf é (A ∧ B)′ ∧ (A ∨ B′) ⇔ B′
- Passos: De Morgan → comutatividade → distributividade → complementaridade → elemento neutro
- Misconception: tentar fazer tabela-verdade (não é o que foi pedido)
- Strategy: "olhe pra onde você quer chegar (B′) e procure isolar"

#### Q2 (20pts) — Argumento PT → fbf → prova por equivalência:
- Tradução cuidadosa: "não é verdade que..." = negação da fbf inteira
- Aplicar condicional como disjunção, depois De Morgan duas vezes
- Misconception: negar SÓ uma parte do "se... então", esquecendo que o "não é verdade que se A então B" significa NEGAR todo o A→B
- Tradução: (T → U)′ ∧ (E ∨ C′)′
- Resultado: T ∧ U′ ∧ E′ ∧ C, donde U′ ∧ C por simplificação
- Strategy: "antes de provar, traduzir bem; meio caminho é a tradução certa"

#### Q3.a (6pts) — Tradução PT → fbf com quantificador, domínio restrito:
- Atenção: o domínio JÁ é "estudantes da turma", então não precisa de E(x)
- Padrão: "todo X que P faz A" → (∀x)[P(x) → A(x)]
- Resposta: (∀x)[P(x) → A(x)]
- Misconception: incluir E(x) sem necessidade

#### Q3.b (7pts) — Tradução fbf → PT:
- ∃x[P(x) ∧ R(x)′] → "existe um estudante que participa das atividades e NÃO recebe recomendação positiva"
- Misconception: traduzir o ∧ como "ou", ou esquecer da negação

#### Q3.c (7pts) — Validade semântica de argumento de predicados:
- Argumento: ∀x[P(x)→A(x)], ∃x P(x) ⊢ ∃x A(x)
- Explicação semântica (não formal): se existe um que P, e todo P também é A, então esse mesmo é A
- Misconception: tentar formalizar uma prova quando a questão pede explicação semântica

#### Q4 (20pts) — Prova formal em lógica de predicados com predicados binários:
- Mais complexa: envolve W(x,y) e S(x,y)
- Tradução crítica:
  - (∀x)[C(x) → (∃y)W(x,y)]
  - (∀x)(∀y)[W(x,y) → S(x,y)]
  - C(m)
  - ∴ (∃y)S(m,y)
- 10 passos na prova gabaritada — mostrar todos com justificativa visível
- Pontos críticos:
  - pu na linha 1 com x=m
  - mp pra obter ∃y W(m,y)
  - pe pra obter W(m,a) (introduzindo a constante a)
  - pu duplo na linha 2 com x=m, y=a
  - mp pra obter S(m,a)
  - ge pra concluir (∃y)S(m,y)
- Misconception: errar a ordem (querer pu em y antes de já ter o m estabelecido), ou usar uma constante diferente entre as duas particularizações
- Esta é provavelmente a questão que mais derrubou alunos

#### Q5 (20pts dividida em 4 itens) — Conceitos meta-lógicos:
- Q5.a — Por que as 3 fbfs são bem-formadas (sintaxe)
- Q5.b — Interpretação semântica e dependência da interpretação
- Q5.c — Argumento válido + distinção verdade em interpretação / fbf válida / argumento válido
- Q5.d — Corretude e completude
- Esta questão é CONCEITUAL, não computacional. Não tem cálculo pra fazer.
- Misconception #1: confundir validade de fbf com validade de argumento
- Misconception #2: pensar que sintaxe = semântica
- Misconception #3: confundir corretude com completude
- Strategy: "decore as 4 definições e tenha um exemplo concreto pra cada uma"

### Section 8 — Cheat Sheet de Sobrevivência

Tabela final consolidada:

| Vejo no enunciado... | Provavelmente preciso de... | Onde estudar | Praticar com... |

Cobrir pelo menos 12 padrões — inclua:
- "Construa tabela-verdade" → seção 1.3 + Q1.b
- "Prove que é tautologia" → equivalências, seção 2 + Q1.c
- "É válido? Mostre/prove" (proposicional) → seção 3 + Q2
- "Traduza pra fbf" → seção 1.4 e 4.3 + Q1.a, Q3.a
- "Traduza pra português" → seção 4.4 + Q3.b
- "Argumento de predicados, demonstre" → seção 5 + Q4
- "Argumento de predicados, justifique semanticamente" → seção 6 + Q3.c
- "Diferença entre validade e tautologia" → seção 6 + Q5
- "Negar uma fbf com quantificador" → seção 4.5 + Ex. 1.3.28
- "Silogismo clássico" → seção 5.4 + Ex. 1.4.31
- "Achar contraexemplo (fbf não-válida)" → seção 6 + Ex. 1.4.17+
- "Conceitos: corretude, completude" → seção 6.6 + Q5.d

## Componentes HTML reutilizáveis

```html
<!-- Conceito principal -->
<article class="concept">
  <h3>...</h3>
  <p>...</p>
  <p class="ref">📖 Livro: pp. X–Y | 📝 Pratique: Ex. 1.X.Y</p>
</article>

<!-- Worked example -->
<div class="worked-example">
  <h4>Exemplo resolvido: ...</h4>
  <p class="setup">Contexto: ...</p>
  <ol class="steps">
    <li>
      <span class="step">Passo 1: ...</span>
      <span class="thinking">💭 Por que essa regra? Porque...</span>
    </li>
  </ol>
  <p class="closure">Conclusão: ...</p>
</div>

<!-- Cadeia de equivalências (para provas por ⇔) -->
<table class="equivalence-chain">
  <tr><td>(A ∧ B)′ ∧ (A ∨ B′)</td><td>⇔ (A′ ∨ B′) ∧ (A ∨ B′)</td><td>De Morgan</td></tr>
  <tr><td></td><td>⇔ (B′ ∨ A′) ∧ (B′ ∨ A)</td><td>Comutatividade</td></tr>
</table>

<!-- Prova formal numerada (para inferência de predicados) -->
<table class="formal-proof">
  <thead><tr><th>#</th><th>Fórmula</th><th>Justificativa</th><th>💭 Por quê</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>(∀x)[C(x) → (∃y)W(x,y)]</td><td>Premissa</td><td>—</td></tr>
    <tr><td>2</td><td>...</td><td>pu em 1, com x=m</td><td>Aterrizo o ∀ na constante m</td></tr>
  </tbody>
</table>

<!-- Pegadinha -->
<aside class="pegadinha">
  ⚠️ <strong>Pegadinha:</strong> ...
</aside>

<!-- Tabela-verdade -->
<table class="truth-table">...</table>

<!-- Mnemônico ou regra rápida -->
<div class="mnemonic">
  🧠 <strong>Lembrete:</strong> ...
</div>

<!-- Receita / decision tree -->
<ol class="receita">...</ol>

<!-- Resumão de Bolso -->
<aside class="resumao">
  <h4>Resumão de Bolso</h4>
  <ul class="takeaways">...</ul>
  <p class="practice-hint">📝 Fixe esta seção: Ex. 1.X.Y a Ex. 1.X.Z</p>
</aside>

<!-- Bloco da prova explicada -->
<article class="exam-question">
  <h3>Questão N (X pts) — [Tópico]</h3>
  <div class="statement">[enunciado parafraseado]</div>
  <div class="what-its-testing">
    <strong>O que essa questão cobra:</strong> ...
  </div>
  <aside class="pegadinha">⚠️ Onde a maioria erra: ...</aside>
  <div class="worked-example">[resolução passo a passo]</div>
  <div class="strategy">
    <strong>Estratégia geral:</strong> ...
  </div>
  <p class="practice-hint">📝 Fixar com: Ex. 1.X.Y</p>
</article>
```

## Regras finais

- HTML5 semântico. Sem CSS inline, sem `<style>`, sem JS.
- `<meta charset="UTF-8">` e `<html lang="pt-BR">`.
- Símbolos lógicos em UTF-8 direto.
- Não inventar conteúdo: tudo com base no livro, na lista de exercícios, no resumo do aluno, ou na prova com gabarito.
- Não simplificar a ponto de errar.
- Worked examples NÃO transcrevem enunciados dos exercícios da lista — usam estruturas inspiradas.
- Para a Section 7 (Prova Explicada), pode E DEVE usar a estrutura exata da prova (já que é a prova que aconteceu).
- Comentários HTML opcionais marcando cada seção: `<!-- Section 2 - Gersting 1.1 -->`
- Estrutura semântica clara para facilitar quebras de página no PDF:
  - `<article>` ou `<section>` para cada conceito grande
  - Worked examples e tabelas-verdade dentro de containers que possam ser marcados como `page-break-inside: avoid` pela CSS

## Critério de sucesso

Um aluno que tirou nota baixa na primeira prova deve, depois de ler o material:
1. Conseguir resolver a Q4 da prova original (a mais difícil) com confiança
2. Distinguir validade, verdade em interpretação, tautologia, demonstrabilidade
3. Saber QUAL técnica usar (cadeia de equivalências vs sequência de inferências) olhando pra estrutura do problema
4. Reconhecer e evitar as pegadinhas marcadas
5. Conseguir responder a Q5 (conceitual) com vocabulário correto