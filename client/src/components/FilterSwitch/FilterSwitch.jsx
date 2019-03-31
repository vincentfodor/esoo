import React, { Component } from 'react';

import './FilterSwitch.css';

class FilterSwitch extends Component {
  render() {
    const { leftLabel, rightLabel, filter, handleSwitchClick, filterActive } = this.props;
    const renderSwitchClassHazardous = filter.hazardous ? ' filter-switch-button--active' : '';
    const renderSwitchClassNonHazardous = filter.nonHazardous ? ' filter-switch-button--active' : '';
    const renderFilterClass = filterActive ? 'filter-switch' : 'filter-switch filter-switch--disabled';
    return (
      <div className={renderFilterClass} onClick={handleSwitchClick}>
        <button className={'filter-switch-button filter-switch-button--left' + renderSwitchClassHazardous}>
          <label className="filter-switch-button-label">{leftLabel}</label>
        </button>
        <button className={'filter-switch-button filter-switch-button--right' + renderSwitchClassNonHazardous}>
          <label className="filter-switch-button-label">{rightLabel}</label>
        </button>
      </div>
    )
  }
}

export default FilterSwitch;