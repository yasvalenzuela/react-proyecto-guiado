import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from '../../../constant/weathers';

const StateToIconName = (weatherState) => {
    switch(weatherState) {
        case CLOUD:
          return 'cloud'; //retorna el nombre del ícono
        case  CLOUDY: 
          return 'cloudy';
        case SUN: 
          return 'day-sunny';
        case RAIN:
          return 'rain';
        case SNOW: 
          return 'snow';
        case WINDY: 
          return 'windy';
        case THUNDER:
          return 'day-thunderstorm';
        case DRIZZLE:
          return 'day-showers';
        default:
          return 'tsunami';
    }
}

/*const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case 'day-sunny':
        return (<weatherIcons name = "day-sunny" size = "2x"/>);
        default:
        return (<weatherIcons name = "cloud" size = "2x"/>);
    }
}*/
const getWeatherIcon = (weatherState) => {
        return (
        <WeatherIcons name = {StateToIconName(weatherState)} size = "2x"/>
    );
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className = 'weatherTemCont'>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature}°C`}</span>
    </div>
)

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;