const userName: string = "John";
const age: number = 30;

const greeting = `Hello, my name is ${userName}`;

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

const note: { title: string; timestamp: number } = {
  title: "Discuss project",
  timestamp: Date.now(),
};

console.log(`Last Edited: ${formatDate(note.timestamp)}`);

console.log(greeting);
