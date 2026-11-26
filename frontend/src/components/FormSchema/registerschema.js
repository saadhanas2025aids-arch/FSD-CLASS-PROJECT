
import z from "zod";
export const registerschema = z.object({
    name:z.string().min(3,"Name must be minimum of 3"),
    email: z.string().email("Enter a valid Email"),
    password:z.string().min(8,"Password must be minimum of 3"),
    age:z.coerce.number().min(18,"Age should be minimum of 18")
})
