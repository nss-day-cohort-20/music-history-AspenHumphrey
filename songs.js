var songsDiv = document.getElementById("article")

  songs = [
    {
      "title": "Starboy",
      "artist": "The Weeknd",
      "album": "Starboy"
    },
    {
      "title": "Doses and Mimosas",
      "artist": "Cherub",
      "album": "Year of the Caprese"
    },
    {
      "title": "By the Way",
      "artist": "Red Hot Chili Peppers",
      "album": "Californication"
    },
    {
      "title": "Moving On",
      "artist": "Marshmellow",
      "album": "Moving On"
    },
    {
      "title": "The Wolf",
      "artist": "Mumford and Sons",
      "album": "Wilder Mind"
    }
  ]

songs.forEach(function(song) {
  songsDiv.innerHTML += `<h2>${song.title}</h2> <p>${song.artist} | ${song.album}</p>`
});




// songs[].title
// songs[].artist
// songs[].album