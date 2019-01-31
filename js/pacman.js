class Pacman {
  constructor(field, name, xpos, ypos) {
    this.field = field;
    this.name = name;
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = 'open';
    this.facing = 'right';
  }

  move(dir) {
    if(this.mouth === 'open') {
      this.mouth = 'close';
    } else {
      this.mouth = 'open';
    }
    
    switch(dir) {
      case 'right':
        if(this.xpos < this.field.width-1) {
          this.xpos++;
        }
        break;
      case 'left':
        if(this.xpos > 0) {  
          this.xpos--;
        }
        break;
      case 'up':
        if(this.ypos > 0) {  
          this.ypos--;
        }
        break;
      case 'down':
        if(this.ypos < this.field.height-1) {
          this.ypos++;
        }
        break;
    }
    
    this.facing = dir;
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
      this.element.style.backgroundPositionX = GRID_UNIT + 'px';
    }

    if(this.facing === 'right') {
      this.element.style.backgroundPositionY = '0px';
    } else if(this.facing === 'left'){
      this.element.style.backgroundPositionY = -GRID_UNIT + 'px';
    } else if(this.facing === 'down'){
      this.element.style.backgroundPositionY = -2 * GRID_UNIT + 'px';
    } else if(this.facing === 'up'){
      this.element.style.backgroundPositionY = -3 * GRID_UNIT + 'px';
    }
   
    this.element.style.left = this.xpos * GRID_UNIT + 'px';
    this.element.style.top = this.ypos * GRID_UNIT + 'px';
  }
}