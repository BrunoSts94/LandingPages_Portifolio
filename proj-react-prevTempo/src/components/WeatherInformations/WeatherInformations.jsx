/* eslint-disable react/prop-types */

function WeatherInformations({weather})
{
    if (!weather || !weather.weather || weather.weather.length === 0) {
        return <p>Nenhuma cidade selecionada, digite o nome de uma cidade para pesquisar.</p>;
    }
    return(
        <div>
            <h2>{weather.name}</h2>

            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p>{Math.round(weather.main.temp)}°C</p> 
            </div>

            <div>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
            
            
        </div>
    )
}

export default WeatherInformations