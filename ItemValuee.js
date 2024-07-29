import React from 'react'

export default function ItemValuee(props) {

  return (
    <>
        <div className="todo_style">
         <button onClick={() =>{
          props.onSelect(props.id);
        }}>-</button> 
       
        <li>{props.text}</li>
        </div>
    </>
    
    
  )
}
