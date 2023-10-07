import React from "react";
 export default function Maincontent(props){
 
    return(
      <div className="todoitems">
<p onClick={()=>{props.onselect(props.id)}}>+</p>
         <li >{props.text}</li>
      </div>
    )
 }