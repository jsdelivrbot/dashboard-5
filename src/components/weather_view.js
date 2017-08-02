import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchWeather } from '../actions/index';

class WeatherView extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const { weather } = this.props;

    if (!weather) {
      return <div>Loading...</div>
    }

    const weatherIcon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    console.log(weather);

    return (
      <div className="col-sm-3 col-md-2 sidebar weather">
        <h2>Weather</h2>
        <h4>{weather.name}</h4>
        <img src={weatherIcon} />
        <p>{weather.main.temp} °C</p>
        <p>{weather.weather[0].description}</p>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, { fetchWeather })(WeatherView);
