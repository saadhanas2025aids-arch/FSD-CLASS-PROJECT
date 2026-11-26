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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login";
import Projects from '../src/pages/projects';
import Tasks from '../src/pages/tasks';
import Team from '../src/pages/team';
import Client from '../src/pages/clients';
import Dashboard from '../src/pages/dashboard';
import Calender from '../src/pages/calender';
import Settings from '../src/pages/settings';
import Clients from "../src/pages/clients";
import Register from "../src/pages/register";
function App() {
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path = '/tasks' element={<Tasks/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </BrowserRouter>
   );
}
export default App;