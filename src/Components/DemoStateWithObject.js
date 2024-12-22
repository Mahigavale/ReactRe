import { useState } from "react";


function DemoStateWithObject()
{


    // let[name, setname]=useState("Mahesh");
    // let[city,setcity]=useState("Pune");
    // let[mobile,setmobile]=useState("7774834341");


    // let profile={
    //     name:"mahesh",
    //     city:"Pune",
    //     mobile:"7774834341"
    // }

    /**
     * whenever we use the Objects in the states we will 
     * have to write the multiple state-management functions to manage them
     * properly.
     * to avoid this we can use the spread operator of ES6 to 
     * manage the Object states effortlessly.
     *  spread operator : => {... previous state, color:"blue"}
     * it will only change the color property from the given Object.
     */

    
    const[profile,setprofile]=useState({name:"mahesh",city:"Pune",mobile:"123456"});

    //use the spread operator to change a property of the given Object.

    return(<>
    <button onClick={()=>
        {
            setprofile(prev=>({
            
                ...prev, mobile:"123"
            }))
        }
    }>Click</button>

    <h1>{profile.mobile}</h1>
    
    
    </>);



}


export  {DemoStateWithObject};