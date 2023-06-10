let games = [
	{
		title: "Memory",
		shortname: "memory",
		date: "Spring 2016",
		video: "./videos/memory.webm",
		description: "Live through the memorysort experiment and explore three different platforming mechanics.<br /><br />This First Person Puzzle/Platforming game was the culmination and combination of three different earlier projects of mine - Ethereal Escape, Impulse, and Pause - and combined their mechanics in fun and interesting ways. It was the winner of the Stevens Game Development Club's \"Game Jam VII\"!",
		links: [["https://waveparadigm.itch.io/memory", "itch.io"]]
	},
	{
		title: "Tracks",
		shortname: "tracks",
		date: "Fall 2016",
		video: "./videos/tracks.webm",
		description: "Solve moral quandaries in this on-rails experience.<br /><br />Tracks was built in GameMaker: Studio and saw a surprising surge in online plays after its release - around 5000 or so!",
		links: [["https://waveparadigm.itch.io/tracks", "itch.io"], ["http://waveparadigm.com/tracks", "Play Online"]]
	},
	{
		title: "Meltdown",
		shortname: "meltdown",
		date: "Spring 2017",
		video: "./videos/meltdown.webm",
		description: "Experience the intricacies of Nuclear Reactor operation. Made in conjunction with James Romph (<a href=\"http://pilot.dev\">website</a>) and Professor Alex Wellerstein, Meltdown aims to teach a realistic story about the events that lead up to nuclear reactor meltdown.",
		links: [["https://waveparadigm.itch.io/meltdown", "itch.io"]]
	},
	{
		title: "Pause",
		shortname: "pause",
		date: "2016 - 2018",
		video: "./videos/pause.webm",
		description: "Pause and Unpause the world! Freeze time to guide object(s) to the end of levels with many moving pieces.<br /><br />Pause first saw life as a First Person Puzzle game, but eventually translated to a one-tap mobile experience. It's been put on the backburner for now, but I hope to one day return to finish it!",
		links: [["https://waveparadigm.itch.io/pause", "itch.io"], ["http://waveparadigm.com/pause", "Play Online"], ["https://play.google.com/apps/testing/com.WaveParadigm.Pause17", "Google Play"]]
	},
	{
		title: "Tilt 'em",
		shortname: "tiltem",
		date: "2017 - 2019",
		video: "./videos/sphericalsaunterm.webm",
		description: "Inspired by rolling legends before it, tilt the world and possess different objects in this arcade platforming experience!<br /><br />Tilt 'em first saw life as \"Spherical Saunter R\", a complete rebuild and enhancement of the original Spherical Saunter. Once I learned how create that stage tilt effect, I branched the project off into \"Spherical Saunter M\". Finally, once possessing many objects was added as a mechanic, the game was re-branded to \"Tilt 'em\". Unfortunately, it is another project which has been placed on the backburner in favor of newer endeavors.",
		links: [["https://waveparadigm.itch.io/spherical-saunter-m", "itch.io"]]
	},
	{
		title: "Wind Slime",
		shortname: "windslime",
		date: "Fall 2018",
		video: "./videos/windslime.webm",
		description: "The roaming spirit of a once-great wind mage finds a home in a small, unassuming mountain slime. He tasks himself with climbing to the top of the mountain, harnessing the power of the mountain's mana crystals to use a small fraction of his former magic, manipulating the endless blizzard to guide him up the hazardous slope.<br/ ><br />Wind Slime was created for the 2018 Kenney Game Jam, and was a top contender!",
		links: [["https://waveparadigm.itch.io/wind-slime", "itch.io"]]
	},
	{
		title: "Engineer Arena",
		shortname: "engineerarena",
		date: "2018 - 2019",
		video: "./videos/engineerarena.webm",
		description: "A frantic local-multiplayer splitscreen FPS where you upgrade on the fly! Take on your friends in the arena and come out on top.<br /><br />Engineer Arena was built with a team of 7 people over a year of development time, and was the first game I released on Steam!",
		links: [["https://store.steampowered.com/app/1118950/Engineer_Arena/", "Steam"], ["https://waveparadigm.itch.io/engineer-arena/", "itch.io"],
				["https://waveparadigm.com/engineerarena/", "Site"], ["https://twitter.com/EngineerArena", "Twitter"], ["https://waveparadigm.com/engineerarena/presskit/", "PressKit()"]]
	},
	{
		title: "Roll 'em",
		shortname: "rollem",
		date: "2020 - Present",
		video: "./videos/rollem.webm",
		description: "My first big game on Core! Up to 16 players race marbles through dozens of courses in real time - compete worldwide for speedrun leaderboard times, earn gems and show off fancy marble skins, hats, and trails!",
		links: [["https://www.coregames.com/games/b4b9db/roll-em", "Play on CoreGames"]]
	},
	{
		title: "Slime 64",
		shortname: "slime64",
		date: "2019 - Present",
		video: "./videos/slime64.webm",
		description: "A 3D collectathon platformer inspired by retro classics. Journey around the world as members of the four Slime societies: Earth, Air, Water, and Fire. Help them come together to save their world, while collecting everything they possibly can along the way.",
		links: [["https://twitter.com/Slime_64", "Twitter"], ["https://slime64.com", "Steam"], ["https://waveparadigm.com/slime64-discord", "Discord"]]
	}
];

games.reverse();

let a = -1;
let vid = null;

window.onload = function() {
	vid = document.getElementById("vid");
	if (window.location.hash) {
		this.setGame(window.location.hash.substr(1));
	} else {
		this.setGame("slime64");
	}
}

function nextGfy() {
	a = Math.floor((a + 1) % myVideos.length);
	chosenGfy = myVideos[a][0];

	vid.src = chosenGfy;
	vid.load();
	vid.play();

	updateIndicators();
}

function setVideo(src) {
	if (src) {
		vid.src = src;
		vid.load();
		vid.play();
	}
}

function populateGames() {
	let s = "";
	for (let i = 0; i < games.length; i++) {
		let game = games[i];
		s += `<a href="#${game.shortname}" onclick="setGame('${game.shortname}')"><li>${game.title}</li></a>
		`;
	}
	document.getElementById("gamesList").innerHTML = s;
}

function formatLinks(links) {
	let s = "";
	for (let i = 0; i < links.length; i++) {
		s += `<li><a href="${links[i][0]}">${links[i][1]}</a></li>
		`;
	}
	return s;
}

function setGame(shortname) {
	let game = null;
	for (let i = 0; i < games.length; i++) {
		if (games[i].shortname == shortname) {
			game = games[i];
		}
	}

	if (!game) {
		return;
	}

	document.getElementById("mainTitle").innerHTML = game.title;
	document.getElementById("mainDate").innerHTML = game.date;

	setVideo(game.video);

	document.getElementById("mainLinks").innerHTML = formatLinks(game.links);
	document.getElementById("mainDescription").innerHTML = game.description;
}