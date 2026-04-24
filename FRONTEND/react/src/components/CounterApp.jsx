import React, {useState} from 'react'

const CounterApp = () => {
    const [count,setcount]=useState( 0 );

    function inc(){
        setcount(count + 1)
    }

    function dec(){
        setcount(count - 1)
    }

  return (
    <div style={{border:'5px solid red'}}>
        <h1 style={{color:'green'}}>COUNTER APP</h1>
        <br/>
        <button onclick={inc} style={{padding:'10px',margin:'20px'}}>Increment</button>
        <span >{count}</span>
        <button onclick={dec} style={{padding:'10px',margin:'20px'}}>Decrement</button>
    </div>
  )
}

export default CounterApp