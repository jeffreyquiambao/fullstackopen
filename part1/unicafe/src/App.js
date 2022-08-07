import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({value, text}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td> 
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  const average = ((bad*-1) + good)/total
  const positivePercent = (good/total)*100
  
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <StatisticLine value={good} text='good'/>
          <StatisticLine value={neutral} text='neutral'/>
          <StatisticLine value={bad} text='bad'/>
          <StatisticLine value={total} text='all'/>
          <StatisticLine value={average} text='average'/>
          <StatisticLine value={positivePercent} text='positive'/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      </div> 
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App