class Logger {
  constructor() {
    this.body = {
      color: "#008f68",
      size: "1rem"
    };
  }

  setBodyStyle({ color, size }) {
    if (color !== undefined) this.body.color = color;
    if (size !== undefined) this.body.size = size;
  }

  log(body = "") {
    // adds dynamic styling via the template literals
    console.log(
      `%c${body}`,
      `color: ${this.body.color}; font-weight: bold; font-size: ${
        this.body.size
      }; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
    );
  }
}

const logger = new Logger();

export default logger;