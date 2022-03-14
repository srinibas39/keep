import { useState } from "react"


export const Snote = ({el,selectedFilter}) => {
    
    const[select,setSelect]=useState(selectedFilter)
    return <div  className="note">
        <h2>{select}</h2>
        <p>{el}</p>
        <button>
            <span className="material-icons-outlined">
                delete
            </span>
        </button>
    </div>
}