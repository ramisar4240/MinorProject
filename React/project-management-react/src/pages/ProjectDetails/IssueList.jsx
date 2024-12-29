import { Button } from "@/components/ui/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "project-management-react/src/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "project-management-react/src/components/ui/card"
import IssueCard from "./IssueCard"
import { PlusIcon } from "@radix-ui/react icons"
import CreateIssueForm from "./CreateIssueForm"


const IssueList = ({title,status}) => {
  return (
    <div>
      <Dialog>
        <Card classname="w-full md:w-[300px] lg:W-[310px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
                <div className="space-y-2">
                   {[1,1,1].map((item)=> <IssueCard key={item}/>)}
                    </div> 
                
                
                
                 </CardContent>

                <CardFooter>
                    <DialogTrigger>
                        <Button variant="outline" className="w-full flex items-center gap-2">
                            <PlusIcon/>
                            Create Issue
                        </Button>
                    </DialogTrigger>
                </CardFooter>
          

        </Card>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create New Issue</DialogTitle>
            </DialogHeader>
            <CreateIssueForm/>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default IssueList
