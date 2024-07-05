import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setDelete } from '../redux/features/counterSlice'

const CounterComponent = () => {
const counter = useSelector((state)=>state.counterReducer.value)
console.log(counter)

const dispacth = useDispatch()

  return (
    <div>

      <h2>{counter}</h2>
      <button 
      onClick={()=>dispacth(increment())}
      >Arttır</button>
      <button onClick={()=>dispacth(decrement())}
      >Azalt</button>
      <button
      onClick={()=>dispacth(setDelete(0))}
      >Sıfırla</button>
    </div>
  )
}

export default CounterComponent
