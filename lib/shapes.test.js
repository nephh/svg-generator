const { Circle } = require("./shapes.js");

describe("Generate SVG", () => {
  describe("Characters", () => {
    it("should throw an error when there are more than 3 characters", () => {
      const cb = () => new Circle("red", "foobar", "white").createSVG();
      const err = new Error("Please enter no more than 3 characters.");

      expect(cb).toThrowError(err);
    });
  });

  describe("Shape", () => {
    it("should generate the correct tag when the shape is a circle", () => {
      const shape = new Circle("red", "nph", "white").createSVG();
      expect(shape).toEqual(`<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="140" cy="100" r="100" fill="red" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        nph
      </text>
    </svg>`);
    });
  });
});
