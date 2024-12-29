import {Dialog, DialogHeader,DialogContent,DialogTrigger} from 'project-management-react/src/components/ui/dialog'
// import { DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from 'project-management-react/src/components/ui/button'
import CreateProjectForm from '../Project/CreateProjectForm'
// import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu,DropdownContent,DropdownHeader } from '.@/components/ui/dropdown-menu'

import {PersonIcon} from "@radix-ui/react-icons";
import { DropdownMenuContent, DropdownMenuItem } from 'project-management-react/src/components/ui/dropdown-menu';
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <p  onClick={()=>navigate("/")} className='cursor-pointer'> Project Management</p>
            <Dialog>
                <DialogTrigger>
                    <Button variant='ghost'>New Project</Button>
                </DialogTrigger>

                <DialogContent>

                
                    <DialogHeader> Create New Project</DialogHeader>
                    <CreateProjectForm/>

                </DialogContent>

            </Dialog>

            <Button onClick={() =>navigate("/upgrade_plan")} variant='ghost'>Upgrade</Button>

        </div>

        <div className='flex gap-3 items-center'>
            <DropdownMenu>

                <DropdownMenuTrigger>

                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>

            <p>Ram</p>

        </div>
      
    </div>
  )
}

export default Navbar
