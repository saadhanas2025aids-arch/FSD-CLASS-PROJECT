import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/FormSchema/app";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    
    function displaydata(){
       setUserdata(location.state);
       console.log(userdata)
    }  
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setUserdata(count+1);
    },[])
    console.log(count)

    const checkendpoint =async()=>{
        const response = await API.get("api/get");
        console.log(response.data)
    }
    return ( 
        <>
           
            <div>
            <>{userdata.username} {userdata.password}</>
            <button onClick={checkendpoint}> Button</button>
            </div>
        </>
     );
}

export default  Dashboard;