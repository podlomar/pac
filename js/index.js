const GRID_SIZE = 85;

let xpos = 0;
let mouth = 'open';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) { // Arrow right
      if(mouth === 'open') {
        mouth = 'close';
      } else {
        mouth = 'open';
      }
      xpos++;
  
      let pac = document.querySelector('.pac');
      
      if(mouth === 'open') {
        pac.style.backgroundPositionX = '0px';
      } else {
        pac.style.backgroundPositionX = GRID_SIZE + 'px';
      }
      pac.style.left = xpos * GRID_SIZE + 'px';
    }
  })
});