import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "../components/weather";
import "weather-icons/css/weather-icons.css";
import Form from "../components/weatherform";
import "../components/form.style.css";

const API_key = "0d5b14422da2ec5587519889596a62fd";
//api call from api.openweathermap.org/data/2.5/weather?q=London,u

export class weatherAPI extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celcius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "wi wi-thunderstorm display-1",
      Drizzle: "wi wi-sleet display-1",
      Rain: "wi wi-storm-showers display-1",
      Snow: "wi wi-snow display-1",
      Atmosphere: "wi wi-fog display-1",
      Clear: "wi wi-day-sunny display-1",
      Clouds: "wi wi-day-fog",
    };
  }

  calCel(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcons(icons, rangeid) {
    switch (true) {
      case rangeid >= 200 && rangeid <= 299:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeid >= 300 && rangeid <= 399:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeid >= 500 && rangeid <= 599:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeid >= 600 && rangeid <= 699:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeid >= 700 && rangeid <= 799:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeid === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeid >= 801 && rangeid <= 899:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const cityin = e.target.elements.city.value;
    const countryin = e.target.elements.country.value;

    if (cityin && countryin) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityin},${countryin}&appid=${API_key}`
      );

      console.log(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityin},${countryin}&appid=${API_key}`
      );
      const response = await api_call.json();
      console.log(response);

      this.setState({
        city: response.name,
        country: response.sys.country,
        celcius: this.calCel(response.main.temp),
        temp_max: this.calCel(response.main.temp_max),
        temp_min: this.calCel(response.main.temp_min),
        description: response.weather[0].description,
        error: false,
      });

      this.get_WeatherIcons(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className="form">
        <Weather
          cityname={this.state.city}
          countryname={this.state.country}
          temp_celcius={this.state.celcius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
        <Form loadweather={this.getWeather} error={this.state.error} />
      </div>
    );
  }
}

export default weatherAPI;
