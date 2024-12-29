// import React from 'react'
import { useForm } from "react-hook-form";
import { Form,FormField,FormItem,FormControl,FormMessage } from "project-management-react/src/components/ui/form";
import {Input} from "@/components/ui/input";
import { Button } from "project-management-react/src/components/ui/button";
import { Avatar, AvatarFallback } from "project-management-react/src/components/ui/avatar";


const CreateCommentForm = ({issueId}) => {

     const form=useForm({
                defaultValue:{
                    Content:"",
                   
        
                },
            });
        
            const onSubmit=(data)=>{
                console.log('create project data', data);
            };
  return (
    <div>
               <Form {...form}>

<form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}> 
    <FormField control={form.control}  
    name="content"
    render={({field})=>(<FormItem>

                <div className="flex gap-2">
                    <div>
                        <Avatar>
                            <AvatarFallback>R</AvatarFallback>
                        </Avatar>
                    </div>

            

        <FormControl>
            <Input  {...field} 
            type="text"
            className="w-[20rem]"
            placeholder="add comment here..."
            
            
            />
                
        </FormControl>
        <FormMessage/>
        </div>
    </FormItem>)}
    
    />
    





   <Button type='submit' >save</Button>   

   



</form>
</Form>
    </div>
  )
}

export default CreateCommentForm
