let field = new Field(12, 6);
let pacman = new Pacman('Mark', 3, 'close');

document.addEventListener('DOMContentLoaded', () => {
  let container = document.querySelector('.container');
  field.mount(container);
  pacman.mount(field.element);

  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) { // Arrow right
      pacman.move('right');
    } else if(e.keyCode === 37) { // Arrow right
      pacman.move('left');
    }
  })
});