import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo]=useState({
            city:"Delhi",
            feelslike: 43.05,
            humidity: 59,
            temp: 36.05,
            tempMax: 36.05,
            tempMin: 36.05,
            weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h1>What's the Weather?</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}