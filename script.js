let d = document.getElementById('dubai');
let b = document.getElementById('burj');
let s = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    d.style.left = value * -2 + 'px';
    b.style.top = value * 1 + 'px';
    s.style.top = value * 1 + 'px';
});