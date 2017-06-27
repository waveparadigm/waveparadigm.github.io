var myGfys = [
	["https://gfycat.com/ifr/AdventurousInfatuatedGoat", "Spherical Saunter (the original)"],
	["https://gfycat.com/ifr/MarvelousSmallDowitcher", "Rig 'er Bigger"], 
	["https://gfycat.com//ifr/RawSpectacularAttwatersprairiechicken", "ThreeDee"],
	["https://gfycat.com/ifr/DismalFamiliarAlaskankleekai", "VRange, a VR Target Range POC"], 
	["https://gfycat.com/ifr/SolidValidHawk", "Memory"],
	["https://gfycat.com/ifr/ConstantUltimateIchthyosaurs", "Tracks"], 
	["https://gfycat.com/ifr/ImportantTatteredAgama", "Meltdown"], 
	["https://gfycat.com/ifr/TerrificDopeyFlyingfish", "Pause"],
	["https://gfycat.com/ifr/WetHoarseAnnelid", "Spherical Saunter M"], 
	["https://gfycat.com/ifr/ElaborateKindlyGoat", "The Adventures of Bean"], 
	["https://gfycat.com/ifr/UnevenHairyBorzoi", "We 2 Guys"], 
	["https://gfycat.com/ifr/IdioticDiligentDassie", "Big Palladium"], 
];

var blogEntries = [
	["2017-5-9", "Finally got a WaveParadigm website up and running! Development is still in progress, and I have a lot to show. Acquisition of the waveparadigm .com domain is ongoing."],
	["2017-6-20", "Added some more gifs and fixed IE support for the site. Got ahold of the @WaveParadigm Twitter handle, though .com remains illustrious. For now the site is at waveparadigm.tk just to give it a shorter name. Big Palladium is in progress plus level design for Spherical Saunters R/M, Pause, and We 2 Guys. Hoo boy."],
];

blogEntries.reverse();

var a = -1;

window.onload = function() {
	a = Math.floor(Math.random() * (myGfys.length - 1));
	

	fillBlog();
	fillGifIndicator();
	nextGfy();
}

function prevGfy() {
	var gfy = document.getElementById("gfy");
	a -= 1;
	if (a < 0)
		a = myGfys.length - 1;
	gfy.src = myGfys[a][0];

	updateIndicators();
}

function nextGfy() {
	var gfy = document.getElementById("gfy");
	a = Math.floor((a + 1) % myGfys.length);
	chosenGfy = myGfys[a][0];
	console.log(a);

	gfy.src = chosenGfy;

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

function fillGifIndicator() {
	var gifIndicator = document.getElementById("gifIndicator");

	var htmlString = "";
	for (var i = 0; i < myGfys.length; i++) {
		htmlString += "<div class=\"indicator";

		if (i == a) {
			htmlString += " active";
		}

		htmlString += "\" id=\"indicator" + i.toString() + "\"></div>";
	}

	gifIndicator.innerHTML = htmlString;
}

function updateIndicators() {
	for (var i = 0; i < myGfys.length; i++) {
		var ind = document.getElementById("indicator" + i.toString());
		ind.classList.remove("active");

		if (i == a) 
			ind.classList.add("active");
	}

	document.getElementById("gifTitle").innerHTML = myGfys[a][1];
}