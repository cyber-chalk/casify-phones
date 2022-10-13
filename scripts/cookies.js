let settings = document.getElementsByClassName("cookie-container")[0];

const gettingCookie = ("; " + document.cookie)
	.split(`; ALREADY_VERIFIED=`)
	.pop()
	.split(";")[0];
if (document.cookie === "name") { console.log(document.cookies); 
	settings.style.display = "none"
};

let close = document.getElementById("close");
close.addEventListener("click",  function () {
	console.log("no cookies in use");
});

let yes = document.getElementById("accept");
yes.addEventListener("click", function () {
	settings.style.display = "none";
	document.cookie = "name=ALREADY_VERIFIED";
	console.log(document.cookie);
});
