import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    const [count,setCount]=useState(0)
    function displaydata(){
       setUserdata(location.state);
       console.log(userdata)
    }  
    useEffect(()=>{
        setUserdata(location.state);
    },[])
    
    //const [check,setCheck]=useState(2)
    //useEffect(()=>{
     //   console.log(count)
    //},[check])  
    console.log(count)
    return ( 
        <>
            <button onclick={displaydata}>button</button>
            <div>{userdata.username}{userdata.password}</div>
        </>
     );
}

export default  Dashboard;