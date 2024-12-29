// import React from 'react'

import { TrashIcon } from "@radix-ui/react-icons"
import { Button } from "project-management-react/src/components/ui/button"
import { Avatar, AvatarFallback } from "project-management-react/src/components/ui/avatar"

const CommentCard = () => {
  return (
    <div className="flex justify-between" >
        <div className="flex items-center gap-4">
            <Avatar>
                <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <p>Ram Isar</p>
                <p>how much work is pending</p>

            </div>

        </div>
        <Button className='rounded-full' variant="ghost" size='icon'>
            <TrashIcon/>
        </Button>
      
    </div>
  )
}

export default CommentCard
