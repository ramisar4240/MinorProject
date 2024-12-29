// import React from 'react'
import { CheckCircledIcon } from "@radix-ui/react-icons"

import { Button } from "project-management-react/src/components/ui/button"

const SubscriptionCard = ({data}) => {
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b]
     shadow-2xl card p-5 space-y-5 w-[18rem]">
        <p>{data.planName}</p>
        <p> 
            <span className="text-xl font-semibold">रु{data.price}</span>
            <span>{data.planType}</span>


        </p>
         {data.planType=="ANNUALLY" && <P className="text-green-500">30% off</P>}
         <Button className='w-full'>
            {data.buttonName}
         </Button>

         <div>
           { data.fetures.map((item) => <div key={item} className="flex items-center gap-2">
             <CheckCircledIcon/>
                <p>{item}</p>
            </div>) }


         </div>
      
    </div>
  )
}

export default SubscriptionCard
