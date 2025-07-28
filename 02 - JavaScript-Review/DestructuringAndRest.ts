type SimpleNote = {
  title: string;
  content: string;
  timestamp: number;
  isPinned: boolean;
};

const notes: SimpleNote[] = [
  {
    title: "Meeting notes",
    content: "Discuss project roadmap",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Project updates",
    content: "Review latest changes",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Team lunch",
    content: "Plan next team outing",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Code review",
    content: "Review pull requests",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Sprint planning",
    content: "Plan next sprint tasks",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Feedback session",
    content: "Discuss feedback from clients",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Retrospective",
    content: "Reflect on last sprint",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Documentation",
    content: "Update project documentation",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Testing",
    content: "Conduct unit tests",
    timestamp: Date.now(),
    isPinned: false,
  },
  {
    title: "Deployment",
    content: "Prepare for deployment",
    timestamp: Date.now(),
    isPinned: false,
  },
];

const [firstNote, secondNote, thirdNote, ...restNotes] = notes;
console.log(firstNote.title);
console.log(secondNote.content);
console.log(thirdNote);
console.log(restNotes.map((note) => note.title).join(", "));

const noteDetails = (note: SimpleNote) => {
  const { title, content, timestamp, isPinned } = note;
  return `Title: ${title}
Content: ${content}
Timestamp: ${new Date(timestamp).toLocaleString()}
Is Pinned: ${isPinned ? "Yes" : "No"}`;
};

console.log(noteDetails);

//nested destruction

type User = {
  name: string;
  age: number;
  location: {
    city: string;
    country: string;
  };
};

const user: User = {
  name: "Alice",
  age: 30,
  location: {
    city: "Wonderland",
    country: "Dreamland",
  },
};

const {
  name: nameUser,
  age: ageUser,
  location: { city: cityUser, country: countryUser },
} = user;

console.log(
  `User: ${nameUser}, Age: ${ageUser}, City: ${cityUser}, Country: ${countryUser}`
);
