class CurrencyModel {
    async list() {
          let promise = await fetch('http://127.0.0.1:3001/currency/list')
          return promise;
      }     

}