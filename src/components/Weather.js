import React from "react";

import Form from "./Form";
import View from "./View";

const APIKey = "25be78386a15a34cab381c020599ee67";

class Weather extends React.Component {
  state = {
    err: null,
    value: "",
    temp: "",
    weatherdescription: "",
    city: "",
    weather: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    if (this.state.value === "") {
      return alert("Enter the city!");
    }

    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return alert("Most likely the city you entered does not exist!");
        }
      })
      .then((data) => {
        this.setState({
          err: false,
          value: "",
          city: this.state.value,
          temp: data.main.temp,
          weatherdescription: data.weather[0].description,
          weather: data.weather[0].main,
        });
      })
      .catch((err) => {
        if (err) {
          this.setState({
            err: true,
            city: this.state.value,
            value: "",
            temp: "",
            weatherdescription: "",
            weather: "",
          });
        }
      });
  };

  render() {
    const { err, value, city, temp, weatherdescription, weather } = this.state;
    return (
      <>
        <div className="wrap">
          <Form
            value={value}
            onchange={this.handleChange}
            onsubmit={this.handleFormSubmit}
          />
          <View
            err={err}
            city={city}
            temp={temp}
            weatherdescription={weatherdescription}
            weather={weather}
          />
        </div>
      </>
    );
  }
}

export default Weather;
