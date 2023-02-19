import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const handleClick = () => {
    const max = anecdotes.length
    const randInt = Math.floor(Math.random() * (max))
    setSelected(randInt)
   }

  const handleVote = () => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
    if (copy[selected] > copy[top]){
      setTop(selected)
    }


  }
  const lsOfZeroes = []
  anecdotes.forEach(anecdote => lsOfZeroes.push(0))
  const [points, setPoints] = useState(lsOfZeroes)
  const [top, setTop] = useState(0)
  const [selected, setSelected] = useState(0)



  return (
    <div>
      <h1>Anectdote of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <h1>Anectdote with most votes</h1>
      <div>
      {anecdotes[top]}
      <div>has {points[top]} votes</div>
      </div>

    </div>
  )
}

export default App