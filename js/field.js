const GRID_UNIT = 85;

class Field {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'field';
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    this.element.style.width = this.width * GRID_UNIT + 'px';
    this.element.style.height = this.height * GRID_UNIT + 'px';
  }
}