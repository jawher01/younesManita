import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import Hotel from "./components/Hotel/Hotel"
import Login from "./components/login/login"
import Vole from "./components/Vole/ListVol"
import Home from "./components/Home/Home"
function App() {
  return (
    
    <div>
   
   
    <Routes>
    <Route path="/voles" element={ <Vole /> }>
      </Route>
      
      
      <Route path="/" element={ <Login /> }>
      </Route>
       
      <Route path="/home" element={ <Home /> }>
      </Route>
      <Route path="/hotel" element={ <Hotel /> }>
      </Route>
    
    
  
     </Routes>
 
     </div>
    
  );
}

export default App;
