class Pacman {
  constructor(name, xpos, mouth) {
    this.name = name;
    this.xpos = xpos;
    this.mouth = mouth;
  }

  move(dir) {
    if(this.mouth === 'open') {
      this.mouth = 'close';
    } else {
      this.mouth = 'open';
    }
    
    switch(dir) {
      case 'right':
        this.xpos++;
        break;
      case 'left':
        this.xpos--;
        break;
    }
    
    this.update();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'pac boy-active-light';
    this.element.textContent = `${this.name}: 0`;
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    if(this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0px';
    } else {
      this.element.style.backgroundPositionX = GRID_SIZE + 'px';
    }
    this.element.style.left = this.xpos * GRID_SIZE + 'px';
  }
}