import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  );
}

const Button = ({text, click}) => {
  return (
    <button type="button" onClick={click}>{text}</button>
  );
}

const Statistic = ({text, val}) => {
  return (
    <>
      <p>{text}</p>
      <p>{val}</p>
    </>
  );
}

const Statistics = (
  {good,
  neutral,
  bad,
  goodText,
  neutralText,
  badText,
  sum,
  average,
  posPerc,
  sumText,
  averageText,
  posPercText}
  ) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <>
        <Statistic text="No feedback given"/>
      </>
    );
  }

  return (
    <>
      <Statistic text={goodText} val={good}/>
      <Statistic text={neutralText} val={neutral}/>
      <Statistic text={badText} val={bad}/>
      <Statistic text={sumText} val={sum}/>
      <Statistic text={averageText} val={average}/>
      <Statistic text={posPercText} val={posPerc + "%"}/>
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const sum = good + neutral + bad;
  
  const goodInc = () => {
    setGood(good + 1);
  }
  const neutralInc = () => { 
    setNeutral(neutral + 1);
  }
  const badInc = () => {
    setBad(bad + 1);
  }
  
  const getPerc = (num, tot) => {
    let perc = (num * 100) / (tot);
    if (Number.isNaN(perc)) {
      return 0
    } else {
      return perc
    }
  }
  
  const posPerc = getPerc(good, sum);
  
  const data = {
    good: good,
    neutral: neutral,
    bad: bad,
    goodText: "Good",
    neutralText: "Neutral",
    badText: "Bad",
    sum: sum,
    average: good - bad,
    posPerc: posPerc,
    sumText: "Total",
    averageText: "Average",
    posPercText: "Positive"
  }

  return (
    <>
      <Title text="give feedback"/>
      <Button text="good" click={goodInc}/>
      <Button text="neutral" click={neutralInc}/>
      <Button text="bad" click={badInc}/>
      <Title text="statistics"/>
      <Statistics {...data}/>
    </>
  );
}


ReactDOM.render(<App />, 
  document.getElementById('root')
);

