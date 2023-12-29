import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import { Link} from "react-router-dom";
import RoutesList from "./RoutesList";


const ColorsList = () => {
/// will list all the colors in an array 
/// will set a 
const INIT_STATE = [{id: uuid(), color: "red"},
{id: uuid(), color: "blue"},
{id: uuid(), color: "green"},
{id: uuid(), color: "yellow"}]

const [colors, setColors] = useState(INIT_STATE)

const addItem = color => {
    let newItem = {color, id: uuid() };
    setColors(colors => [...colors, newItem]);
  };

return (
<>
<div>
<Link to="colors/new"> Add a Color </Link>
<h1> Welcome to the colors page </h1>
<h2> Here we list all the colors that we have</h2>
{colors.map(c => <Link key={c.id} to={`/colors/${c.color}`} > {c.color} </Link>)}
  <RoutesList arr={colors} addItem={addItem}/>
</div>
</>
)

}
export default ColorsList