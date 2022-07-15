
function generador(){
	let who=["the dog","my grandma","his turtle", "my bird"];
	let action=["ate","peed","crushed","broke"];
	let what=["my homework", "the keys", "the car"];
	let when=["before the class","right on time","when i finished","during my lunch", "while i was praying"];
	let excusas=[who,action,what,when];
	console.log(excusas);

	excusas= excusas.map(todasExcusas=>{
		let numAleatorio=Math.floor(Math.random()*(todasExcusas.length-1));
		console.log(numAleatorio);
		return todasExcusas[numAleatorio];
	});

	let armar=excusas.join(" ");

	let mostrar=document.getElementById("frase");

	mostrar.innerText=armar;
}

window.addEventListener("DOMContentLoaded",generador());