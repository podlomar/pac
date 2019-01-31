const GRID_SIZE = 85;
let pacman = new Pacman('Mark', 3, 'close');

document.addEventListener('DOMContentLoaded', () => {
  let field = document.querySelector('.field');
  pacman.mount(field);

  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) { // Arrow right
      pacman.move('right');
    } else if(e.keyCode === 37) { // Arrow right
      pacman.move('left');
    }
  })
});