import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setDelete } from '../redux/features/counterSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const CounterComponent = () => {
const counter = useSelector((state)=>state.counterReducer.value)
console.log(counter)

const dispacth = useDispatch()

  return (
    <div >

      <h2 style={{marginLeft:80,}}>{counter}</h2>
      <Button variant='info'
      onClick={()=>dispacth(increment())}
      >Arttır</Button>
      <Button variant='warning'
      onClick={()=>dispacth(decrement())}
      >Azalt</Button>
      <Button variant='danger'
      onClick={()=>dispacth(setDelete(0))}
      >Sıfırla</Button>
    </div>
  )
}

export default CounterComponent
