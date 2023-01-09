import { useState } from 'react'

const MostVotes = ({anecdotes, votes}) => {
  const zeroArray = votes.every(item => item === 0)

  if(zeroArray)
  {
    return(<p>Voting has not begun</p>)
  }
  else{
    const maxVotes = Math.max(...votes)
    const indexMaxVotes = votes.indexOf(maxVotes)
    return(<p>{anecdotes[indexMaxVotes]}</p>)
  }

}

const Button = ({handleClick, text}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const newVotes = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(newVotes)

  const nextAnecdote = () => {
    let next = Math.floor(Math.random()*anecdotes.length)
    setSelected(next)
  }

  const countVote = () =>{
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div >
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={countVote} text='vote' />
      <Button handleClick={nextAnecdote} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
}

export default App;
