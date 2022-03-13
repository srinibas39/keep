
import "./Editor.css"
export const Editor = () => {
    return <div className="editor">
        <div className="editor-title">
            <span>Title</span>
            <span class="material-icons-outlined">
                push_pin
            </span>
            

        </div>
        <input type="text" placeholder="Take a note" />
        <div className="editor-footer">

            <select name="filters">
                <option value="All">All</option>
                <option value="Home">Home</option>
                <option value="work">Work</option>
                <option value="class">Class</option>
            </select>
            <span className="material-icons-outlined color-icon">
                palette
            </span>
            <span className="btn-close">close</span>
        </div>


    </div>
}