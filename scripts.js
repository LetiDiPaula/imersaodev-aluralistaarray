var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];

listaFilmes.push("Harry Potter 3");
listaFilmes.push("Harry Potter 4");

console.log(listaFilmes.length);

for (var indice = 0; indice < listaFilmes.length; indice++) {
	document.write("<p>" + listaFilmes[indice] + "</p>");
}
