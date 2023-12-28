import React from "react";


const Dog = ({dog}) => {

return (
    <>
<h1>{dog.name}</h1>
        <div>
            <h2>{dog.age}</h2>
        <img src={`${dog.src}`} alt={`${dog.name}`}/>
        </div>
        <div>
        <ul>
        {dog.facts.map(f => (<li>{f}</li>))}
        </ul>
        </div>
  </>

)}

export default Dog