const somma = ()=>{return 10+2}
const prod = ()=>{return 10*2}
const div = ()=>{return 10/2}
const sott = ()=>{return 10-2}

let array = [somma,prod,div,sott]

for(let i=0; i<4;i++){
	console.log(array[i]())
}
