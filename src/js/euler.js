//var mathjs = require('mathjs');
//var math = mathjs();

function FindMultipliesBelow(max, number1, number2) {
    var multiplies = [];
    var index = 0;
    var n1 = number1;
    var n2 = number2;
    if (n1 > n2) {
        n1 = number2;
        n2 = number1;
    }
	for (var i = 1; ; i++) {
		var r1 = n1 * i;
        var r2 = n2 * i; 

		if (r1 < max && !IsCommonMultiply(r1, n1, n2)) {
		    multiplies[index] = r1;
            index++;
		}
        if (r2 < max) {
            multiplies[index] = r2;
            index++;
        }

        if (r1 >= max && r2 >= max) {
            break;
        }
	}
	return multiplies;
}

function IsCommonMultiply(multiply, number1, number2) {
    return (multiply > number1) && (multiply > number2) && (multiply % number1 == 0) && (multiply % number2 == 0);
}
/**
var multiplies= FindMultipliesBelow(1000, 3, 5);
var result = 0;
for (var i in multiplies) {
    console.log(multiplies[i]);
    result += multiplies[i];
}
console.log(result);
**/
function BuildFibonacci(position) {
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    var index = 2;
    while (index < position) {
        fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
        index++;
    }

    return fibonacci;
}

var index = 2;
var fibo = [];
fibo[0] = 1;
fibo[1] = 1;
function NextFiboNumber() {
    fibo[index] = fibo[index - 1] + fibo[index - 2];
    var result = fibo[index];
    index++;
    return result;
}

var next;
var result = 0;
while ((next = NextFiboNumber()) < 4000000) {
    console.log(next);
    if (next % 2 == 0) {
        result += next;
    }
}
console.log("sum of the even fibonacci numbers: " + result);
