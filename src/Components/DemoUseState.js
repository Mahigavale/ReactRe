import { useState } from "react";


function DemoUseState()
{


    let [count, setcount]=useState(0);


    

    return(<>
    <div style={{textAlign:"center" , marginTop:"30px"}}>
    <button  onClick={()=>(setcount(count+1))}>Increament</button>
    <span> </span>
    <button onClick={()=>(setcount(count=0))}>Reset</button>
    <span> </span>
    <button onClick={()=>(setcount(count-1))}>Decreament</button>
    <h1>{count}</h1>
    </div>
    </>);



}

export default DemoUseState;