
type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperate: string;
    conditionText: string;
    icon: string;
  }
}

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temperate && <div>{props.results.temperate} <span>℃</span></div>}
      {props.results.conditionText && <div>
        <img src={props.results.icon} alt="icon" />
        <span>{props.results.conditionText}</span>
      </div>
      }
    </div>
  );
};

export default Results;