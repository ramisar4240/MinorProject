import React from 'react'
import { Card } from 'project-management-react/src/components/ui/card' ;
import {DotFilledIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from 'project-management-react/src/components/ui/button';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'project-management-react/src/components/ui/dropdown-menu';
import { Badge } from 'project-management-react/src/components/ui/badge';
const projectCard = () => {
  const navigate=useNavigate()
  return (
   <Card className="p-5 w-full lg:max-w-3xl">
 <div className='space-y-5'>
  <div className='space-y-2'>
    <div className='flex justify-between'>
      <div className='flex items-center gap-5'>
        <h1  onClick={()=> navigate("/project/3")} className='cursor pointer font-bold text-lg'>
          Create Ecommerce Project

        </h1>

        <DotFilledIcon/>
        <p className='text-sm text-gray-400'>fullstack</p>

      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full" varient='ghost' size='icon'>
              <DotsVerticalIcon/>
            </Button >
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              Update
            </DropdownMenuItem>
            <DropdownMenuItem>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    </p>

  </div>

  <div className='flex flex-wrap gap-2 items-center'>
    {[1,1,1,1].map((item) => <Badge key={item} variant="outline">{"frontend"}</Badge>)} 

  </div>

 </div>

   </Card>
  )
}

export default projectCard
