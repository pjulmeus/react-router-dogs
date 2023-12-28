import React from "react";
import {
  Switch,
  Route,

} from 'react-router-dom';
import Dog from "./Dog";
import DogList from "./DogList";
import FilterDog from "./FilterDog";

const Routesj=({dogs})=> {
  return (
    <>
<Switch>
     <Route exact path="/dogs" >
        <DogList dogs={dogs} /> 
      </Route>
      <Route path="/dog/:dogname" >
        <FilterDog dogs={dogs}/> 
      </Route>
</Switch>
  
    </>
   

   
  )};

  export default Routesj