let myVideos = [
	["./videos/memory.webm", "Memory"],
	["./videos/tracks.webm", "Tracks"],
	["./videos/meltdown.webm", "Meltdown"],
	["./videos/pause.webm", "Pause"],
	["./videos/sphericalsaunterm.webm", "Spherical Saunter M"],
	["./videos/windslime.webm", "Wind Slime"],
	["./videos/engineerarena.webm", "Engineer Arena"]
];

var games = [
	{
		title: "Memory",
		description: "Live through the memorysort experiment and explore three different platforming mechanics.",
		image: "img/games/memory.png",
		links: [["https://waveparadigm.itch.io/memory", "itch.io"]]
	},
	{
		title: "Tracks",
		description: "Solve moral quandaries in this on-rails experience.",
		image: "img/games/tracks.png",
		links: [["https://waveparadigm.itch.io/tracks", "itch.io"], ["http://adamgincel.com/tracks", "Play Online"]]
	},
	{
		title: "Meltdown",
		description: "Experience the intricacies of Nuclear Reactor operation. Made in conjunction with James Romph (<a href=\"http://tehpilot.com\">website</a>) and Professor Alex Wellerstein, Meltdown aims to teach a realistic story about the events that lead up to nuclear reactor meltdown. Fall 2016.",
		image: "img/games/meltdown.png",
		links: [["https://waveparadigm.itch.io/meltdown", "itch.io"]]
	},
	{
		title: "Pause",
		description: "Pause and Unpause the world! Freeze time to guide object(s) to the end of levels with many moving pieces. 2016-2018.",
		image: "img/games/pause.png",
		links: [["https://waveparadigm.itch.io/pause", "itch.io"], ["http://adamgincel.com/pause", "Play Online"], ["https://play.google.com/apps/testing/com.WaveParadigm.Pause17", "Google Play"]]
	},
	{
		title: "Tilt 'em",
		description: "Inspired by rolling legends before it, tilt the world and possess different objects in this arcade platforming experience!",
		image: "./img/games/sphericalsaunterm.png",
		links: [["https://waveparadigm.itch.io/spherical-saunter-m", "itch.io"]]
	},
	{
		title: "Wind Slime",
		description: "The roaming spirit of a once-great wind mage finds a home in a small, unassuming mountain slime. He tasks himself with climbing to the top of the mountain, harnessing the power of the mountain's mana crystals to use a small fraction of his former magic, manipulating the endless blizzard to guide him up the hazardous slope.",
		image: "./img/games/windslime.png",
		links: [["https://waveparadigm.itch.io/wind-slime", "itch.io"]]
	},
	{
		title: "Engineer Arena",
		description: "A 1-4 player splitscreen FPS where you upgrade on the fly! Take on your friends in the arena and come out on top.",
		image: "./img/games/engineerarena.png",
		links: [["https://twitter.com/EngineerArena", "Twitter"]]
	}
];


let social = [
	{
		img: "./img/twitter.png",
		link: "https://twitter.com/waveparadigm"
	},
	{
		img: "./img/itchio.png",
		link: "https://waveparadigm.itch.io"
	},
	{
		img: "./img/bandcamp.png",
		link: "https://waveparadigm.bandcamp.com"
	},
	{
		img: "./img/github.png",
		link: "https://github.com/waveparadigm"
	},
	{
		img: "./img/youtube.png",
		link: "https://www.youtube.com/channel/UChEo7pMS9CTI3vCibtoagOA"		
	}
];

games.reverse();

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

function fillBlog() {
	var blog = document.getElementById("blog");
	var htmlString = "";
	for (var i = 0; i < blogEntries.length; i++) {
		htmlString += "<li>\n<div class=\"date\">" + blogEntries[i][0] + "</div> " + blogEntries[i][1] + "\n</li>\n";
	}
	blog.innerHTML = htmlString;
}

function fillSocial() {
	let s = document.getElementById("social");
	let htmlString = "";
	for (let i = 0; i < social.length; i++) {
		htmlString += "<a href=\"" + social[i].link + "\"><img src=\"" + social[i].img + "\" /></a>";
	}
	s.innerHTML = htmlString;
}

function fillGifIndicator() {
	var gifIndicator = document.getElementById("gifIndicator");

	var htmlString = "";
	for (var i = 0; i < myVideos.length; i++) {
		htmlString += "<div class=\"indicator";

		if (i == a) {
			htmlString += " active";
		}

		htmlString += "\" id=\"indicator" + i.toString() + "\"></div>";
	}

	gifIndicator.innerHTML = htmlString;
}

function updateIndicators() {
	for (var i = 0; i < myVideos.length; i++) {
		var ind = document.getElementById("indicator" + i.toString());
		ind.classList.remove("active");

		if (i == a) 
			ind.classList.add("active");
	}

	document.getElementById("gifTitle").innerHTML = myVideos[a][1];
}

function populateGames() {
	let s = "";
	for (let i = 0; i < games.length; i++) {
		let game = games[i];
		s += `
		<article class="game">
			<div class="imagewrapper">
				<img src="${game.image}" />
			</div>
			<section>
				<h2>${game.title}</h2>
				<p>${game.description}</p>

				${formatLinks(game.links)}
			</section>
		</article>
		`
	}
	document.getElementById("games").innerHTML = s;
}

function formatLinks(links) {
	let s = "";
	for (let i = 0; i < links.length; i++) {
		s += `<a href="${links[i][0]}">${links[i][1]}</a>
		`;
	}
	return s;
}