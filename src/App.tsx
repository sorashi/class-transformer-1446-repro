import 'reflect-metadata'
import { Type, instanceToPlain, plainToInstance } from 'class-transformer'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class Person {
    @Type(() => Number)
    public numbers: Set<number> = new Set()
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const person = new Person()
    person.numbers = new Set([1,2,3,4,5])
    const plain = instanceToPlain(person)
    const instance = plainToInstance(Person, plain)

    console.log("========")
    console.log(person)
    console.log(plain)
    console.log(instance)
    console.log("========")
  }, [])
  
  return (
    <>
      <div>
            <p>Hello, World</p>
      </div>
    </>
  )
}

export default App