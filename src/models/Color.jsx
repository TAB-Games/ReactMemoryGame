class Color {
  constructor(color, value, mod) {
    this.color = color;
    this.value = value;
    this.mod = mod;
    this.isIncrementing = false;
  }

  updateValue() {
    if (this.value >= 230) {
      this.isIncrementing = false;
    } else if (this.value <= 0) {
      this.isIncrementing = true;
    }

    if (this.isIncrementing) {
      this.value += this.mod;
    } else {
      this.value -= this.mod;
    }
  }

  reset() {
    this.color = value;
    this.isIncrementing = false;
  }
}

export default Color;
