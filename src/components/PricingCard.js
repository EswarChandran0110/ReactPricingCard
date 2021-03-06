import React from "react";
import {plans,features} from "../Data";
import CardContent from "./CardContent";
function PricingCard (){
    return(
        <div className="container">
            <div className="row">
                 {/* {Rendering the no of cards from data} */}
                 {
                  plans.map((plan,index)=>{
                     return(
                        <CardContent key={index} plan={plan} features={features} />
                     );
                 })
                 }
            </div>
        </div>

    );
}

export default PricingCard;