# Programação Funcional

## Por que programação Funcional?

* Organizar uma linha de raciocínio
* Entender uma nova maneira de abordar os problemas
* Algumas tecnologias tem como requisito

## O que é programação Funcional?

É um paradigma de progromação como a Orientação a Objetos, por exemplo

* Uma maneira de resolver problemas

### Funções

* Pequenas tarefas dentro de uma função
* Abstrair um problema e isolar ele dentro da função
* Não modificar dados fora da tela
* Funções pequenas e bem específicas no que fazem

#### Característias principais da função

* Um **dado** (ou mais) **entra** em uma função e um **novo dado sai**
* Não altera dados
* Não guarda estado `stateless`

## Linguagens funcionais

* JavaScript (multiparadigma)
* PHP (multiparadigma)
* Elixir
* Haskell

## Pontos Positivos

* Fácil manutenção
* Fácil uso de testes
    * Funções isoladas e consistentes
* Códigos mais confiáveis

## O que vamos aprender?

* [x] Paradigmas
    * [x] Programação Imperativa
    * [x] Programação Declarativa
* [x] Dados
    * [x] Imutabilidade
    * [x] Stateless
* [x] Características das Funções
    * [x] Funções Independenes
    * [x] Funções Puras
    * [x] First-class
    * [x] High-order
    * [x] Composição de funções

### Programação Imperativa

* O código é **pensado e gerado em sequência**
* O código é pensado como um passo-a-passo, como uma **receita de bolo**
* Uma coisa depende da outra
* O estadp de um dado é **alterado constantemente** causando mutações nas variáveis
* **Orientação a Objetos** é um tipo de paradigma imperativo

### Programação Declarativa

* O código é gerado para **fazer algo**, não importa **como**
* **O que fazer** e não **como fazer**
* Não há a necessidade de um **passo a passo** no código
* **Programação funcional** é um tipo de paradigma declarativo

### Imutabilidade

* Uma variável não vai ser alterada
* Se você precisar mudar uma váriavel, você deve **criar uma nova**

### Stateless

* Não guarda **estado**
* A função só conhece os dados entregues a ela
* A resposta não poderá variar

### Funções

Vamos conhecer algumas características das fuções na **programação funcional**

#### Funções independentes

* Deve conter ao menos 1 **argumento**
* Deve **retornar** algo
* Nada que acontecer dentro da função afeta o "mundo externo"
    * Dados imutáveis
    * Não guarda estado
* Não faremos uso de loops(`for`, `while`), mas se houver a necessidade de tal, usaremos **recursão** (uma função chama ela mesma)

#### Funções puras

* Não pode **depender de nenhum dado externo** a menos que tenha sido passado como argumento
* Não deverá sofrer **nenhuma interferência** do mundo externo a ela
* Se o argumento é o mesmo, **o retorno não poderá ser diferente** quando a função for chamada novamente
* Não terá **nenhum efeito colateral** no seu código
    * Não irá modificar nenhum dado
    * Não irá guardar nenhum estado

#### First-class

* Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
* A função poderá ser entendida como uma variável

#### High-order

* Funções que *8recebem funções** como argumentos
* Funções que podrão **retornar ouras funções**

#### Composição de funções

* Um **encadeameno** de funções
* Uma função que retorna um dado e vai para outra função, que retorna um outro dado e vai para uma nova função e assim sucessivamente...
