
import './App.css';

 import {HomeComponent} from './Components/HomeComponent';
 import DemoHook from './Components/DemoHook';

function App() {
 

   let Profile={
      name:"mahesh",
      email:"maheshgavale07@gmail.com",
      city:"Pune",
      Pincode:413606
   }

   return(<>
   <HomeComponent value={Profile}></HomeComponent>
   <DemoHook></DemoHook>

   </>);
}

export default App;