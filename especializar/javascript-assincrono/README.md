# JavaScript Assíncrono

## O que vamos estudar?

* [x] Síncrono vs Assíncrono  
* [x] Callback
* [x] `setTimeout`
* [x] Conectar API com HTTPS e Callback
* [x] Promises
    * [x] Promises com Fetch
    * [x] Promises com Axios
* [x] Codesandbox
* [x] Axios
* [x] Async / Await
    * [x] Async / Await com Fetch
    * [x] Async / Await com Axios


### Síncrono vs Assíncrono

* Eu um sistema síncrono (*synchronous*), uma tarefa é iniciada após a conclusão de outra.
*  `callback function`?
* `setTimeout()`

### Promises

* É um objeto JavaScript com a **promessa** de que algo será realizado
* É usado para operações *assíncronas*
    * Carregar um arquivo
    * Leitura de dados de uma API
    * Outros...
* Uma **promise** poderá ser:
    * ![#f03c15]{c: #f8f8f2}Pending{/c}: Estado inicial, assim que o Objeto da promessa é iniciado
    * {c: #50fa7b}Fullfiled{/c}: A **promise** foi concluída com sucesso
    * {c: #ff5555}Rejected{/c}: A **promise** foi rejeitada, houve um erro
    * {c: #8be9fd}Settled{/c}: Seja com sucesso ou com erro, a **promise** foi finalmente concluída

### Async/Await

* Maneira de escrever promises
* *Syntactic Sugar*
