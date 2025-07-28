type Person = {
  name: string;
  age: number;
  location: {
    city: string;
    country: string;
  };
};

const person: Person = {
  name: "Brad",
  age: 30,
  location: {
    city: "London",
    country: "UK",
  },
};

// ? = This could be undefined
console.log(person.location?.city);

let value = null;
let result = value ?? "Defaul Value";

console.log(result);
console.log(person?.meal ?? "Unkown");
