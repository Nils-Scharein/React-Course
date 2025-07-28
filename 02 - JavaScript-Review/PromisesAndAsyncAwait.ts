/* 
JavaScript handles asynchronous operations using Promises and async/await, allowing us to manage things like API calls, 
database queries, or file reading without blocking execution.
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    random >= 0.5 ? reject("Promise Rejected") : resolve("Promise Resolved"),
      2000;
  });
});

// first way to use
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// example with fetch API ({JSON} Placeholder)

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
