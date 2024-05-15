import Color from "./Color";
class Gradient {
  constructor() {
    this.red = new Color("red", 230, 20);
    this.green = new Color("green", 230, 3);
    this.blue = new Color("blue", 230, 13);
  }

  update() {
    this.red.updateValue();
    this.green.updateValue();
    this.blue.updateValue();
  }
}

export default Gradient;
