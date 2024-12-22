import { useState } from "react";


function DemoHook(){

const[color,setcolor]=useState("red");


return(<>

<h1>my favorite color is :{color}</h1>

<button onClick={()=>
    {
        setcolor("pink");
    }
}></button>


</>);

}


export default DemoHook;