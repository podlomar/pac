
document.addEventListener('DOMContentLoaded', () => {
  let container = document.querySelector('.container');
  let field = new Field(12, 6);
  field.mount(container);

  let pacSquad = [
    new Pacman(field, 'Jane', 'girl', 'medium', 3, 2),
    new Pacman(field, 'Mark', 'boy', 'light', 1, 2),
    new Pacman(field, 'John', 'boy', 'dark', 3, 1),
    new Pacman(field, 'Eve', 'girl', 'light', 5, 4),
    new Pacman(field, 'Jolanda', 'girl', 'dark', 9, 5),
  ];

  for(let pacman of pacSquad) {
    pacman.mount(field.element);
  }

  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) { // Arrow right
      pacSquad[0].move('right');
    } else if(e.keyCode === 37) { // Arrow right
      pacSquad[0].move('left');
    } else if(e.keyCode === 38) { // Arrow right
      pacSquad[0].move('up');
    } else if(e.keyCode === 40) { // Arrow right
      pacSquad[0].move('down');
    }
  })
});