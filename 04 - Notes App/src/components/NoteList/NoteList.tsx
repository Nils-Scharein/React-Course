import type {Note} from "../types.ts";
import type {JSX} from "react";
import NoteRow from "./NoteRow.tsx";

interface NoteListProps {
    notes: Note[];
}

const NoteList = ({notes}: NoteListProps): JSX.Element => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">No Notes Yet</p>
        );
    }

    return (
        <div className="space-y-4">
            {notes.map((note: Note) => {
                return (
                    <div key={note.id} className="space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
                            <h3 className="text-lg text-center font-bold">{note.title}</h3>
                            <NoteRow label={"Priority"} value={note.priority}/>
                            <NoteRow label={"Categorty"} value={note.category}/>
                            <p className="mt-2">{note.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default NoteList