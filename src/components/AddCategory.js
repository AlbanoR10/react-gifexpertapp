import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories((previos)=>[inputValue, ...previos]);
        setInputValue("");
    }


    return (
        <>
        <h2>{inputValue}</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue} 
            />
        </form>
        </>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}