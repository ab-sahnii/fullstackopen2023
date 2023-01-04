

const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age
    
  return(
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
   
  return(<>
    <h1>Greeting</h1>
    <Hello name='George' age={26+10}/>
    <Hello name={name} age={age}/>
    
  </>)
}

export default App