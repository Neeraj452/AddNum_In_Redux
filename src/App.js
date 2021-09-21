import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getfirstNumber, getsecondNumber, result} from "./actions/index";

const App =()=> {

  const myState = useSelector((store)=> store.changeTheNumber )
  const dispatch = useDispatch();
  return (
    <>
    <div>
      <h1>Increment / Decrement</h1>
      <h4>using React and Redux </h4>
    </div>
    <div>
      <lebel>First Number</lebel>
      <input onChange={(event)=> dispatch(getfirstNumber(event.target.value))} type="number" name=" First_Number" value={myState.num1} />
      <br/>
      <lebel>Second Number</lebel>
      <input  onChange={(event)=> dispatch(getsecondNumber(event.target.value))} type="number" name=" second_Number" value={myState.num2}/>
      <br/>
      <button onClick={()=> dispatch(result())}>Add </button>
      {
        myState && <h1>{myState.result}</h1>
      }
    </div>
      
    </>
  )
}

export default App;