import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"






function Count(){
  const [value, setValue] = useState(0)

  function increase(){

    setValue(increase =>{

      return increase + 1
    }) 
  }  

  function decrease(){

    setValue(decrease => {

      return decrease - 1
    }) 
  } 
  return (<div>
    <button onClick={increase}>+</button>
    <h1>{value}</h1>
    <button onClick={decrease}>-</button>
  </div>
  )
  
  

     

  
    
} 


ReactDOM.render(
  <Count />, document.getElementById('root')
);
