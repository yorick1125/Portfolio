document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.project-tab');
	const groups = document.querySelectorAll('.project-group');
	const statusCards = [...document.querySelectorAll('.status-grid .status-card')];
	const equalizeStatusCards = () => {
		if (!statusCards.length) return;
		statusCards.forEach((card) => { card.style.minHeight = ''; });
		const tallest = Math.ceil(Math.max(...statusCards.map((card) => card.getBoundingClientRect().height)));
		statusCards.forEach((card) => { card.style.minHeight = `${tallest}px`; });
	};
	let resizeFrame;
	const scheduleStatusCardSizing = () => {
		cancelAnimationFrame(resizeFrame);
		resizeFrame = requestAnimationFrame(equalizeStatusCards);
	};
	scheduleStatusCardSizing();
	window.addEventListener('resize', scheduleStatusCardSizing, { passive: true });
	if (document.fonts?.ready) document.fonts.ready.then(scheduleStatusCardSizing);

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			const target = tab.dataset.target;
			tabs.forEach((item) => {
				const selected = item === tab;
				item.classList.toggle('active', selected);
				item.setAttribute('aria-selected', String(selected));
			});
			groups.forEach((group) => {
				const selected = group.id === target;
				group.classList.toggle('active', selected);
				group.hidden = !selected;
			});
		});
	});
});
