/*const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)
  return(
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}*/

const Hello = (props) =>{ // new component defined as Hello (First letter of a React Component must be capitalized)
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

// data can be passed to components via props (an object with different fields like props.name and props.age)

const App = () => { // the Hello component is used here multiple times inside the App component
  const name = 'Peter'
  const age = 10
  
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age}/>
    </div>
  )
}

// if the value of the prop is not hardcoded, it must be wrapped with curly braces


/* optionally, we can return an array of components but it is not wise as it makes the code look abit ugly and when defining root component of the application
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}
*/

/* using fragments to wrap elements to be returned with an empty element tag <>
const App = () => {
  return(
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Footer />
    </>
  )
}
*/

/* In React, individual things rendered in braces must e primitive values like strings and numbers AND NOT objects
const App = () => {
  const friends = [
  { name: 'Peter', age: 4},
  { name: 'Maya', age: 10},
]

  return(
  <div>
    <p>{friend[0].name} {friend[0].age}</p>
    <p>{friend[1].name} {friend[1].age}</p>
  </div>
  )
  }

*/


export default App // do not remove this

// this file defines a React component with the name App
// the React component is defined as a JavaScript function using the arrow function syntax
// the function is then assigned to a constant variable named App
// the function returns the value inside the parentheses that is representative of the UI structure of the component

// in jsx, every tag must be closed (even if it is self-closing like <br> or <img>)