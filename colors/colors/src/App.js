import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ColorsList from './ColorsList';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<ColorsList />
</BrowserRouter>
    </div>
  );
}

export const colorsArr = 
[{color: "red"},
{color: "blue"},
{color: "green"},
{color: "yellow"}]

App.defaultProps = {colorsArr}

export default App;
