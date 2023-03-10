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
*  `callback function`
* `setTimeout()`

### Promises

* É um objeto JavaScript com a **promessa** de que algo será realizado
* É usado para operações *assíncronas*
    * Carregar um arquivo
    * Leitura de dados de uma API
    * Outros...
* Uma **promise** poderá ser:
    * Pending: Estado inicial, assim que o Objeto da promessa é iniciado
    * Fullfiled: A **promise** foi concluída com sucesso
    * Rejected: A **promise** foi rejeitada, houve um erro
    * Settled: Seja com sucesso ou com erro, a **promise** foi finalmente concluída

### Async/Await

* Maneira de escrever promises
* *Syntactic Sugar*
