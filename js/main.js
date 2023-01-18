const frame = document.querySelector('.frame');
const articles = frame.querySelectorAll('article');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const opens = frame.querySelectorAll('.open');
const closes = frame.querySelectorAll('.close');

next.addEventListener('click', () => frame.append(frame.firstElementChild));
prev.addEventListener('click', () => frame.prepend(frame.lastElementChild));

opens.forEach((open) =>
	open.addEventListener('click', (e) => {
		e.target.closest('article').classList.add('on');
		for (const el of articles) !el.classList.contains('on') && el.classList.add('hide');
	})
);

closes.forEach((close) =>
	close.addEventListener('click', (e) => {
		e.target.closest('article').classList.remove('on');
		for (const el of articles) el.classList.remove('hide');
	})
);
