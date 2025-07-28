let number: number = 4;

// without ternary
let message: string;

if (number % 2 === 0) {
  message = "Even Number";
} else {
  message = "Odd Number";
}

console.log(message);

// with ternary
let message2: string = number % 2 === 0 ? "Even Number" : "Odd number";

console.log(message2);

interface Note {
  title: string;
  content: string;
  timestamp: number;
  isPinned: boolean;
}

const node: Note = {
  title: "Meeting notes",
  content: "Discuss project roadmap",
  timestamp: Date.now(),
  isPinned: false,
};

const noteText = `
Title: ${node.title}
Status: ${node.isPinned ? "Pinned Note" : "Regular Note"}
Last Edited: ${new Date(node.timestamp).toLocaleString()}
`;

console.log(noteText);

//Circuit Rendering
console.log(true && "Hello");

const isLoggedIn: boolean = true;

function showWelcome() {
  return isLoggedIn && "Welcome, User";
}

console.log(showWelcome());
