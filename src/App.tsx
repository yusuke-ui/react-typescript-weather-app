import Form from "./components/Form";
import Title from "./components/Title";
import Results from "./components/Results";
import React, { useState } from 'react';
import './App.css';

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
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=8373ce37cc3a4b3c99870819213006&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperate: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
          <Form getWeather={getWeather} setCity={setCity} />
          <Results results={results} />
      </div>
    </div>
  );
}

export default App;
