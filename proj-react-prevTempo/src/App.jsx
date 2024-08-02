import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchcity(){
  
    const city = inputRef.current.value
    const key = "83af7af09b40caf14cf5629820651c3a"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const receiveData = await axios.get(url)

    setWeather(receiveData.data)
  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searchcity}>Buscar</button>

      <WeatherInformation weather={weather}></WeatherInformation>
    </div>
  )
}

export default App
