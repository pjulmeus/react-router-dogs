import React from "react";
import Dog from "./Dog";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const FilterDog = ({dogs}) => {
 const {dogname} = useParams()

 if (dogname) {
    let currentdogname = dogs.find(d => d.name.toLowerCase() === dogname.toLowerCase())
return (
    <>
    <Dog dog={currentdogname}/>
    </>
 )

 }
 return null 

}

export default FilterDog