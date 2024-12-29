
import {useForm} from "react-hook-form";
import { Button } from "project-management-react/src/components/ui/button";
import { Form,FormControl,FormItem,FormMessage,FormField } from "project-management-react/src/components/ui/form";
import { Input } from "project-management-react/src/components/ui/input";

const LOgin = () => {
      const form=useForm({
                defaultValue:{
                    Email:"",
                    password: "",
                

                   
        
                },
            });
        
            const onSubmit=(data)=>{
                console.log('create project data', data);
            };
  return (
    <div className="space-y-5">
        <h1>Register</h1> 
        <Form {...form}>

<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}> 
    

<FormField control={form.control}  
    name="email"
    render={({field})=>(<FormItem>
        <FormControl>
            <Input  {...field} 
            type="text"
            className="border w-full border-gray-700 py-5 px-5"
            placeholder=" email..."
            
            
            />
        </FormControl>
        <FormMessage/>
    </FormItem>)}
    
    />

<FormField control={form.control}  
    name="password"
    render={({field})=>(<FormItem>
        <FormControl>
            <Input  {...field} 
            type="text"
            className="border w-full border-gray-700 py-5 px-5"
            placeholder=" passowrd..."
            
            
            />
        </FormControl>
        <FormMessage/>
    </FormItem>)}
    
    />
    




   <Button type='submit' className="w-full mt-5">Register</Button>   

  



</form>
</Form>
      
    </div>
  )
}

export default Login

