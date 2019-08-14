let myVideos = [
	["./videos/memory.webm", "Memory"],
	["./videos/tracks.webm", "Tracks"],
	["./videos/meltdown.webm", "Meltdown"],
	["./videos/pause.webm", "Pause"],
	["./videos/sphericalsaunterm.webm", "Spherical Saunter M"],
	["./videos/windslime.webm", "Wind Slime"],
	["./videos/engineerarena.webm", "Engineer Arena"]
];

let social = [
	{
		img: "../img/steam.png",
		link: "https://store.steampowered.com/app/1118950/Engineer_Arena/"
	},
	{
		img: "../img/itchio.png",
		link: "https://waveparadigm.itch.io/engineer-arena"
	},
	{
		img: "../img/twitter.png",
		link: "https://twitter.com/EngineerArena"
	},
	{
		img: "../img/discord.png",
		link: "https://discord.gg/EqnSwwx"
	},
	{
		img: "../img/youtube.png",
		link: "https://www.youtube.com/channel/UCRjwrNKpYfv3yy-aOCpDnyg"		
	},
	{
		img: "../img/dopresskit.png",
		link: "./presskit/index.html"
	}
];

let a = -1;
let vid = null;

window.onload = function() {
	vid = document.getElementById("vid");
	a = myVideos.length - 2;
	
	fillSocial();
	fillGifIndicator();
	nextGfy();
}

function prevGfy() {
	a -= 1;
	if (a < 0)
		a = myVideos.length - 1;
	vid.src = myVideos[a][0];
	vid.load();
	vid.play();

	updateIndicators();
}

function nextGfy() {
	a = Math.floor((a + 1) % myVideos.length);
	chosenGfy = myVideos[a][0];

	vid.src = chosenGfy;
	vid.load();
	vid.play();

	updateIndicators();
}

function fillSocial() {
	let s = document.getElementById("social");
	let htmlString = "";
	for (let i = 0; i < social.length; i++) {
		htmlString += "<a href=\"" + social[i].link + "\"><img src=\"" + social[i].img + "\" /></a>";
	}
	s.innerHTML = htmlString;
}