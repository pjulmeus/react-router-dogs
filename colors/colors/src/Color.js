import React from "react";

const Color = ({colorPar}) => {
return (
        <div style = {{backgroundColor: colorPar.color}} >
        <h1> This color is called {colorPar.color}</h1>
    </div>

  )  
}


  

export default Color
