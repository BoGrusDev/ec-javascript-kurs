class CurrencyView {
    
    list(data) {
        Helper.hideClass('section-container');
        let html = '<table class="table" style="width: 400px">';
        html += '<tr><td colspan="2">Valuta</td><td class="has-text-right">Kurs</td></tr>';
        for (let i=0; i<Current.setting.currency.length; i++) {
            html += '<tr>';
                html += '<td>' + Current.setting.currency[i][1] + '</td>';
                html += '<td>' + Current.setting.currency[i][0] + '</td>';
                let rate = (Number(data[Current.setting.currency[i][0]]) * 100).toFixed(2);            
                html += '<td class="has-text-right">' + rate + '</td>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('currency-list', html);
        Helper.show('currency-list-container');   
    }
    
}
