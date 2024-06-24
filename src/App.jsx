import { useState } from 'react'
import HomeComponent from "./Components/HomeComponent"
import QuizComponent from "./Components/QuizComponent"
import ResultComponent from "./Components/ResultComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         
        <HomeComponent />
        <QuizComponent />
        <ResultComponent />
      </div>
     
    </>
  )
}

export default App
