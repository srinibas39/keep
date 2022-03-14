import { useState } from "react"
import { useFilter } from "../FilerContext";


export const Snote = ({ el, selectedFilter }) => {

    const [select, setSelect] = useState(selectedFilter);
    const { state } = useFilter();

    return <>
        {
            state.filter === select && <div className="note">
                <h2>{select}</h2>
                <p>{el}</p>
                <button>
                    <span className="material-icons-outlined">
                        delete
                    </span>
                </button>
            </div>

        }
        {
            state.filter === "All" && <div className="note">
                <h2>{select}</h2>
                <p>{el}</p>
                <button>
                    <span className="material-icons-outlined">
                        delete
                    </span>
                </button>
            </div>
        }
    </>

}
