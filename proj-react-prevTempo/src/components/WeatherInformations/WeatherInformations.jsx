/* eslint-disable react/prop-types */

function WeatherInformations({ weather }){
    console.log(weather)
    return(
        <div>
            <h2>{weather.name}</h2>
            <img src={``} />
            
        </div>
    )
}

export default WeatherInformations