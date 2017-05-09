
window.onload = function() {
	newGfy();
}

function newGfy() {
	var gfy = document.getElementById("gfy");
	var chosenGfy = gfy.src;
	var myGfys = [
		"https://gfycat.com/ifr/RegularAltruisticHarrierhawk",
		"https://gfycat.com/ifr/UnevenHairyBorzoi",
		"https://gfycat.com/ifr/ExhaustedCircularAoudad",
		"https://gfycat.com/ifr/ColorfulKindheartedBeardedcollie",
		"https://gfycat.com/ifr/ConstantUltimateIchthyosaurs",
		"https://gfycat.com/ifr/ImportantTatteredAgama",
	];
	while (chosenGfy == gfy.src) {
		chosenGfy = myGfys[Math.floor(Math.random() * myGfys.length)];
	}
	gfy.src = chosenGfy;
}