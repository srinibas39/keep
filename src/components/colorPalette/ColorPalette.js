import { useState } from "react"
import { useFilter } from "../FilerContext"
import "./ColorPalette.css"
export const ColorPalette = () => {

    const [colors, setColors] = useState(false)
    return <>
        <span className="material-icons-outlined color-icon" onClick={() => setColors(!colors)}>
            palette
        </span>

         {
             colors &&   <div className="colors">
             <div className="row">
                 <div className="color1"></div>
                 <div className="color2"></div>
                 <div className="color3"></div>
             </div>
             <div className="row">
                 <div className="color4"></div>
                 <div className="color5"></div>
                 <div className="color6"></div>
             </div>
             <div className="row">
                 <div className="color7"></div>
                 <div className="color8"></div>
                 <div className="color9"></div>
             </div>
 
             
         </div>
 
         }
    </>
}

