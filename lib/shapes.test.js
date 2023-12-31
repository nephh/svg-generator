const { Circle, Triangle, Square } = require("./shapes.js");

describe("Generate SVG", () => {
  // More than 3 characters test
  describe("Characters", () => {
    it("should throw an error when there are more than 3 characters", () => {
      const cb = () => new Circle("red", "foobar", "white").createSVG();
      const err = new Error("Please enter no more than 3 characters.");

      expect(cb).toThrowError(err);
    });
  });

  // Testing the correct output for circle
  describe("Circle", () => {
    it("should generate the correct tag when the shape is a circle", () => {
      const shape = new Circle("red", "nph", "white").createSVG();
      expect(shape).toEqual(`<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="147" cy="100" r="100" fill="red" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        nph
      </text>
    </svg>`);
    });
  });

  describe("Triangle", () => {
    it("should generate the correct tag when the shape is a triangle", () => {
      const shape = new Triangle("red", "nph", "black").createSVG();
      expect(shape).toEqual(`<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="140,2 25,175 280,175" fill="red" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">
        nph
      </text>
    </svg>`);
    });
  });
  
  describe("Square", () => {
    it("should generate the correct tag when the shape is a square", () => {
      const shape = new Square("purple", "nph", "white").createSVG();
      expect(shape).toEqual(`<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="100" y="60" width="100" height="100" fill="purple" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        nph
      </text>
    </svg>`);
    });
  });
});
