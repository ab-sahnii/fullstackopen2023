import { useState } from "react"

const Display = ({counter}) => {
  return(<div>{counter}</div>)
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={setZero} text='zero' />
      <Button onClick={decreaseByOne} text='minus' />

    </div>
  );
}

export default App;
