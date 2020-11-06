//CONSTRUCTOR DONDE TIENE QUE MOSTRAR LOS DATOS SEGUN SU ID
export class UI {
  constructor() {
    this.location = document.getElementById("weather-location");
    this.desc = document.getElementById("weather-description");
    this.string = document.getElementById("weather-string");
    this.humidity = document.getElementById("weather-humidity");
    this.wind = document.getElementById("weather-wind");
    //ESTE ES EL DONDE MUETRA LA TEMPERATURA MAXIMA
    this.max = document.getElementById("weather-wind1");
    //ESTE ES EL DONDE MUETRA LA TEMPERATURA MINIMA
    this.min = document.getElementById("weather-wind2");
  }
  //ACA SE LLAMA QUE TIENE MOSTRARSE EN ID DEL FORMULARIO
  render(weather) {
    console.log(weather);
    this.location.textContent = weather.name + " / " + weather.sys.country;
    this.desc.textContent = weather.weather[0]["description"];
    this.string.textContent = weather.main.temp + " °C";
    this.humidity.textContent = "Humedad: " + weather.main.humidity + "°C";
    this.wind.textContent = "Vel. Viento: " + weather.wind.speed + " m/s";

    //ACA MUESTRA LA TEMPERATURA MAXIMA
    this.max.textContent = "MAX: " + weather.main.temp_max + "°C";
    //ACA MUESTRA LA TEMPERATURA MINIMA
    this.min.textContent = "MIN: " + weather.main.temp_min + "°C";
  }
}
