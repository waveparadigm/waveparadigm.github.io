var myGfys = [
	"https://gfycat.com/ifr/WetHoarseAnnelid", //Spherical Saunter M
	"https://gfycat.com/ifr/UnevenHairyBorzoi", //We 2 Guys (needs update)
	"https://gfycat.com/ifr/TerrificDopeyFlyingfish", //Pause
	"https://gfycat.com/ifr/ElaborateKindlyGoat", //Adventures of Bean
	"https://gfycat.com/ifr/ConstantUltimateIchthyosaurs", //Tracks
	"https://gfycat.com/ifr/ImportantTatteredAgama", //Meltdown
	"https://gfycat.com/ifr/IdioticDiligentDassie", //Big Palladium
	"https://gfycat.com/ifr/DismalFamiliarAlaskankleekai", //VRange
	"https://gfycat.com/ifr/MarvelousSmallDowitcher", //Rig 'er Bigger
];

var a = -1;

window.onload = function() {
	a = Math.random() * (myGfys.length - 1);
	newGfy();
}

function newGfy() {
	var gfy = document.getElementById("gfy");
	a = Math.floor((a + 1) % myGfys.length);
	chosenGfy = myGfys[a];
	console.log(a);

	gfy.src = chosenGfy;
}