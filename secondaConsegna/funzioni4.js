const operazioni = {
	descrizione : "oggetto operazioni",
	somma : (a,b) => a+b,
	sottrazione : (a,b) => a-b,
	divisione : (a,b) => a/b,
	moltiplicazione : (a,b) => a*b
}

console.log(operazioni.descrizione)
console.log(operazioni.somma(100,100))
console.log(operazioni.divisione(100,5))
console.log(operazioni.sottrazione(100,7))
console.log(operazioni.moltiplicazione(5,5))
