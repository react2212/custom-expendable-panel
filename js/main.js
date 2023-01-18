const frame = document.querySelector('.frame');
const articles = frame.querySelectorAll('article');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const opens = frame.querySelectorAll('.open');

next.addEventListener('click', () => frame.append(frame.firstElementChild));
prev.addEventListener('click', () => frame.prepend(frame.lastElementChild));
