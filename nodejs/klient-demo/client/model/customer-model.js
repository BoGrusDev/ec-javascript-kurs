class CustomerModel {
    async customerList() {
          let promise = await fetch('http://127.0.0.1:3001/customer/list')
          return promise;
      }
  
    async customerGet(customerId) {
        let promise = await fetch("http://127.0.0.1:3001/customer/get?id=" + customerId)
        return promise;
    }

    async customerUpdate(data) {
        let promise = await fetch('http://127.0.0.1:3001/customer/update', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) }
        )
        return promise;
    }
    
}