
type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperate: string;
    conditionText: string;
    icon: string;
  }
}

const Results = ({ results }: ResultsPropsType) => {
  const { cityName, country, temperate, conditionText, icon } = results;
  return (
    <>
      {cityName && <div className="results-city">{cityName}</div>}
      {country && <div className="results-country">{country}</div>}
      {temperate && <div className="results-temp">{temperate} <span>℃</span></div>}
      {conditionText && <div className="results-condition">
        <img src={icon} alt="icon" />
        <span>{conditionText}</span>
      </div>
      }
    </>
  );
};

export default Results;