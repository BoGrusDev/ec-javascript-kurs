class CustomerView {
    customerList(data) {
        Helper.hide('main-container');
        let html = '<table style="width: 400px">';
        html += '<tr><td colspan="2">Kund</td></tr>';
        for (let i=0; i<data.length; i++) {
            html += '<tr>';
                html += '<td>' + data[i].customer_name + '</td>';
                html += '<td><button class="eOpenCustomer" customer-id="' + data[i].customer_id + '">Öppna</button></td>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('customer-list', html);
        Helper.onClassClick('eOpenCustomer', Controller.openCustomer);
        Helper.show('customer-list-container');
    }

    customerView(data) {
        Helper.hide('customer-list-container');
        Helper.setValue('customer-name', data.customer_name);
        Helper.setValue('mobile', data.mobile);
        Helper.setValue('salary', data.salary);
        Helper.show('customer-details-container');
    }
}
