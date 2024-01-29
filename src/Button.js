import { useState } from "react";
// import './Button'
function Button()
{
    const [data,setData]=useState(0)

    function updatedataa(){
        setData(data+1)
    }

    function updatedatab(){
        setData(data-1)
    }
    
    function updatedatac(){
        setData(0)
    }

    return(
        <div className="aa">
             <h1>increment or decrement Counter</h1>
            <h1 id="num">{data}</h1>
            <button className="btn-i" onClick={updatedataa}>increment</button>
            <button className="btn-r" onClick={updatedatac}>reset</button>
            <button className="btn-d" onClick={updatedatab}>decrement</button>
        </div>
    )
    
}
export default Button;

// we cant update the valeu of an variable , using state we can change vale.