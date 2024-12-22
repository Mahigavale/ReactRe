

function DemoComponent({props})
{


    
    return(<>
   <h2> hii from demo component !</h2>
   <h1>value from app.js:{props.value.name}</h1>
   <h1>{props.value.email}</h1>
    </>);
}

function Demo2(props)
{
return (<>
<h4>The Second functional component !</h4>
<h3>{props.value.name}</h3>
<h2>{props.value.email}</h2>
</>)
}



export {DemoComponent};
export {Demo2};



