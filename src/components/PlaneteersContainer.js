import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planArray}) {

// planArray successfully passed
// console.table(planArray);

const mappedPlanArray = planArray.map(plan => {
  return(
    <Planeteer 
    key = {plan.id}
    name = {plan.name}
    fromUSA = {plan.fromUSA}
    born = {plan.born}
    bio = {plan.bio} 
    quote = {plan.quote}
    pictureUrl = {plan.pictureUrl}
    twitter = {plan.twitter}
    />
  )
})

//cards successfully rendered to dom

  return (
    <ul className="cards">
      {mappedPlanArray}
    </ul>
  );
}

export default PlaneteersContainer;
