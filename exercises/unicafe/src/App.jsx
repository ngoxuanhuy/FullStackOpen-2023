import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, good, neutral, bad}) => {
  if (text === "Good")
    return <tbody><tr><td>Good</td><td>{good}</td></tr></tbody>
  else if (text === "Neutral")
    return <tbody><tr><td>Neutral</td><td>{neutral}</td></tr></tbody>
  else if (text === "Bad")
    return <tbody><tr><td>Bad</td><td>{bad}</td></tr></tbody>
  else if (text === "Average")
    return <tbody><tr><td>Average</td><td>{(good-bad)/(good+neutral+bad)}</td></tr></tbody>
  else if (text === "Positive")
    return <tbody><tr><td>Positive</td><td>{good / (good+neutral+bad) * 100} %</td></tr></tbody>
}

const Statistics = ({good, neutral, bad}) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return <h3>No feedback given</h3>
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <StatisticLine text="Good" good={good} bad={bad} neutral={neutral}/>
        <StatisticLine text="Neutral" good={good} bad={bad} neutral={neutral}/>
        <StatisticLine text="Bad" good={good} bad={bad} neutral={neutral}/>
        <StatisticLine text="Average" good={good} bad={bad} neutral={neutral}/>
        <StatisticLine text="Positive" good={good} bad={bad} neutral={neutral}/>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // onClick functions
  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App