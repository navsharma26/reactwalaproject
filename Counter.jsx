
import { useState } from "react";
export default function Counter(){
    let[count,setcount]=useState(0);
    let iscCount=()=>{
       setcount(count+=1);
    };
    
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={iscCount}>Increse Count</button>
        </div>

    );
        
    
}