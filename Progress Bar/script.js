const progress = document.getElementById('progress');
const second = document.getElementById('second');

let prog = 0;
let inter;

inter = setInterval(() => {
    second.style.width = (0.452 * prog) + 'rem';
    progress.textContent = prog + '%';
    prog += 1;

    if(prog === 101) clearInterval(inter);
}, 100);
