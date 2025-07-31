import NoteRow from "./NoteRow.tsx";
import type {NoteType} from "../types.ts";

type NoteProps = {
    note: NoteType,
    deleteNote: (noteId: number) => void;
}

const Note = ({note ,deleteNote}: NoteProps) =>
{
    return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300 border-l-4"
         style={{borderColor: note.priority === "High" ? "red" : note.priority === "Medium"
                 ? "orange" : note.priority === "Low" ? "green" : "black"}}>
        <h3 className="text-lg text-center font-bold">{note.title}</h3>
        <NoteRow label={"Priority"} value={note.priority}/>
        <NoteRow label={"Categorty"} value={note.category}/>
        <p className="mt-2">{note.description}</p>
        <button
            className="mt-3 bg-red-500 text-white py-2 rounded-lg cursor-pointer hover:bg-red-600 p-2"
            onClick={() => deleteNote(note.id)}>
            Delete Note
        </button>
    </div>
    )
}

export default Note