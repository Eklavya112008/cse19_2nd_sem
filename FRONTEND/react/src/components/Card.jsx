import React from 'react'

const Card = (props) => {
  return (
    <div style={{border:'5px solid red',width:'300px'}}>
        <h3>Student Record</h3>
        <h3>Student name:{props.name}</h3>
        <h3>Student course : {props.class}</h3>
        <img src={props.image} />
        
    </div>
  )
}

export default Card