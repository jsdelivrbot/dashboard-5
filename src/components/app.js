import React, { Component } from 'react';

import WeatherView from './weather_view';
import CalendarView from './calendar_view';
import MailView from './mail_view';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <WeatherView />
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <CalendarView />
          <MailView />
        </div>
      </div>
    );
  }
}
