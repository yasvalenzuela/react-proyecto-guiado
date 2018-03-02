import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className = 'extraInfoCont'>
    <span className = 'dataHumidity'>Humidity: {`${humidity} % `}</span>
    <span className = 'dataWind'>Wind: {`${wind} `}</span>
  </div>
 )

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

 export default WeatherExtraInfo