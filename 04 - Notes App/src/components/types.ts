/**
 * Represents the structure of a note input form.
 */
export type NoteFormData = {
    /** Title of the note */
    title: string;

    /** Category of the note (e.g., Work, Personal, Ideas) */
    category: string;

    /** Priority of the note (e.g., High, Medium, Low) */
    priority: string;

    /** Detailed content or body of the note */
    description: string;
};

/**
 * Full note type including a unique ID.
 * Combines NoteFormData with an `id` field.
 */
export type NoteType = NoteFormData & {
    /** Unique identifier for the note */
    id: number;
};
