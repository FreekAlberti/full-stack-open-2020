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

const Data = ({text, val}) => {
  return (
    <>
      <p>{text}</p>
      <p>{val}</p>
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodInc = () => setGood(good + 1);
  const neutralInc = () => setNeutral(neutral + 1);
  const badInc = () => setBad(bad + 1);

  return (
    <>
      <Title text="give feedback"/>
      <Button text="good" click={goodInc}/>
      <Button text="neutral" click={neutralInc}/>
      <Button text="bad" click={badInc}/>
      <Title text="statistics"/>
      <Data text="good" val={good}/>
      <Data text="neutral" val={neutral}/>
      <Data text="bad" val={bad}/>
    </>
  );
}


ReactDOM.render(<App />, 
  document.getElementById('root')
);

