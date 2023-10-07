import React from "react";
import layer from "./layer.png"
import Maincontent from "./Maincontent";
export default function Nav() {
    const [itemNmae, setitemNmae] = React.useState("")
    const [item, setitem] = React.useState([])
    const listifitems = () => {
        setitem((olditems) => {
            return [...olditems, itemNmae]
        })
        setitemNmae("")

    }
    const itemEvent = (event) => {
        setitemNmae(event.target.value)
    }
    const deleteitems=(id)=>{
        console.log("deleted")
        setitem((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index!==id
            })
        })
       }
    return (
        <div className="main">
            <div className="foot-panel2">
                <img src={layer} alt="" />
                <h1>Todo list</h1>
            </div>
            <input type="text" value={itemNmae} placeholder="Add a Item" onChange={itemEvent} />
            <button onClick={listifitems}>+</button>
            <ol>
                {item.map((itemval,index) => {
                    return <Maincontent 
                    text={itemval}
                    key={index}
                    id={index}
                    onselect={deleteitems}
                    />
                })}
            </ol>
        </div>
    )
}