// import { features } from "process";
import SubscriptionCard from "./SubscriptionCard";

// import React from 'react'
const paidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows",
  ];
  
  const annualPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which montly plan has",
  ];
  
  const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control",
  ];

const Subscription = () => {
  return (
    <div className="p-10">
        <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
            
        </div>
        
      <SubscriptionCard 
       date={{
        planName:"Free",
        features: freePlan,
        planType:"FREE",
        price:0,
        burttonName: true ? "Current Plan" : "Get Started",

      }}
      />
      <SubscriptionCard  
      
      date={{
        planName:"Monthly Paid Plan",
        features: paidPlan,
        planType:"MONTHLY",
        price: 799,
        burttonName: true ? "Current Plan" : "Get Started",

      }}
      
      />
      <SubscriptionCard   
      
      date={{
        planName:"Annual Paid Plan",
        features: annualPlan,
        planType:"ANNUALLY",
        price: 6711,
        burttonName: true ? "Current Plan" : "Get Started",

      }}
      
      
      />
    </div>
  )
}

export default Subscription
