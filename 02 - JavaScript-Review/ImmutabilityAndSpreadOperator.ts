type SimpleNoteString = string;

const myNotes: SimpleNoteString[] = [
  "Meeting notes",
  "Project updates",
  "Team lunch",
  "Code review",
  "Sprint planning",
  "Feedback session",
  "Retrospective",
  "Documentation",
  "Testing",
];

// Don't change the old array, because React could think that nothing changed.
const newNodes = [...myNotes];
const newNodes2 = myNotes.map((note) =>
  note === "Meeting notes" ? "Shopping List" : note
);
newNodes.push("Workout Plan");

console.log(myNotes);
console.log(newNodes);
console.log(newNodes2);

//Objects

const user2 = {
  name: "John",
  age: 30,
};

const newUser = {
  ...user2,
};

newUser.age = 31;

console.log(user2);
console.log(newUser);
