import { Avatar, AvatarFallback } from "project-management-react/src/components/ui/avatar"
import { Button } from "@/components/ui/ui/button"
import {ScrollArea} from "project-management-react/src/components/ui/scroll-area"
import  {Input} from "project-management-react/src/components/ui/input"
import {PaperPlaneIcon} from "@radix-ui/react-icons";
import {useState} from "react";

const ChatBox = () => {
    const [message,setMessage]= useState("");
    const handleSendMessage=()=>{
        console.log("message", message);

    }

    const handleMessageChange=(e)=>{
        setMessage(e.target.value);
    }
    
  return ( 
   
    <div className="sticky">
        <div className="border rounded-lg">
            <h1 className="border-b p-5">Chat Box</h1>
            <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
                {[1,1,1,1].map((item,index)=>(
                    index%2==0?
                    <div className="flex gap-2 mb-2 justify-start " key={item}>
                    <Avatar>
                      <AvatarFallback>R</AvatarFallback>  
                      </Avatar>
                      <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-full">
                        <p>Ram</p>
                        <p className="text-gray-300">How are you</p>
                      </div>

                 
                </div>:
                                    <div className="flex gap-2 mb-2  justify-end" key={item}>
                                  
                                      <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-full">
                                        <p>Ram</p>
                                        <p className="text-gray-300">How are you</p>
                                      </div>
                                      <Avatar>
                                      <AvatarFallback>R</AvatarFallback>  
                                      </Avatar>
                
                                 
                                </div>
            ))}

            </ScrollArea>

            <div className="relative p-0">
                <Input 
                placeHolder='type message...'
                className="py-7 border-t outline-none focus:outline-none
                focus:ring-0 rounded-none border-b-0 borderx-0" value={message}
                onChange={handleMessageChange}
                />

                <Button onClick={handleSendMessage} className="absolute right-2 tor-3 rounded-full " size="icon" variant="ghost">
                    <PaperPlaneIcon/>

                </Button>





            </div>

        </div>
      
    </div>
  )
}

export default ChatBox
