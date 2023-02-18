
import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={()=> handleClick()}>{text}</button>
  )
}

const Part = ({text, stat}) => <div>{text} {stat}</div>




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
      <Part text={'Good'} stat={good} />
      <Part text={'neutral'} stat={neutral} />
      <Part text={'bad'} stat={bad} />

    </div>
  )
}

export default App