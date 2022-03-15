import { useState } from "react"
import { useFilter } from "../FilerContext"
import "./ColorPalette.css"
export const ColorPalette = () => {

    const [colors, setColors] = useState(false);
    const { dispatch } = useFilter();
    const row1 = ["color1", "color2", "color3"]
    const row2 = ["color4", "color5", "color6"]
    const row3 = ["color7", "color8", "color9"]

    return <>
        <span className="material-icons-outlined color-icon" onMouseEnter={() => setColors(true)} onMouseLeave={()=>setColors(false)} >
            palette
        </span>

        {
            colors && <div className="colors" onMouseEnter={() => setColors(true)} onMouseLeave={()=>setColors(false)}>
                <div className="row">
                    {
                        row1.map((el, idx) => {
                            return <div key={idx} className={el}
                                onClick={() => dispatch({ type: "SELECT_COLOR", payload: el  })}></div>
                        })
                    }
                </div>
                <div className="row">
                    {
                        row2.map((el, idx) => {
                            return <div key={idx} className={el} onClick={() => dispatch({ type: "SELECT_COLOR", payload: el })}></div>
                        })
                    }
                </div>
                <div className="row">
                    {
                        row3.map((el, idx) => {
                            return <div key={idx} className={el} onClick={() => dispatch({ type: "SELECT_COLOR", payload:  el  })}></div>
                        })
                    }
                </div>


            </div>

        }
    </>
}

