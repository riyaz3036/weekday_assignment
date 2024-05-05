import React from 'react';
import './selected-tag.css';


const SelectedTag = ({text,type,setSelected,selected})=>{
    
    const deleteSelected = () => {
        // Call setSelected function with updated selected array
        setSelected(selected.filter(item => item !== text));
    };

    const deleteSingleSelected = () =>{
        setSelected("");
    }
    
    return(
        <div className="selected__tag">
            <p className="tag__text">{text}</p>
            <div className="tag__cross" onClick={type==="multi"?deleteSelected : deleteSingleSelected}><i class="ri-close-line"></i></div>
        </div>
    )
}

export default SelectedTag;