class Shape {
  constructor(color, chars, textColor) {
    this.color = color;
    this.chars = chars;
    this.textColor = textColor;
    this.tag = "";
  }

  createSVG() {
    const chars = this.chars;
    if (chars.length > 3) {
      throw new Error("Please enter no more than 3 characters.");
    }

    return `<svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${this.tag}

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
        ${this.chars}
      </text>
    </svg>`;
  }
}

class Circle extends Shape {
  constructor(color, chars, textColor) {
    super(color, chars, textColor);
    this.tag = `<circle cx="147" cy="100" r="100" fill="${color}" />`
  }
}

class Triangle extends Shape {
  constructor(color, chars, textColor) {
    super(color, chars, textColor);
    this.tag = `<polygon points="140,2 25,175 280,175" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color, chars, textColor) {
    super(color, chars, textColor);
    this.tag = `<rect x="100" y="60" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };