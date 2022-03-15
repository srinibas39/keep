
import { useEffect, useState } from "react";
import { ColorPalette } from "../colorPalette/ColorPalette";
import { useFilter } from "../FilerContext";

import { useNotes } from "../NoteContext"
import { Select } from "../Select/Select";

import "./Editor.css"
export const Editor = () => {
    const { noteText, setNoteText, notes, setNotes, tags, setSelectedFilter } = useNotes();
    const { state } = useFilter()
    useEffect(() => {
        setNoteText("")
    }, [notes])


    return <>
        <div className={`editor ${state.color}`}>
            <div className="editor-title">
                <span>Title</span>
                <span className="material-icons-outlined"
                    style={{ cursor: "pointer" }}
                    onClick={() => setNotes([...notes, noteText])}>
                    push_pin
                </span>
            </div>
            <input className={state.color} type="text" placeholder="Take a note"
                value={noteText} onChange={(e) => setNoteText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && setNotes([...notes, noteText])} />

            <div className="editor-footer">

                <Select setSelectedFilter={setSelectedFilter} tags={tags} />

                <ColorPalette />

                <span className="btn-close">close</span>
            </div>



        </div></>
}