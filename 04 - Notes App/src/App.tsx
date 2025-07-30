import NoteFormWithoutState from "./components/Form/NoteFormWithOnetState.tsx";
import {useState} from "react";
import type {Note} from "./components/types.ts";
import NoteList from "./components/NoteList/NoteList.tsx";

const App = () => {


    // this is going to be global state
    const [notes, setNotes] = useState<Note[]>([]);
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">{String.fromCodePoint(0x1F4D3)} Notes App</h1>
            <p className="text-2xl font-bold mb-4 text-center">This is a simple notes application.</p>
            {/* <NoteFormOld titleInput="Title Card"/> */}
            <NoteFormWithoutState notes={notes} setNotes={setNotes}/>
            <NoteList notes={notes}/>
        </div>
    );
}
export default App;
