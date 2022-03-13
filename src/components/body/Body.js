import { useEffect, useState } from "react";
import "./Body.css"

export const Body = () => {
    const [tags, setTags] = useState(["All", "work", "Home", "Class"]);
    const [tag, setTag] = useState("")

    useEffect(() => {
        setTag("")
    }, [tags])
    return <div className="body">
        <nav className="nav">
            <h2>Filter</h2>
            <ul>
                {
                    tags.map((el, idx) => {
                        return <li key={idx}>{el}</li>
                    })

                }
                <li><input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                    <button onClick={() => setTags([...tags, tag])}>+</button></li>
            </ul>
        </nav>
        <div className="content">
            <h1>Hello</h1>
        </div>
    </div>
}