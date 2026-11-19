let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('h1');
let hill4 = document.getElementById('h4');
let hill5 = document.getElementById('h5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    h5.style.left = value * 1.5 + 'px';
    h4.style.left = value * -1.5 + 'px';
    h1.style.top = value * 1 + 'px';
});