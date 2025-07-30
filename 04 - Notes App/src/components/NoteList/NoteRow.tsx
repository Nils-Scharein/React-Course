interface NoteRowProps {
    label: string;
    value: string;
}

const NoteRow = ({label, value}: NoteRowProps) => (
    <div className="flex">
        <h3 className="text-lg font-bold pr-2">{label}:</h3>
        <h3 className="text-lg">{value}</h3>
    </div>
);

export default NoteRow