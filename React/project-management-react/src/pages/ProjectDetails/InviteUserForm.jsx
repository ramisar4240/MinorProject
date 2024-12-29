// import React from 'react
import {Button} from "@/components/ui/ui/button"
import { DialogClose } from "project-management-react/src/components/ui/dialog";
import {Form,FormField,FormControl,FormItem,FormMessage, } from "project-management-react/src/components/ui/form"
import {useForm} from "react-hook-form"
import {Input} from "project-management-react/src/components/ui/input"
const InviteUserForm = () => {
      const form=useForm({
            defaultValue:{
                Email:"",
               
    
            },
        });
    
        const onSubmit=(data)=>{
            console.log('create project data', data);
        };
  return (
    <div>
         <Form {...form}>

<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}> 
    <FormField control={form.control}  
    name="email"
    render={({field})=>(<FormItem>
        <FormControl>
            <Input  {...field} 
            type="text"
            className="border w-full border-gray-700 py-5 px-5"
            placeholder="user email..."
            
            
            />
        </FormControl>
        <FormMessage/>
    </FormItem>)}
    
    />
    




    <DialogClose>
   <Button type='submit' className="w-full mt-5">Invite User</Button>   

    </DialogClose>



</form>
</Form>
    </div>
  )
}

export default InviteUserForm

