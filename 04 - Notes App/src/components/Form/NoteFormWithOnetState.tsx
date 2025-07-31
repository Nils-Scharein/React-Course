import type {NoteFormData, NoteType} from "../types.ts";


import {useState} from "react";
import TextareaField from "./components/TextareaField.tsx";
import TextInput from "./components/TextInput.tsx";
import SelectField from "./components/SelectField.tsx";

interface NoteFormProps {
    notes: NoteType[],
    setNotes: (notes: NoteType[]) => void
}

export const NoteForm = ({notes, setNotes}: NoteFormProps) => {

    const [formData, setFormData] = useState<NoteFormData>({
        title: "",
        category: "work",
        priority: "Medium",
        description: ""
    });

    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        console.log(e.target.name, e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validate form data
        if (!formData.title || !formData.description) return;

        // create a new note object
        const newNote = {id: Date.now(), ...formData}
        setNotes([newNote, ...notes]);
        // add nodes to the notes array (State)

        setFormData({
            title: "",
            category: "Work",
            priority: "Medium",
            description: ""
        })

        console.log("Form Submitted", formData);
    }


    return (
        <>
            {/* This button toggles the visibility of the form */}
            <button
                className="w-full bg-gray-100 border-gray-300 border text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
                onClick={() => setIsFormVisible(!isFormVisible)}>{isFormVisible ? "Hide Form" : "Add new Note"}</button>
            {/* This is the form that will be shown or hidden based on the button click */}
            {isFormVisible && (<form className="mb-6">
                <div className="mb-4">
                    <TextInput label={"Title"} name={"title"} value={formData.title} onChange={handleChange} required/>
                </div>
                <div className="mb-4">
                    <SelectField label={"Priority"} name={"priority"} value={formData.priority}
                                 options={[
                                     {value: "High", label: "High"},
                                     {value: "Medium", label: "Medium"},
                                     {value: "Low", label: "Low"}
                                 ]}
                                 onChange={handleChange}/></div>
                <div className="mb-4">
                    <SelectField label={"Category"} name={"category"} value={formData.category}
                                 options={[
                                     {value: "Work", label: "Work"},
                                     {value: "Personal", label: "Personal"},
                                     {value: "Ideas", label: "Ideas"}
                                 ]} onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <TextareaField label={"Description"} name={"description"} value={formData.description}
                                   onChange={handleChange} required/>
                </div>
                <button
                    className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
                    onClick={handleSubmit}>
                    Add Note
                </button>
            </form>)}

        </>
    );
};

export default NoteForm;