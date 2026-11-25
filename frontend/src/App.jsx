{/*import {useState} from 'react';
function App() {
  const[email,setEmail] = useState('');
  const[pass,setPass]= useState('');
  function Print(){
     console.log(email,pass)
  }
  return (
    <div className="p-5">
      <div className="text-blue-800 text-2xl font-bold">
        HI
      </div>

      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        required
        placeholder="Enter your password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        
      />
      <button type="submit"  onClick={()=>Print()}>Submit</button>
    </div>
  );
}

export default App;*/}

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/ " element = {<Login/>} />
        <Route path = "/projects" element = {<Projects/>} />
        <Route path = "/tasks" element = {<Tasks/>} />

      </Routes>
    </BrowserRouter>
   );
}
export default App;