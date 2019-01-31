class Pacman {
  constructor(xpos, mouth) {
    this.xpos = xpos;
    this.mouth = mouth;
  }

  move() {
    if(this.mouth === 'open') {
      this.mouth = 'close';
    } else {
      this.mouth = 'open';
    }
    this.xpos++;
    this.update();
  }

  update() {
    let pac = document.querySelector('.pac');
    if(this.mouth === 'open') {
      pac.style.backgroundPositionX = '0px';
    } else {
      pac.style.backgroundPositionX = GRID_SIZE + 'px';
    }
    pac.style.left = this.xpos * GRID_SIZE + 'px';
  }
}