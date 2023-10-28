const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./lib/generateSVG");

const questions = [
  {
    type: "list",
    message: "Choose a shape",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message: "Write up to 3 characters",
    name: "chars",
  },
  {
    type: "input",
    message: "What color would you like the shape to be?",
    name: "color",
  },
  {
    type: "input",
    message: "What color would you like the text to be?",
    name: "textColor",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log("Generated logo.svg");
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(`logo.svg`, generate(response));
  });
}

init();