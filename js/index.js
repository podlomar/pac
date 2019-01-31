
document.addEventListener('DOMContentLoaded', () => {
  let container = document.querySelector('.container');
  let field = new Field(12, 6);
  field.mount(container);

  let pacman = new Pacman(field, 'Mark', 3, 2);
  pacman.mount(field.element);

  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) { // Arrow right
      pacman.move('right');
    } else if(e.keyCode === 37) { // Arrow right
      pacman.move('left');
    } else if(e.keyCode === 38) { // Arrow right
      pacman.move('up');
    } else if(e.keyCode === 40) { // Arrow right
      pacman.move('down');
    }
  })
});