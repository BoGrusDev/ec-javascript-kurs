class WeatherModel {
    async list() {
          let promise = await fetch('http://127.0.0.1:3001/weather')
          return promise;
      }     

}