var notes = [
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
    isPinned: true,
  },
  {
    title: "Retrospective",
    content: "Reflect on last sprint",
    timestamp: Date.now(),
    isPinned: true,
  },
  {
    title: "Documentation",
    content: "Update project documentation",
    timestamp: Date.now(),
    isPinned: true,
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

// map
const titles = notes.map((note) => {
  return note.title;
});

const titleIndex = notes.map((note, index) => `${index}: ${note.title}`);

console.log(titles);
console.log(titleIndex);

// filter
const nodesTrue = notes.filter((note) => note.isPinned);

console.log(nodesTrue);

const nodesTrueTitle = notes
  .filter((note) => note.isPinned)
  .map((notes) => notes.title);

console.log(nodesTrueTitle);

// reduce
const numbers: number[] = [1, 2, 3, 4, 5];
const sumNumbers = numbers.reduce(
  (accumulator, currentVaue) => accumulator + currentVaue,
  0
);

console.log(sumNumbers);

const totalCharacters = notes.reduce(
  (total, note) => total + note.content.length,
  0
);

console.log(totalCharacters);

// for each
notes.forEach((note, index) => console.log(`${index}: ${note.title}`));
