const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const specialWords = {
  OO: "OO",
  API: "API",
  NaN: "NaN",
  JSONP: "JSONP",
  stopPropagation: "stopPropagation",
  preventDefault: "preventDefault",
};
function capitalizedWord(word) {
  const lowerCaseWord = word.toLowerCase();
  if (specialWords.hasOwnProperty(lowerCaseWord)) {
    return specialWords[lowerCaseWord];
  }
  return word.replace(/\b\w/g, (char) => char.toUpperCase());
}
const titleCased = () => {
  return tutorials.map((tutorial) =>
    tutorial.split(" ").map(capitalizedWord).join(" ")
  );
};
console.log(titleCased());
