

const arg1 = parseInt(process.argv[2]);
const operaz = process.argv[3];
const arg2 = parseInt(process.argv[4]);
let result;
switch(operaz){
    case "+":
        result = arg1+arg2;
        break;
    case "-":
        result = arg1 - arg2;
        break;
    case "x":
        result = arg1*arg2;
        break;
    case "/":
        result = arg1/arg2;
        break;
}

console.log(result);


