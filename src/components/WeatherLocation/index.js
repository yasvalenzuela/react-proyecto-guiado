import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css'

//creacion de componente funcional
const WeatherLocation = () => (
    <div className = "cityCont">
      <Location className="nameCity" city = {'Santiago'} />
      <WeatherData />
    </div>
  )


export default WeatherLocation; //si exportamos mas cosas el default desaparece

