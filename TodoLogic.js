import React, { useState } from 'react';
import ItemValuee from './ItemValuee';


export default function TodoLogic() {
  const [InputList, setInputList]=useState("");
  const [Items, setItems]=useState([]);

  const itemEvent =(event)=>{
    setInputList(event.target.value);
    
  };
  const listofItems =(event)=>{
    setItems((previousItems)=>{
      return [...previousItems,InputList];
    });
    setInputList("");
  };
  const deleteItems =(id)=>{
    console.log('deleted')
    setItems((previousItems)=>{
      return previousItems.filter((arrElem,index)=>{
        return index!== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To do List</h1>
        </div>
        <input type="text" placeholder="Add item here"  value={InputList} onChange={itemEvent}/>
        <button onClick={listofItems}>+</button>
        <ol>
          {Items.map((ItemValue, index)=>{
           return <ItemValuee key={index} 
           id={index}
           text={ItemValue} onSelect={deleteItems}/>
           
          })}
        </ol>
      </div>
    </>
  );
}
