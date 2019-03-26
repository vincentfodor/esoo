import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import './App.css';
import logo from './esoo@0.5x.png';

import Object from './components/Object/Object.jsx'

import Moment from 'moment';

const GET_OBJECTS = gql`
  query getObjects($startDate: String!, $endDate: String!) {
    getObjects(
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      name
      diameter_min
      diameter_max
      is_potentially_hazardous_asteroid
      close_approach_date
      relative_velocity
      miss_distance
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="container-item container-item--grow-1">
            <img className="logo" src={logo} alt="ESOO Logo" />
            <h2 className="subheadline">(EARTH SURROUNDING OBJECT OBSERVER)</h2>
          </div>
          <div className="container-item">
            <p className="paragraph">This app is built for observing all known objects surrounding our planet, claiming them as hazardous or not and displaying object-data.</p>
            <p className="paragraph">Thanks to NASA's NeoWS service for serving the data needed in this project.</p>
            <p className="paragraph">Thanks, Vincent!</p>
          </div>
        </div>
        <div className="container container--no-flex">
          <Query query={GET_OBJECTS} variables={{startDate: Moment().format('YYYY-MM-DD'), endDate: Moment().day(7).format('YYYY-MM-DD')}}>
            {({ loading, error, data }) => {
              if(loading) return <p>Loading data...</p>
              if(error) return <p>error</p>

              const objects_hazardous = data.getObjects.filter(object => object.is_potentially_hazardous_asteroid === true).length;
              const objects_not_hazardous = data.getObjects.length - objects_hazardous;

              return (
                <div className="objects">
                  <p className="paragraph objects-indicator">
                    There are currently <span className="objects-indicator-num objects-indicator-num--hazardous">{objects_hazardous}</span> hazardous and <span className="objects-indicator-num objects-indicator-num--not-hazardous">{objects_not_hazardous}</span> non-hazardous objects surrounding earth.
                  </p>
                  {data.getObjects.map(object => <Object key={object.id} hazard={object.is_potentially_hazardous_asteroid} minDiameter={object.diameter_min} maxDiameter={object.diameter_max} name={object.name} approachDate={object.close_approach_date} velocity={object.relative_velocity} missDistance={object.miss_distance} />)}
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default App;
