class MainController {
    constructor() {}
   
    customerList() {
        Model.customerList()
        .then(response => response.json())
        .then(function(data) {   
            Current.customer = data;
            View.customerList(data);
        })
    }

    currencyList() {
        ModelCurrency.list()
        .then(response => response.json())
        .then(function(data) {   
            ViewCurrency.list(data);
        })
    }

    weatherList() {
        ModelWeather.list()
        .then(response => response.json())
        .then(function(data) {     
            ViewWeather.list(data);
        })
    }

   navAction() {
       let action = this.getAttribute('action');  
        if (action == "customer") {
            Controller.customerList();
        }
        else if (action == "currency") {
            Controller.currencyList();
        }
        else if (action == "weather") {
            Controller.weatherList();
        }
    }

    commandAction() {
      
        let action = this.getAttribute('action');  
         if (action == "save") {
            let data = {};
            data._id = Current.customerId;
            data.name = Helper.getValue('customer-name');
            data.mobile = Helper.getValue('mobile');
            data.salary = Helper.getValue('salary');
            Model.customerUpdate(data)
            .then(response => response.json())
            .then(function(data) {   
                Controller.customerList(data);
            })
            
         }
         else  if (action == "back-list") {
            View.backCustomerList();
        }
     }

    customerOpen() {
        let customerId = this.getAttribute('customer-id');
        Current.customerId = customerId;
        Model.customerGet(customerId)
        .then(response => response.json())
        .then(function(data) {   
            View.customerView(data);
        })

    }
}