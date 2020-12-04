class CustomerController {
    constructor() {}
    init() {
        Model.customerList()
        .then(response => response.json())
        .then(function(data) {   
            View.customerList(data);
        })
    }

    openCustomer() {
        let customerId = this.getAttribute('customer-id');
        Model.customerGet(customerId)
        .then(response => response.json())
        .then(function(data) {   
            View.customerView(data);
        })

    }
}