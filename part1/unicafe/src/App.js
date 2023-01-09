import {useState} from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) =>{
  return(
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  let all = good+neutral+bad
  let average = (good*1 + bad*-1)/all
  let pcntPositive = (good*100)/all

  if(all === 0)
  {
    return(<div>
      <h2>Statistics</h2>
      <p>No Feedback Given.</p>
      </div>)
  }

  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
        <StatisticLine text='Good' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Bad' value={bad}/>
        <StatisticLine text='All' value={all}/>
        <StatisticLine text='Average' value={average}/>
        <StatisticLine text='Positive' value={pcntPositive}/>
        </tbody>
      </table>
      

    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const clickGood = () => setGood(good+1)
  const clickNeutral = () => setNeutral(neutral+1)
  const clickBad = () => setBad(bad+1)

  
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={clickGood} text='good'/>
      <Button handleClick={clickNeutral} text='neutral'/>
      <Button handleClick={clickBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
