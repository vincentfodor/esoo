import React, { Component } from 'react';
import './App.css';

import Object from './components/Object/Object.jsx'

class App extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="app">
        <div className="container">
          <div className="container-item container-item--grow-1">
            <h1 className="headline">{headline}</h1>
            <h2 className="subheadline">(EARTH SURROUNDING OBJECT OBSERVER)</h2>
          </div>
          <div className="container-item">
            <p className="paragraph">This app is built for observing all known objects surrounding our planet, claiming them as hazardous or not and displaying object-data.</p>
            <p className="paragraph">Thanks to NASA's NeoWS service for serving the data needed in this project.</p>
            <p className="paragraph">Thanks, Vincent!</p>
          </div>
        </div>
        <div className="container container--no-flex">
          <Object hazard={false} minDiameter={16.9650434629} maxDiameter={37.9349904244} name="2018 VS7" approachDate="2019-03-25" velocity={8.2808548219} missDistance={45702068} />
          <Object hazard={false} minDiameter={6.0891262211} maxDiameter={13.6157001539} name="2018 VS7" approachDate="2019-03-25" velocity={8.2808548219} missDistance={45702068} />
          <Object hazard={false} minDiameter={3195.6188672131} maxDiameter={7145.6210172693} name="2018 VS7" approachDate="2019-03-25" velocity={8.2808548219} missDistance={45702068} />
          <Object hazard={false} minDiameter={21.113244479} maxDiameter={47.2106498806} name="2018 VS7" approachDate="2019-03-25" velocity={8.2808548219} missDistance={45702068} />
        </div>
      </div>
    );
  }
}

export default App;
