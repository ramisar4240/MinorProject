// import React from 'react'

import { Button } from "@/components/ui/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "project-management-react/src/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "project-management-react/src/components/ui/card"
import {DotsVerticalIcon} from "@radix-ui/react-icons"
import { Avatar, AvatarFallback } from "project-management-react/src/components/ui/avatar"
import {PersonIcon} from "@radix-ui/react-icons"
import UserList from "./UserList"
import { useNavigate } from "react-router-dom"
const IssueCard = () => {

    const navigate=useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2">
        <CardHeader className="py-0 pb-1">
            <div className="flex justify-between items-center">
                <CardTitle className="cursor-pointer"onClick={()=>navigate("/project/3/issue/10")}>
                    Create Navbar
                </CardTitle>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                     <Button className="rounded-full" size='icon' variant="ghost"><DotsVerticalIcon/></Button>   
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem>In Progress</DropdownMenuItem>
                        <DropdownMenuItem>Done</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>

            </div>

        </CardHeader>

        <CardContent className="py-0">
            <div className="flex items-center  justify-between">
                <p> FBP -{1}</p>
                <DropdownMenu className="w-[30rem] border border-red-400">
                    <DropdownMenuTrigger>
                        <Button size="icon" className="bg-gray-900  hover:text-black text-white rounded-full">
                            <Avatar>
                                <AvatarFallback>
                                    <PersonIcon/>
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <UserList/>
                    </DropdownMenuContent>

                </DropdownMenu>
            </div>

        </CardContent>

    </Card>
  )
}

export default IssueCard
