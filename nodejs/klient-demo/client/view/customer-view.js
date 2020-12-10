class CustomerView {
    
    customerList(data) {
        Helper.hideClass('section-container'); 
        
        let html = '<table class="table" style="width: 800px">';
        html += '<tr><td colspan="2">Kund</td></tr>';
        for (let i=0; i<data.length; i++) {
            html += '<tr>';
                html += '<td>' + data[i].customer_name + '</td>';
                html += '<td><button class="button is-small is-link eOpenCustomer" customer-id="' + data[i].customer_id + '">Öpnna</button></td>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('customer-list', html);
        Helper.show('customer-list-container');
        Helper.onClassClick('eOpenCustomer',Controller.customerOpen); 
    }

    customerView(data) {
        Helper.hideClass('section-container');
        Helper.setValue('customer-name', data.customer_name);
        Helper.setValue('mobile', data.mobile);
        Helper.setValue('salary', data.salary);
        Helper.show('customer-details-container');
    }

    customerEdit() {
        document.getElementById("customer_name").disabled = true;
        document.getElementById("mobile").disabled = true;
        document.getElementById("salary").disabled = true;
    }
    
    backCustomerList() {
        Helper.hideClass('section-container');
        Helper.show('customer-list-container');
    }

}
