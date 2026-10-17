# calculadora

exercício de sala de aula feito em html, css e javascript: uma calculadora de mesa direto no navegador, com as quatro operações básicas e o resto da divisão. dá para usar clicando nas teclas ou pelo teclado do computador.

## ferramentas

<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,js,git,github,vscode" alt="html, css, javascript, git, github, vscode" />
</a>

## :sparkles: funcionalidades

### operações
- **adição** (+), **subtração** (−), **multiplicação** (×) e **divisão** (÷)
- **resto da divisão** (%)
- contas em sequência: `2 + 3 × 4` vai resolvendo a cada operação, como numa calculadora de mesa
- **C** limpa tudo e **⌫** apaga o último número digitado

### visor
- mostra a conta em cima (`12 + 3 =`) e o resultado embaixo, em destaque
- números no jeito brasileiro, com vírgula e ponto de milhar (`1.234,5`)
- corrige a sujeira das casas decimais: `0,1 + 0,2` dá `0,3`
- avisa quando alguém tenta dividir por zero
- a operação escolhida fica acesa até digitar o próximo número

### teclado do computador

| tecla | o que faz |
| --- | --- |
| `0` a `9` | números |
| `,` ou `.` | vírgula |
| `+` `-` `*` `/` `%` | operações (`x` também multiplica) |
| `Enter` ou `=` | resultado |
| `Backspace` | apaga o último número |
| `Esc` ou `Delete` | limpa tudo |

### visual
- tema escuro em grafite quente com laranja e faixas inclinadas no fundo
- responsivo: no celular a calculadora fica embaixo do título e ocupa a largura da tela
- respeita a opção do sistema de reduzir animações

## :file_folder: estrutura

```
calculadora/
├── calculadora.html   página e teclas
├── calculadora.css    visual
└── calculadora.js     lógica da conta, visor e teclado
```

## :computer: como usar

não precisa instalar nada: é só abrir o arquivo `calculadora/calculadora.html` no navegador.

## :brain: o que aprendi
- como capturar os cliques dos botões e as teclas do teclado com javascript
- como guardar o estado da conta (primeiro número, operação e número atual) em variáveis
- como formatar números no padrão brasileiro e evitar erros de casas decimais
- como montar o layout com css grid e deixar a página responsiva
