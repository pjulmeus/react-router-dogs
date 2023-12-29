import React from "react";
import { Route, Routes} from "react-router-dom";
import ColorsList from "./ColorsList";
import FilterColor from "./FilterColor";
import NewColorForm from "./NewColorForm";

const RoutesList = ({arr, addItem}) => {
return(
<>
<Routes>

    <Route path="/colors" element={<ColorsList />}/>
    <Route path="/colors/:color" element={<FilterColor colors={arr} />} />
    <Route path="/colors/new" element={<NewColorForm addItem={addItem} />} />

</Routes>
</>
)

}

export default RoutesList
