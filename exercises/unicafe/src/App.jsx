import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <h1>Statistics</h1>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {good+neutral+bad}</div>
      <div>Average: {(good-bad)/(good+neutral+bad)}</div>
      <div>Positive: {good / (good+neutral+bad) * 100} %</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // onClick functions
  const goodClick = () => setGood(good+1)
  const neutralClick = () => setNeutral(neutral+1)
  const badClick = () => setBad(bad+1)

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App