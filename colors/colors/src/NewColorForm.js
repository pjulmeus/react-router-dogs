import React, { useState } from "react";

const NewColorForm = ({addItem}) => {
const INIT_STATE = {
    color : ""
}
const [fData, setFormData] = useState(INIT_STATE)


const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }


    const handleSubmit = evt => {
        evt.preventDefault();
        addItem(fData.color);
        setFormData(INIT_STATE);
        
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <h1>Add New Color Form</h1>
        <label htmlFor="color"></label>
        <input id="color" 
        type="text"     
        name="color" 
        placeholder="Type in your new color" 
        value={fData.color}
        onChange={handleChange}
        />    
        <button>Submit</button>
        </form>
        </>
    )
}

export default NewColorForm