class CustomerController {
    constructor() {}
   
    listCustomer() {
        Model.customerList()
        .then(response => response.json())
        .then(function(data) {   
            Current.customer = data;
            View.customerList(data);
        })
    }

   navAction() {
       let action = this.getAttribute('action');  
        if (action == "customer") {
            Controller.listCustomer();
        }
    }

    commandAction() {
      
        let action = this.getAttribute('action');  
         if (action == "save") {
            let data = {};
            data.customer_name = Helper.getValue('customer-name');
            data.mobile = Helper.setValue('mobile');
            data.salary = Helper.setValue('salary');
            alert('Here is the update code');
            /*
            Model.customerUpdate(Current.customerId, data)
            .then(response => response.json())
            .then(function(data) {   
                // View.customerView(data);
            })
            */
         }
         else  if (action == "back-list") {
            View.backCustomerList();
        }
     }

    openCustomer() {
        let customerId = this.getAttribute('customer-id');
        Current.customerId = customerId;
        Model.customerGet(customerId)
        .then(response => response.json())
        .then(function(data) {   
            View.customerView(data);
        })

    }
}