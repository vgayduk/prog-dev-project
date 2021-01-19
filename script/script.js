window.onload = function () {
	let preloaderContainer = document.querySelector('.preloader');
	let preloader = document.querySelector('.preloader div');
	preloader.style.opacity = 0;
	preloaderContainer.style.opacity = 0;
	preloaderContainer.style.left = '-100vw';
}

let photos = ['img/gallery1.jpg', 'img/gallery2.jpg', 'img/gallery3.jpg', 'img/gallery4.jpg', 'img/gallery5.jpg', 'img/gallery6.jpg'];
let gallery = document.querySelector('.gallery');
let galleryItems = ['img/gallery1.jpg', 'img/gallery2.jpg', 'img/gallery3.jpg', 'img/gallery4.jpg', 'img/gallery5.jpg', 'img/gallery6.jpg', 'img/gallery7.jpg', 'img/gallery8.jpg', 'img/gallery9.jpg'];

setInterval(function() {
	let randomContainer = Math.floor(Math.random() * gallery.children.length);
	let randomImage = Math.floor(Math.random() * galleryItems.length);

	while(photos.indexOf(galleryItems[randomImage]) !== -1) {
		randomImage = Math.floor(Math.random() * galleryItems.length);
	}

	let oldSrc = gallery.children[randomContainer].getAttribute('data-src');
	
	photos.splice(photos.indexOf(oldSrc), 1);
	photos.push(galleryItems[randomImage]);

	gallery.children[randomContainer].style.opacity = 0;

	setTimeout(function(){
		gallery.children[randomContainer].style.background = `#fff url('${galleryItems[randomImage]}')`;
		gallery.children[randomContainer].setAttribute('data-src', galleryItems[randomImage])
		gallery.children[randomContainer].style.opacity = 1;
	}, 500);
}, 3000);

let pageLinks = document.querySelectorAll('a[href*="#"]');

for (let i = 0; i < pageLinks.length; i++) {
	if (pageLinks[i].getAttribute('href') === 'https://web.telegram.org/#/im?p=@MonitBotBot') continue;
	pageLinks[i].addEventListener('click', function(event) {
		event.preventDefault();
		let anchorId = pageLinks[i].getAttribute('href');
		document.querySelector(anchorId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}

let line = document.querySelector('.line'),
	lineContainer = document.querySelector('.line-container'),
	menu = document.querySelector('.burger-menu');

function menuOperating() {
	menu.classList.toggle('line-active')
	menu.classList.toggle('unactive')
}

document.body.addEventListener('click', (event) => {
	if (event.target !== menu && event.target !== lineContainer && event.target !== line) {
		menu.classList.add('unactive');
		line.classList.remove('line-active');
	}
});

lineContainer.addEventListener('click', menuOperating);