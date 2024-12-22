
import {DemoComponent} from "./DemoComponent";
import { Demo2 } from "./DemoComponent";
function HomeComponent(props)
{

return <>
<h1> hii from home component !</h1>
<DemoComponent value={props.value}></DemoComponent>
<Demo2 value={props.value}></Demo2>
</>

}

export  {HomeComponent};