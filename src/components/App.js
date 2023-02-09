import React, {useEffect, useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";





function App() {

const [planArray, setPlanArray] = useState([])
const [search, setSearch] = useState("")

// const filteredPlanArray = planArray.filter(plan => {
//   return(
//     plan.name?.toLowerCase().includes(search.toLowerCase()))
//   })




useEffect(() => {
  fetch("http://localhost:8003/planeteers")
  .then(res => res.json())
  .then(data => setPlanArray(data))
},[])

//original list set successfully to planArray state
// console.table(planArray)

const filteredPlanArray = planArray.filter(plan => plan.name.toLowerCase().includes(search.toLowerCase()) || plan.bio.toLowerCase().includes(search.toLowerCase()))




  return (
    <div>
      <Header />
      <SearchBar setSearch={setSearch} />
      <RandomButton />
      <PlaneteersContainer planArray={filteredPlanArray} />
    </div>
  );
}

export default App;
