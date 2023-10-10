import { useState } from 'react'

const Header = ({anecdotes, selected, votesArr}) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votesArr[selected]} votes</div>
    </>
  )
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Footer = ({anecdotes, votesArr}) => {
  const maxVotes = Math.max(...votesArr)
  const index = votesArr.indexOf(maxVotes)
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[index]}</div>
    </>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votesArr, setVote] = useState(Array(anecdotes.length).fill(0));

  const randomSelect = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const upVote = () => {
    const copyArr = [...votesArr]
    copyArr[selected] += 1
    setVote(copyArr)
  }

  return (
    <>
      <Header anecdotes={anecdotes} votesArr={votesArr} selected={selected}/>
      <Button handleClick={upVote} text="Vote"/>
      <Button handleClick={randomSelect} text="Next anecdote"/>
      <Footer anecdotes={anecdotes} votesArr={votesArr}/>
    </>
    
  )
}

export default App
