

var games = [
	{
		title: "Big Palladium",
		description: "A video-boardgame about taking financial risks. Do you bet big on the Palladium stock market, or do you stick to slow, steady growth? See which strategy will pan out in short, exciting game sessions. 1-4 players. Summer 2017.",
		image: "img/games/bpd.png",
		links: [["https://waveparadigm.itch.io/big-palladium", "itch.io"]]
	},
	{
		title: "Pause",
		description: "Pause and Unpause the world! Freeze time to guide an object to the end of 30 levels. Winter 2016.",
		image: "img/games/pause.png",
		links: [["https://waveparadigm.itch.io/pause", "itch.io"], ["http://adamgincel.com/pause", "Play Online"], ["https://play.google.com/apps/testing/com.WaveParadigm.Pause16", "Google Play"]]
	},
	{
		title: "We 2 Guys",
		description: "A sequel to the co-op masocore platformer made by myself and Alex Massenzio (<a href=\"alexmassenzio.github.io\">website</a>) for SGDC's Game Jam III. Redone in GameMaker: Studio and designed to be used for Intermediate GMS tutorials, the sequel is coming along very nicely. Summer 2017.",
		image: "img/games/w2g.png",
		links: [["", "Unavailable"]]
	},
	{
		title: "Spherical Saunter R/M",
		description: "Two sequels to Spherical Saunter, a rolling game inspired by Kororinpa. R is very similar to the original -- you roll, jump, and collect coins to reach the coal. M is similar as well, but instead of directly rolling the ball, you tilt the course. Level design and mechanics differ for this. Summer 2017.",
		image: "img/games/ssr.png",
		links: [["", "Unavailable"]]
	},
	{
		title: "The Adventures of Bean",
		description: "A princess seeks treasure in a peaceful forest. Made for SGDC's Game Jam XII. Art, Characters, and Logo by Ari Fiekowsky. April 2017.",
		image: "img/games/taob.png",
		links: [["https://waveparadigm.itch.io/the-adventures-of-bean", "itch.io"]]
	},
	{
		title: "Meltdown",
		description: "Experience the intricacies of Nuclear Reactor operation. Made in conjunction with James Romph (<a href=\"http://tehpilot.com\">website</a>) and Professor Alex Wellerstein, Meltdown aims to teach a realistic story about the events that lead up to nuclear reactor meltdown. Fall 2016.",
		image: "img/games/meltdown.png",
		links: [["https://waveparadigm.itch.io/meltdown", "itch.io"]]
	},
	{
		title: "Tracks",
		description: "Solve moral quandaries in this on-rails experience. Experience a philosophical dillema with Candice, a newly hired trolley conductor. Art and Characters by Ari Fiekowsky.",
		image: "img/games/tracks.png",
		links: [["https://waveparadigm.itch.io/tracks", "itch.io"], ["http://adamgincel.com/tracks", "Play Online"]]
	},
	{
		title: "Aggressive Expansion",
		description: "Rocket-car racing! Race a friend to the end of a cityscape with your rocket-powered cars. Made together with Kevin Quigley (<a href=\"http://kevinquigley.net\">website</a>) for SGDC's Game Jam V. Fall 2015.",
		image: "img/games/ae.png",
		links: [["https://waveparadigm.itch.io/aggressive-expansion", "itch.io"]]
	},
	{
		title: "Memory",
		description: "Live through the memorysort experiment and explore three different platforming mechanics. Be careful not to get lost in your memories. Spring 2016.",
		image: "img/games/memory.png",
		links: [["https://waveparadigm.itch.io/memory", "itch.io"]]
	},
	{
		title: "Maguffin",
		description: "Extract a magical Maguffin from hostile territory with up to 4 friends. Kill enemies, avoid arrows, and level up as you make your way through this week-long game jam game. Fall 2015.",
		image: "img/games/maguffin.png",
		links: [["https://waveparadigm.itch.io/maguffin", "itch.io"]]
	},
	{
		title: "Aggressive Expansion",
		description: "A 1v1 racing game -- race a friend to the end of the level. Xbox controllers highly recommended. Fall 2015.",
		image: "img/games/ae.png",
		links: [["https://waveparadigm.itch.io/aggressive-expansion", "itch.io"]]
	},
	{
		title: "ThreeDee",
		description: "A callback to the N64 collectathon platformer. Incomplete, but with a variety of mechanics to explore with. Summer 2015.",
		image: "img/games/threedee.png",
		links: [["https://hydegriffen.itch.io/threedee", "itch.io"]]
	},
	{
		title: "Rig 'er Bigger: Stupid Trucks",
		description: "A fan sequel to Big Rigs: Over the Road Racing. Play up to 4-player split screen across 4 maps. Will you go forwards, or backwards? Remember, if you're not first, you're last!",
		image: "img/games/rig.png",
		links: [["https://sgdc.itch.io/rig-er-bigger", "itch.io"]]
	},
	{
		title: "Impulse",
		description: "Equipped with up to 2 hexagonal guns, navigate challenging first person platforming puzzles as you fling yourself through the skies -- be sure to turn around to see where you're going!",
		image: "img/games/impulse.png",
		links: [["https://waveparadigm.itch.io/impulse", "itch.io"]]
	},
	{
		title: "We Guys",
		description: "A co-op platformer inspired by I Wanna Be the Guy created for SGDC's Game Jam III. Built to be horrifically difficult, we have seen pairs of players threaten all sorts of things on each other and on us upon playing it. Made with Alex Massenzio. Spring 2015.",
		image: "img/games/weguys.png",
		links: [["https://waveparadigm.itch.io/we-guys", "itch.io"]]
	},
	{
		title: "Spherical Saunter",
		description: "Created in early 2015, Spherical Saunter is a 3D rolling puzzle game inspired by Super Monkey Ball and Kororinpa: Marble Mania. Roll through over 20 courses alone or competitively, collect all of the coins, and reach the goal!",
		image: "img/games/spherical.png",
		links: [["https://waveparadigm.itch.io/spherical-saunter", "itch.io"]]
	},
]






window.onload = function() {
	populateList();
}


function populateList() {
	var list = document.getElementById("gamesList");

	var htmlString = "";

	for (var i = 0; i < games.length; i++) {
		htmlString += "<div class=\"game\">\n";
		htmlString += "<div class=\"imagewrapper\">\n";
		htmlString += "<img src=\"" + games[i].image + "\" /> </div>\n<section>\n";
		htmlString += "<h1>" + games[i].title + "</h1>\n";
		htmlString += "<p>" + games[i].description + "</p>\n\n";

		for (var j = 0; j < games[i].links.length; j++) {
			htmlString += "<a href=\"" + games[i].links[j][0] + "\">" + games[i].links[j][1] + "</a> ";
		}

		htmlString += "\n</section>\n</div>"
	}

	list.innerHTML = htmlString;

}