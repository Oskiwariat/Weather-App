import React from "react";

import Form from "./Form";

const APIKey = "25be78386a15a34cab381c020599ee67";

class Weather extends React.Component {
  state = {
    err: null,
    value: "",
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
  };

  render() {
    return (
      <>
        <div>hej</div>
        <Form
          value={this.state.value}
          onchange={this.handleChange}
          onsubmit={this.handleFormSubmit}
        />
      </>
    );
  }
}

export default Weather;
