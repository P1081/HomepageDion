const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#site-search');
const searchStatus = document.querySelector('.search-status');
const searchMessages = [
	'Gegeboi sandaLEE',
	'Hanapin kolang saglet',
	'Wag ka alam koto'
];
const randomVideo = document.querySelector('.random-video');
const portraitImage = document.querySelector('.portrait img');
const videoButton = document.querySelector('.video-button');
const videoClips = [
	'assets/cat.mp4',
	'assets/sigeonpex.mp4',
	'assets/summon - Trim.mp4'
];
let searchTimer;

function finishVideo() {
	randomVideo.pause();
	randomVideo.currentTime = 0;
	randomVideo.hidden = true;
	portraitImage.hidden = false;
	videoButton.hidden = false;
}

videoButton.addEventListener('click', () => {
	clearTimeout(searchTimer);
	const clip = videoClips[Math.floor(Math.random() * videoClips.length)];
	randomVideo.src = clip;
	randomVideo.load();
	portraitImage.hidden = true;
	randomVideo.hidden = false;
	videoButton.hidden = true;
	randomVideo.play().catch(finishVideo);
});

randomVideo.addEventListener('ended', finishVideo);
randomVideo.addEventListener('error', finishVideo);

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	clearTimeout(searchTimer);

	const query = searchInput.value.trim();
	const shortcut = query.toLowerCase();

	if (!query) {
		searchStatus.textContent = 'Type something to search.';
		return;
	}

	const message = searchMessages[Math.floor(Math.random() * searchMessages.length)];
	searchStatus.textContent = message;
	searchTimer = setTimeout(() => {
		if (shortcut === 'youtube') {
			window.location.href = 'https://www.youtube.com/';
			return;
		}

		if (shortcut === 'discord') {
			window.location.href = 'https://discord.com/';
			return;
		}

		window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
	}, 900);
});
