import { useState } from "react"
import { useFilter } from "../FilerContext";
import { useNotes } from "../NoteContext";


export const Snote = ({ el, selectedFilter,color }) => {

    const [select, setSelect] = useState(selectedFilter);
    const { state } = useFilter();
    const [col,setCol]=useState(color);
   const{setDel} =useNotes()
   
     
    return <>
        {
            state.filter === select && <div className={`note ${col}`}>
                <h2>{select}</h2>
                <p>{el}</p>
                <button>
                    <span className="material-icons-outlined" onClick={()=>setDel(el)} >
                        delete 
                    </span>
                </button>
            </div>

        }
        {
            state.filter === "All" && <div  className={`note ${col}`}>
                <h2>{select}</h2>
                <p>{el}</p>
                <button>
                    <span className="material-icons-outlined" onClick={()=>setDel(el)}>
                        delete
                    </span>
                </button>
            </div>
        }
    </>

}
