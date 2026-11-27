
import {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const[logindata,setlogindata]=useState({
    username:"",
    password:""
  })

  function handlesubmit(e){
    e.preventDefault();
    const registerdata=location.state;

    console.log("Login data",logindata);
    console.log("Register data",registerdata);

    if(registerdata && logindata.username===registerdata.name && logindata.password===registerdata.password){
      console.log("Login success");
      alert("Successful Login");
      navigate("/dashboard");
    }
    else{
      alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }
  }

  function handlechange(e){
    setlogindata({
      ...logindata,
      [e.target.name]:e.target.value
    });
  }

  return (
    <>
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-300 p-3">
      <form onSubmit={handlesubmit} className="w-full max-w-md border border-blue-700 bg-white p-4 rounded-xl shadow-md space-y-3">
        <h2 className="text-xl font-bold text-center text-purple-600">LOGIN PAGE</h2>
        <input type="text" required placeholder="Enter your username" name="username" onChange={handlechange} className="w-full border border-blue-700 rounded-md px-3 py-2"/>
        <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange} className="w-full  border border-blue-700 rounded-md px-3 py-2"/>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Login;
