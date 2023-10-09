async function notice(text, color, time) {
    return new Promise((resolve) => {
        const nf = document.createElement('div');
        nf.className = 'nf';
        nf.style.backgroundColor = color;
        const nb = document.createElement('div');
        nb.className = 'nb';
        nb.style.animationDuration = time + 'ms';
        const nt = document.createElement('div');
        nt.className = 'nt';
        nt.innerHTML = text;
        nf.appendChild(nb);
        nf.appendChild(nt);
        document.getElementById('body').insertBefore(nf, document.getElementById('main'));
        setTimeout(() => {
            nf.classList.add('show');
        }, 0);
        setTimeout(() => {
            nf.classList.remove('show');
        }, time);
        setTimeout(() => {
            nf.remove();
            resolve();
        }, time + 500);
    });
}
