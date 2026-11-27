
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/FormSchema/registerschema";

function Register(){
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}= useForm({
        resolver: zodResolver(registerschema)
    })

    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/",{
            state: data
        })
    }

    return(
        <>
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-300 p-3">
        <form onSubmit={handleSubmit(onSubmit1)} className="w-full  border border-blue-800 bg-white p-4 rounded-xl shadow-md space-y-3">
            <h2 className="text-xl font-bold text-center text-purple-600">REGISTER PAGE</h2>
            <div>
                <input type="text" required placeholder="Enter your name" {...register("name")} className="w-full border border-blue-800 rounded-md px-3 py-2"/>
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
                <input type="email" required placeholder="Enter your email" {...register("email")} className="w-full border border-blue-800 rounded-md px-3 py-2"/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
                <input type="password" required placeholder="Enter your password" {...register("password")} className="w-full border border-blue-800 rounded-md px-3 py-2"/>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
                <input type="number" required placeholder="Enter your age" {...register("age", {valueAsNumber:true})} className="w-full border border-blue-800 rounded-md px-3 py-2"/>
                {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md">Submit</button>
        </form>
        </div>
        </>
    )
}
export default Register;
