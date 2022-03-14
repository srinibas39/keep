
import { useNotes } from "../NoteContext"
import "./Note.css"
import { Snote } from "./Snote";

export const Note = () => {
    const { notes, selectedFilter} = useNotes();

    return <>
        {
            notes && notes.map((el, idx) => {
                return <Snote  key={idx} el={el} selectedFilter={selectedFilter}/>
            })
        }
    </>

}

