import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

function Weather(){
    let [weatherData, setWeatherData] = useState({
        city: "Mumbai",
        feelslike: 36.63,
        humidity: 69,
        maxTemp: 30.74,
        minTemp: 30.74,
        temp: 30.74,
        weather: "scattered clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherData(newInfo);
    }

    return(
        <div>
            <h2 style={{textAlign: "center"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherData}/>
        </div>
    )
}

export default Weather