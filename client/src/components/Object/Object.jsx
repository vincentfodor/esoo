import React from 'react';
import './Object.css';

const Object = ({ hazard, minDiameter, maxDiameter, name, approachDate, velocity, missDistance }) => {
  const renderHazardClass = hazard ? 'object-hazard object-hazard--type-no-hazard' : 'object-hazard object-hazard--type-hazard';
  const renderHazardLabel = hazard ? 'Hazardous' : 'Not hazardous';
  const predictedDiameter = (minDiameter+maxDiameter)/2;
  const renderAsteroidRepresentation = (predictedDiameter > 120) ? 120 : predictedDiameter
  return (
    <div className="object">
      <div className="object-left">
        <div className={renderHazardClass}>
          <span className='object-hazard-indicator'></span>
          <label className="object-hazard-label">{renderHazardLabel}</label>
        </div>
        <span className="object-asteroid-representation" style={{width: renderAsteroidRepresentation + 'px', height: renderAsteroidRepresentation + 'px'}}></span>
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