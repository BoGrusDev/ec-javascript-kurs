class CustomerModel {
    async customerList() {
          let promise = await fetch('http://127.0.0.1:3000/customer/list')
          return promise;
      }
  
    async customerGet(customerId) {
        let promise = await fetch("http://127.0.0.1:3000/customer/get?id=" + customerId)
        return promise;
    }

}