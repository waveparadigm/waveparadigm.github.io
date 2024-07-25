let games = [
	{
		title: "Tracks",
		shortname: "tracks",
		date: "Fall 2016",
		video: "./videos/tracks.webm",
		description: "Solve moral quandaries in this on-rails experience.",
		links: [["https://waveparadigm.itch.io/tracks", "itch.io"], ["http://waveparadigm.com/tracks", "Play Online"]]
	},
	{
		title: "Meltdown",
		shortname: "meltdown",
		date: "Spring 2017",
		video: "./videos/meltdown.webm",
		description: "Experience the intricacies of Nuclear Reactor operation. Made in conjunction with <a href=\"http://pilot.dev\">Pilot</a> and Professor Alex Wellerstein, Meltdown aims to teach a realistic story about the events that lead up to nuclear reactor meltdown.",
		links: [["https://waveparadigm.itch.io/meltdown", "itch.io"]]
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
		title: "Pause",
		shortname: "pause",
		date: "2016 - 2018",
		video: "./videos/pause.webm",
		description: "Pause and Unpause the world! Freeze time to guide object(s) to the end of levels with many moving pieces.<br /><br />Pause first saw life as a First Person Puzzle game, but eventually translated to a one-tap mobile experience. It's been put on the backburner for now, but I hope to one day return to finish it!",
		links: [["https://waveparadigm.itch.io/pause", "itch.io"], ["http://waveparadigm.com/pause", "Play Online"], ["https://play.google.com/apps/testing/com.WaveParadigm.Pause17", "Google Play"]]
	},
	{
		title: "Engineer Arena",
		shortname: "engineerarena",
		date: "2018 - 2019",
		video: "./videos/engineerarena.webm",
		description: "A frantic local-multiplayer splitscreen FPS where you upgrade on the fly! Take on your friends in the arena and come out on top.<br /><br />Engineer Arena was built with a team of 7 people over a year of development time, and was the first game I released on Steam!",
		links: [["https://store.steampowered.com/app/1118950/Engineer_Arena/", "Steam"], ["https://waveparadigm.itch.io/engineer-arena/", "itch.io"],
				["https://twitter.com/EngineerArena", "Twitter"], ["https://waveparadigm.com/engineerarena/presskit/", "PressKit()"]]
	},
	{
		title: "Get That Bread",
		shortname: "getthatbread",
		date: "Summer 2022",
		video: "./videos/getthatbread.webm",
		description: "A board game RPG about a park goose in search of some delicious bread.",
		links: [["https://waveparadigm.itch.io/get-that-bread", "itch.io"]]
	},
	{
		title: "Mr. Puffle's Day Out",
		shortname: "puffle",
		date: "Summer 2023",
		video: "./videos/puffle.webm",
		description: "After a million dog years of rain (but who's counting?), the sun finally shines on a local neighborhood. One local dog, Mr. Puffles, takes his owner for walkies.",
		links: [["https://alexmassenzio.itch.io/mr-puffles-day-out", "itch.io"]]
	},
	{
		title: "Pizza Time",
		shortname: "pizzatime",
		date: "Summer 2020",
		video: "./videos/pizzatime.webm",
		description: "An online competitive cooking game - compete to fill orders the fastest! Shred cheese, slice pepperoni, pour sauce, and bake as you rush to fill the orders of your endlessly hungry patrons! The team with the most money at the end of the round wins!",
		links: [["https://www.coregames.com/games/ea2128/pizza-time", "Play on CoreGames"]]
	},
	{
		title: "Sand Surfer",
		shortname: "sandsurfer",
		date: "Winter 2020",
		video: "./videos/sandsurfer.webm",
		description: "Drift through the sands of a large desert, racing against up to 10 online players, avoiding tornadoes and using powerups to collect shining beacons and win the round!",
		links: [["https://www.coregames.com/games/457f9d/sand-surfer", "Play on CoreGames"]]
	},
	{
		title: "Infinity Arena",
		shortname: "infinityarena",
		date: "Spring 2021",
		video: "./videos/infinityarena.webm",
		description: "Winner of the Core Invitational Game Jam's 'Best Shooter' category - Infinity Arena is an online sci-fi FPS featuring over 80 combinations of FFA and team-based modes across a variety of maps, inspired by classic sci-fi shooters!",
		links: [["https://www.coregames.com/games/c565ef/infinity-arena", "Play on CoreGames"]]
	},
	{
		title: "Roll 'em",
		shortname: "rollem",
		date: "2020 - 2022",
		video: "./videos/rollem.webm",
		description: "Race marbles through dozens of courses in up to 16-player real time online multiplayer - compete worldwide for speedrun leaderboard times, earn gems and show off fancy marble skins, hats, and trails!",
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
function getGames() {
	return games;
}

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