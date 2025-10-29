const App = () => {
  const x = 1
  let y = 5

  console.log(x, y) // 1 5 are printed
  y += 10
  console.log(x, y) // 1 15 are printed
  y = 'sometext'
  console.log(x, y) // 1 sometext is printed
  // x = 4 this will cause an error

  const t = [1, -1, 3] // an array

  t.push(5)

  console.log(t.length) // 4 is printed
  console.log(t[1]) // printing the element at index 1

  t.forEach(value => {console.log(value)})
  // this will print 1, -1, 3, 5 with its own new line
  // using forEach to loop iteratively through an array
  
  
  const t2 = [1, -1, 3]

  const t3 = t2.concat(5) // creates a new array with the newly added element
  
  console.log(t2)
  console.log(t3)

  const t4 = [1, 2, 3]
  const m1 = t4.map(value => value * 2)
  // map method is used to create a new array with the provided function as a param to create the new items
  console.log(m1) // [2,4,6] is printed

  // map method example 2 to transform array to contain strings of HTML
  const m2 = t4.map(value => '<li>' + value + '</li>')
  console.log(m2)
  //prints out [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

  // destructuring assignment for assigning individual items of an array to variables
  const t5 = [1,2,3,4,5]
  const [first,second, ...rest] = t5
  console.log(first, second) // 1 2 is printed
  console.log(rest) // [3, 4, 5] is printed
  
  // values in objects can contain any types like int, strings, arrays, and even objects 
  const object1 = {
    name: 'James Lim',
    age: 33,
    education: 'PhD',
  }

  const object2 = {
    name: {
      first: 'Dan',
      last: 'Abharam',
    },
    grades: [2, 3, 5, 3],
    department: 'Standard University',
  }

  // to access properties of an object
  // referencing using the dot notation
  console.log(object1.name) // James Lim is printed
  
  // referencing using brackets
  const fieldName = 'age'
  console.log(object1[fieldName]) // 33 is printed
  
  // add properties to an object
  // using dot notation
  object1.address = 'Helsinki'

  // using brackets
  object1['secret number'] = 12341

  // Functions Declaration in JS using arrow method
  const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

  // Function invocation
  const result = sum(1, 5)
  console.log(result)

  // Function with single param, we can exclude the parentheses
  const square = p => {
    console.log(p)
    return p * p
  }

  // Function with a single expression
  const squareMethod2 = p => p * p
  // which is useful for when manipulating arrays
  const t6 = [1,2,3]
  const tSquared = t.map(p => p * p)
  console.log(tSquared)

  // old way to defining functions with function declaration
  function product55(a,b){
    return a * b
  }

  const result55 = product55(2,6) // result55 is now 12

  //2nd way to define functions in the old way is using function expression
  const avg = function(a, b){
    return (a + b) / 2
  }

  const result66 = avg(2,5)
  // result66 is now 3.5

  return(
  <div>
    <p>Hello World!</p>
  </div>
)
}

export default App
