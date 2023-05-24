const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0aa44d0924msh68ebab576e058e7p14e02fjsnd6b22092a898',
		'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com'
	}
};

fetch("https://chess-puzzles.p.rapidapi.com/?themes=%5B%22middlegame%22%2C%22advantage%22%5D&rating=1500&themesType=ALL&playerMoves=4&count=25", options)
.then(res => res.json())
.then(response =>{
    console.log(response)
})
