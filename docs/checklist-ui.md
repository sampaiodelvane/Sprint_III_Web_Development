# Modelo de Teste de UI (Interface) - Jovi V70

Grupo OptiCode | Sprint 3 - Front-End Design Engineering

Checklist para conferir a interface antes de entregar o projeto.
Marque `[x]` no que estiver certo e escreva o que precisa ser corrigido.

---

## 1. Fidelidade ao prototipo

- [ ] As cores sao as mesmas do prototipo (`#1f346b` de fundo e `#5f77ff` nos blocos)
- [ ] A tipografia e a mesma (Arial / Helvetica, sans-serif)
- [ ] As imagens do prototipo aparecem na pagina
- [ ] Os assuntos do prototipo existem no React (armazenamento, filtros, galeria e rodape)

## 2. Layout e espacamento

- [ ] Nenhum texto esta encostado na borda do bloco
- [ ] O espacamento entre os blocos e parecido em toda a pagina
- [ ] O conteudo fica centralizado na tela
- [ ] Nao aparece barra de rolagem horizontal
- [ ] O rodape fica na parte de baixo da pagina

## 3. Leitura e contraste

- [ ] O texto branco tem bom contraste com o fundo azul
- [ ] Os titulos sao maiores que os paragrafos
- [ ] Nenhuma fonte esta menor que 12px
- [ ] Todas as imagens tem o atributo `alt` preenchido

## 4. Imagens e filtros

- [ ] As 4 fotos novas aparecem (ceupordosol, trilha, campo e fotosol)
- [ ] Nenhuma foto aparece esticada ou achatada
- [ ] Clicar em "Preto e Branco" tira a cor da foto na hora
- [ ] Clicar em "Vintage" deixa a foto amarelada
- [ ] Clicar em "Modo Noturno" deixa a foto mais escura
- [ ] Clicar em "Normal" volta a foto ao normal
- [ ] O botao do filtro escolhido fica destacado (fundo branco)
- [ ] A descricao embaixo da foto muda junto com o filtro
- [ ] Da para trocar de filtro pelo teclado (Tab ate os botoes e setas)
- [ ] A foto do hero abre rapido e nao quebra o layout

## 5. Login

- [ ] O bloco de login aparece assim que a pagina abre
- [ ] O conteudo da camera fica escondido antes do login
- [ ] Digitar um usuario errado mostra a mensagem de erro em vermelho
- [ ] Digitar a senha errada mostra a mensagem de erro em vermelho
- [ ] Com `opticode` e `1234` o conteudo aparece e o bloco de login some
- [ ] A mensagem de erro nao aparece com os campos ainda vazios
- [ ] A dica com o usuario e a senha de teste esta visivel no bloco

## 6. Links do menu

- [ ] "Armazenamento" leva ate o bloco de armazenamento
- [ ] "Filtros" leva ate o bloco de filtros
- [ ] "Galeria" leva ate a central de conteudo
- [ ] "Contato" leva ate o rodape
- [ ] O botao "Ver a galeria" do hero funciona

## 7. Responsividade

| Largura | O que conferir | Resultado |
| --- | --- | --- |
| 1366px (notebook) | Hero e armazenamento em duas colunas | ( ) OK ( ) Ajustar |
| 768px (tablet) | Blocos ocupando a tela sem quebrar | ( ) OK ( ) Ajustar |
| 375px (celular) | Cabecalho, hero e rodape empilhados | ( ) OK ( ) Ajustar |

> Dica: use o F12 do navegador e ative o modo dispositivo (Ctrl + Shift + M).

## 8. Numeros calculados com Math

- [ ] A barra de armazenamento mostra a mesma porcentagem que esta escrita ao lado
- [ ] "Usado" + "Livre" resulta no total de 15 GB
- [ ] O maior e o menor arquivo batem com os tamanhos mostrados na galeria
- [ ] A media por foto esta arredondada (uma casa depois da virgula)
- [ ] Ao recarregar a pagina, a foto do dia as vezes muda (Math.random)

## 9. localStorage

- [ ] Ao abrir a pagina pela primeira vez aparece "este e o seu primeiro acesso"
- [ ] Ao recarregar, o contador de visitas aumenta em 1
- [ ] Ao recarregar, a data do ultimo acesso passa a aparecer no rodape

## 10. Erros do console

- [ ] Abrir o F12 > Console e conferir se nao existe nenhum erro em vermelho

## 11. Resultado final

| Item | Quantidade |
| --- | --- |
| Itens aprovados | |
| Itens reprovados | |
| Data da conferencia | |
| Responsavel | |
