import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ColorsList from "./ColorsList";
import NewColorForm from "./NewColorForm";
import FilterColor from "./FilterColor";

const Colors = ({colors, addItem}) => {
 <>
    <Routes>
    <Route index element={<ColorsList />}/>
    <Route path=":colors" element={<FilterColor colors={colors} />} />
    <Route path="new" element={<NewColorForm addItem={addItem} />} /> 
    </Routes>
 <Outlet/>
 
 </>   


}

export default Colors