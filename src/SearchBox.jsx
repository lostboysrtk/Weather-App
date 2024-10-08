import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}){
    
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);


    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3da3dd79cd210d8699f1a037a08e1c8c";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelslike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(e){
            throw e;
        }
    };

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
    
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(e){
            setErr(true);
        }
    };

    return(
        <div className="SearchBox">
            {/* <h3>What's the Weather?</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange}></TextField>
                <br></br><br></br>
                <Button variant="outlined" type="submit">Search</Button>

                {err && <p style={{color:"crimson"}}>Not a valid place or data not found!</p>}
            </form>
        </div>
    )
}



