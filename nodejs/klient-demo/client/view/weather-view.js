class WeatherView {

    list(data) {
        Helper.hideClass('section-container');
        let html = '<table class="table" style="width: 400px">';
        html += '<tr><td>Ort</td><td>Beskrivning</td><td class="has-text-right">Temperatur</td></tr>';
        for (let i=0; i<data.length; i++) {
            html += '<tr>';
                html += '<td>' + data[i].name + '</td>';
                html += '<td>' + data[i].desc + '</td>';        
                html += '<td class="has-text-right">' + data[i].temp + '</td>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('weather-list', html);
        Helper.show('weather-list-container');   
    }
}