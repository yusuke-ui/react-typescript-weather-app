import Form from "./components/Form";
import Title from "./components/Title";
import Results from "./components/Results";
import React, { useState } from 'react';
import './App.css';
import axios from "axios";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperate: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperate: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e) => {
    e.preventDefault();
    axios.get(`https://api.weatherapi.com/v1/current.json?key=8373ce37cc3a4b3c99870819213006&q=${city}&aqi=no`)
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperate: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
        setCity("");
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
          <Form getWeather={getWeather} setCity={setCity} city={city}/>
          <Results results={results} />
      </div>
    </div>
  );
}

export default App;
