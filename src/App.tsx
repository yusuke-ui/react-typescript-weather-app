import { useState } from 'react';
import Form from "./components/Form";
import Title from "./components/Title";
import Results from "./components/Results";
import Loading from "./components/Loading";
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
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);
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
        setCity("");
        setLoading(false);
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
          <Form getWeather={getWeather} setCity={setCity} city={city}/>
          <Results results={results} />
            {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
