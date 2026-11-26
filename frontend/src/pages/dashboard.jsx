import { useState } from "react";
import { useLocation } from "react-router-dom"

function Dashboard(){
       const location = useLocation();
       const[userdata, setUserdata] = useState(" ");
       function displaydata(){
        setUserdata(location.state)
        console.log(userdata)
       }
       
        return (
        <div>Dashboard</div>
        <button>button onclick={displaydata}</button>
)
};
export default Dashboard