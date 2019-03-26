import React from 'react';
import './Object.css';

import asteroidImage from './asteroid@0.5x.png';

const Object = ({ hazard, minDiameter, maxDiameter, name, approachDate, velocity, missDistance }) => {
  const renderHazardIndocatorClass = hazard ? 'object-hazard-indicator object-hazard-indicator--hazard' : 'object-hazard-indicator object-hazard-indicator--no-hazard'
  const predictedDiameter = (minDiameter+maxDiameter)/2;
  const renderAsteroidRepresentation = (predictedDiameter > 120) ? 120 : predictedDiameter
  return (
    <div className="object">
      <div className="object-left">
        <span className={renderHazardIndocatorClass}></span>
        <img className="object-asteroid-representation" src={asteroidImage} alt="Asteroid rep" width={renderAsteroidRepresentation + 'px'} height={renderAsteroidRepresentation + 'px'} />
      </div>
      <div className="object-right">
        <h2 className="object-headline">{name}</h2>
        <div className="container container--no-margin">
          <div className="container-item">
            <h2 className="object-subheadline">Gen. data</h2>
            <table className="object-props" border="0">
              <tbody>
                <tr className="object-props-row">
                  <td className="object-props-col object-props-col-left">D. min</td>
                  <td className="object-props-col">{minDiameter.toFixed(6) + ' m'}</td>
                </tr>
                <tr className="object-props-row">
                  <td className="object-props-col object-props-col-left">D. max</td>
                  <td className="object-props-col">{maxDiameter.toFixed(6) + ' m'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container-item container-item--padding-left">
            <h2 className="object-subheadline">Approach</h2>
            <table className="object-props" border="0">
              <tbody>
                <tr className="object-props-row">
                  <td className="object-props-col" colSpan="2">{approachDate}</td>
                </tr>
                <tr className="object-props-row">
                  <td className="object-props-col object-props-col-left">Velocity</td>
                  <td className="object-props-col">{velocity.toFixed(6) + ' km/s'}</td>
                </tr>
                <tr className="object-props-row">
                  <td className="object-props-col object-props-col-left">Miss dist.</td>
                  <td className="object-props-col">{missDistance + ' km'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Object;