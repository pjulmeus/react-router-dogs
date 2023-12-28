import React from "react";
import { Link, Route } from "react-router-dom";

const DogList = ({dogs}) => {
    /// List the dog names
return (
    <>
    <h1>List of all dawgs</h1>
        {dogs.map(d => (<div><Link to={`/dog/${d.name.toLowerCase()}`}>{d.name}</Link>
       </div>))}                  
    </>
   
)
}









export default DogList