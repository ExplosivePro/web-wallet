class Logger {
  constructor() {
    this.body = {
      color: "#008f68",
      backColor: "#008f68",
      size: "1rem"
    };
  }

  setStyle({ color, size, backColor }) {
    if (color !== undefined) this.body.color = color;
    if (size !== undefined) this.body.size = size;
    if (backColor !== undefined) this.body.backColor = backColor;
  }

  log(body = "") {
    // adds dynamic styling via the template literals
    console.log(
      `%c${body}`,
      `color: ${this.body.color};background: ${this.body.backColor}; font-weight: bold; font-size: ${
        this.body.size
      }; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
    );
  }
}

const logger = new Logger();

export default logger;