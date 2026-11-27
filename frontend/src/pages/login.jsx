import {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  {/*const[email,setEmail] = useState('');
  const[pass,setPass]= useState('');*/}
  const location = useLocation();
  const navigate = useNavigate(" ");
  const[logindata,setlogindata]=useState({
    username:"",
    password:""
  })
  function handlesubmit(e){
    e.preventDefault();
    const registerdata= location.state
     console.log("Login data",logindata)
     console.log("Register data", registerdata)
     if(logindata.username===registerdata.name &&logindata.password===registerdata.password){
      console.log("Login success");
      alert("Successfull Login");
      navigate("/dashboard");
     }
     else{
      alert("Invalid Credentials");
      console.log("Invalid Credentials");
     }
  }
  function handlechange(e){
    e.preventDefault()
    setlogindata({
      ...logindata,
      [e.target.name]:e.target.value
  });
  }
  return (
    <div className="p-5">
      <div className="text-blue-800 text-2xl font-bold">
        HI
      </div>

     <form onSubmit={handlesubmit}>
       <input
        type="text"
        required
        placeholder="Enter your username"
        name="username"
        onChange={handlechange}
      />

      <input
        type="password"
        required
        placeholder="Enter your password"
        name="password"
        onChange={handlechange}
        
      />
      <button type="submit" >Submit</button>
     </form>
    </div>
  );
}

export default Login;