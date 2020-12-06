class CustomerView {
    
    customerList(data) {
        Helper.hide('main-container');
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
        Helper.onClassClick('eOpenCustomer',Controller.openCustomer); 
    }

    customerView(data) {
        Helper.hide('customer-list-container');
        Helper.setValue('customer-name', data.customer_name);
        Helper.setValue('mobile', data.mobile);
        Helper.setValue('salary', data.salary);
        Helper.show('customer-details-container');
    }

    backCustomerList() {
        Helper.hide('customer-details-container');
        Helper.show('customer-list-container');
    }

}
