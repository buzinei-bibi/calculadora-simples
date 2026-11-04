# CALCULADORA SIMPLES

exercício de sala de aula feito só com html, css e javascript puro, sem framework e sem instalar nada. é uma calculadora de mesa que roda direto no navegador, com as quatro operações básicas e o resto da divisão. dá para usar clicando nas teclas ou pelo teclado do computador.

o projeto inteiro cabe em três arquivos: um para a página, um para o visual e um para a lógica.

## FERRAMENTAS

<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,js,git,github,vscode" alt="html, css, javascript, git, github, vscode" />
</a>

## :computer: COMO USAR

1. baixe ou clone o repositório
2. abra o arquivo `calculadora/calculadora.html` no navegador

pronto: não precisa de `npm`, servidor nem internet (só as fontes vêm do google fonts).

## :sparkles: FUNCIONALIDADES

### OPERAÇÕES
- **adição** (+), **subtração** (−), **multiplicação** (×) e **divisão** (÷)
- **resto da divisão** (%)
- contas em sequência: `2 + 3 × 4` vai resolvendo a cada operação, como numa calculadora de mesa
- **C** limpa tudo e **⌫** apaga o último dígito

### VISOR
- mostra a conta em cima (`12 + 3 =`) e o resultado embaixo, em destaque
- números no jeito brasileiro, com vírgula e ponto de milhar (`1.234,5`)
- corrige a sujeira das casas decimais: `0,1 + 0,2` dá `0,3`, e não `0,30000000000000004`
- avisa quando alguém tenta dividir por zero
- limita o número a 15 dígitos para sempre caber no visor
- a operação escolhida fica acesa até digitar o próximo número

### TECLADO DO COMPUTADOR

| tecla | o que faz |
| --- | --- |
| `0` a `9` | números |
| `,` ou `.` | vírgula |
| `+` `-` `*` `/` `%` | operações (`x` também multiplica) |
| `Enter` ou `=` | resultado |
| `Backspace` | apaga o último dígito |
| `Esc` ou `Delete` | limpa tudo |

a tecla correspondente na tela "afunda" junto quando você digita pelo teclado.

### VISUAL E ACESSIBILIDADE
- tema escuro em grafite quente com laranja e faixas inclinadas no fundo
- responsivo: no celular a calculadora fica embaixo do título e ocupa a largura da tela
- teclas com nome para leitor de tela (`somar`, `dividir`, `apagar último número`...) e visor que anuncia o resultado
- respeita a opção do sistema de reduzir animações

## :file_folder: ESTRUTURA

```
calculadora/
├── calculadora.html   página e teclas
├── calculadora.css    visual
└── calculadora.js     lógica da conta, visor e teclado
```

## :brain: O QUE APRENDI
- como capturar os cliques dos botões e as teclas do teclado com javascript
- como guardar o estado da conta (primeiro número, operação e número atual) em variáveis
- como formatar números no padrão brasileiro e evitar erros de casas decimais
- como montar o layout com css grid e deixar a página responsiva
- como deixar uma interface usável por teclado e leitor de tela
