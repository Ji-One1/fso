
import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={()=> handleClick()}>{text}</button>
  )
}

const StatisticLine = ({text, stat}) => <div>{text} {stat}</div>

const Statistics = ({good, neutral, bad}) => {

  const totalTerms = good + neutral + bad
  const round = (num) => Math.round(num * 100) / 100
  if (totalTerms === 0){
    return(
      <div>No Feedback Given</div>
    )
  }
return(
<div>
  <StatisticLine text={'Good'} stat={good} />
  <StatisticLine text={'neutral'} stat={neutral} />
  <StatisticLine text={'bad'} stat={bad} />
  <StatisticLine text={'average'} stat={round((good - bad)/ totalTerms)} />
  <StatisticLine text={'positive'} stat={round((good)/ totalTerms)} />

  
</div>
)}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (state, func) => func(state  + 1)

  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={()=> handleClick(good, setGood)} text={'Good'}/>
        <Button handleClick={()=> handleClick(neutral, setNeutral)} text={'neutral'} />
        <Button handleClick={()=> handleClick(bad, setBad)} text={'bad'}/>
      <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App