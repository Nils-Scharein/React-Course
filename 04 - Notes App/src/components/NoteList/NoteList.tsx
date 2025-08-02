import type {NoteType} from "../types.ts";
import type {JSX} from "react";
import NoteRow from "./NoteRow.tsx";
import Note from "./Note.tsx";

interface NoteListProps {
    notes: NoteType[],
    deleteNote: (note: number) => void
}

const NoteList = ({notes, deleteNote}: NoteListProps): JSX.Element => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">No Notes Yet</p>
        );
    }

    return (
        <div className="space-y-4">
            {notes.map((note: NoteType) => {
                return (
                    <div key={note.id} className="space-y-4" id="NoteList">
                        <Note key={note.id} note={note} deleteNote={deleteNote}/>
                    </div>
                );
            })}
        </div>
    )
}

export default NoteList