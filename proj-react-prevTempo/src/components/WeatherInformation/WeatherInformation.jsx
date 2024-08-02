/* eslint-disable react/prop-types */


function WeatherInformation({weather}){

    return(
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
            </div>
            <p>{weather.main.temp}</p>
            
        </div>
    )
}

export default WeatherInformation