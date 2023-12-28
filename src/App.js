import React from 'react';
import Routesj from './Routesj';
import duke from "./photo/duke.jpg"
import perry from "./photo/perry.jpg"
import whiskey from "./photo/whiskey.jpg"
import tubby from "./photo/tubby.jpg"

import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';





function App({dogs}) {

  return (
    <div className="App">
  <BrowserRouter>
  {/* <DogList dogs={dogs}/> */}

      <Routesj dogs={dogs} />


  {/* <Route exact path='/dog/:dogname'>
  {dogs.map(f => (<Dog name={f.name} age={f.age} src={f.src} facts={f.facts}/>))}
  </Route> */}
  </BrowserRouter>
    </div>
  );
}

export const dogs = 
   [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]


App.defaultProps = { dogs };

export default App;
  