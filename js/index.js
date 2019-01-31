const GRID_SIZE = 85;
let pacman = new Pacman(3, 'close');

document.addEventListener('DOMContentLoaded', () => {
  pacman.update();

  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) { // Arrow right
      pacman.move();
    }
  })
});