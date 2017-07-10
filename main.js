console.log("first line in js file", Date.now());

let newReqest = new XMLHttpRequest();
console.log("newReqest",newReqest);

function runWhenError() {
	console.log("an error has occored");
}


function runWhenLoaded() {
	console.log("event.target", event.target);
	var data = JSON.parse(event.target.responseText);
	console.log("data", data );
	outputSongs(data.songs);
}



newReqest.addEventListener("load", runWhenLoaded);
newReqest.addEventListener("error", runWhenError);




newReqest.open("GET", "songs.json");
newReqest.send();

function outputSongs(songsArry){
	let songslist = document.getElementById("songs");
	songsArry.forEach(function(song){
		console.log("song title",song.title);
		songslist.innerHTML += `<h2>${song.title}</h2>`
		songslist.innerHTML += `<p>${song.artist}</p>`
		songslist.innerHTML += `<p>${song.album}</p>`
	});
}


console.log("last line in js file", Date.now() );