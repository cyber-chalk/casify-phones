let observer = new IntersectionObserver(
	(entry) => {
		if (entry[0].isIntersecting) entry[0].target.classList.add("hide");
	},
	{
		threshold: 1.0
	}
);

observer.observe(document.querySelector(".top"));
//will hide the top element (the non-broken phone) which will allow the user to see the broken phone which is underneath
