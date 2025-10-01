const main = document.querySelector('#main');
const valorVertical = document.querySelector('#valorVertical');
const valorHorizontal = document.querySelector('#valorHorizontal');
const pelota = document.querySelector('.pelota'); // Cambiado a .pelota para que coincida con el CSS

function verScroll() {
    console.log ('scroll funcionando');
    let top = main.scrollTop;
    let left = main.scrollLeft;
    valorVertical.textContent = `v: ${top}`;
    valorHorizontal.textContent = `h: ${left}`; 
    console.log ('top: ', top)
    console.log ('left: ', left)
    pelota.style.top = `${top}px`;
    pelota.style.left = `${left}px`;
    pelota.style.transform = `scale(${(top/30)})`;
}
main.addEventListener('scroll', verScroll);