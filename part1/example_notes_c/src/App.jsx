
const App = () => {

  // object methods and "this"
  const arto = {
    name: 'James',
    age: 35,
    education: 'PhD',
    greet: function(){
      console.log('this is a test using this keyword ' + this.name) // this is used to refer to the object itself
    }, // functions can be defined as part of an object
    doAddition: function(a, b){
      console.log(a + b)
    }
  }
  arto.greet() // "this is a test using this keyword James" is printed

  // methods can be assigned to objects evena after the object is created
  arto.growOlder = function(){ 
    this.age +=1
  }

  console.log(arto.age) // 35 is printed
  arto.growOlder()
  console.log(arto.age) // 36 is printed


  const referenceTodoAddition = arto.doAddition
  referenceTodoAddition(1,2) // 3 is printed

  arto.greet() // "this is a test using this keyword James" is printed
  
  const referenceToGreet = arto.greet
  referenceToGreet() // prints "this is a test using this keyword undefined"
  // this happens as the method is called through a reference where this will
  // refer to the global object instead of the "arto" object 

  // for example, when calling the same greet method wrapped within the setTimeout function
  // it is the JS engine that actually calls function
  setTimeout(arto.greet, 1000)

  // one way to mitigate this potential problem is to use the "bind" method
  setTimeout(arto.greet.bind(arto), 1000)

  // Classes in JS
  // to mimic OOP classes like in other OOP languages
  class Person{
    constructor(name, age){
      this.name = name
      this.age = age
    }
    greet(){
      console.log('hello, my name is ' + this.name)
    }
  }

  const adam = new Person('Adam Levine', 29)
  adam.greet()

  const janja = new Person('Caitlin Cold', 35)
  janja.greet()

  // nice to know objects and classes but with the new Hook feature on React
  // there's no concrete use for JS's class syntax

  return(
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App