import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  {/*const[email,setEmail] = useState('');
  const[pass,setPass]= useState('');*/}
  const navigate = useNavigate(" ");
  const[formdata,setFormdata]=useState({
    username:"",
    password:""
  })
  function handlesubmit(e){
    e.preventDefault();
     console.log("Login page",formdata)
     alert("Login successfull")
    navigate("/dashboard",{
      state:formdata
    })
  }
  function handlechange(e){
    e.preventDefault()
    setFormdata({
      ...formdata,
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