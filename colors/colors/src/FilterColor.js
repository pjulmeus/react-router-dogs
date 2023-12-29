import React from "react";
import Color from "./Color";
import { useParams } from "react-router-dom";

const FilterColor = ({colors}) => {
const {color} = useParams()
if (color){
  let colorParams = colors.find(c => c.color.toLowerCase() === color.toLowerCase())
   return (<>
   < Color colorPar={colorParams}/>
   </>)
}
return null
}

export default FilterColor