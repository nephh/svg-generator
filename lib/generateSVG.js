const { Circle, Triangle, Square } = require("./shapes.js");

function render(data) {
  const { shape, chars, color, textColor } = data;

  if (shape === "circle") {
    return new Circle(color, chars, textColor).createSVG();
  } else if (shape === "triangle") {
    return new Triangle(color, chars, textColor).createSVG();
  } else if (shape === "square") {
    return new Square(color, chars, textColor).createSVG();
  }
}

module.exports = render;