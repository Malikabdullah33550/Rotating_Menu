let open = document.getElementById('open');
let close = document.getElementById('close');
let container = document.querySelectorAll('.container');

// open.addEventlistener('click', () => container.classList.add('show-nav'))

// close.addEventlistener('click', () => container.classList.remove('show-nav'))

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));