const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        exercises1={exercises1} 
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3}
      />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
    )
}

const Content = (props) => {
  const arr = [
    { part: props.part1, exercises : props.exercises1 },
    { part: props.part2, exercises : props.exercises2 },
    { part: props.part3, exercises : props.exercises3 },
  ]

  return(
    <div>
      <Part part={arr[0].part} exercises={arr[0].exercises} />
      <Part part={arr[1].part} exercises={arr[1].exercises} />
      <Part part={arr[2].part} exercises={arr[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

export default App