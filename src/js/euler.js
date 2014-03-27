
exports.findMultipliesBelow = findMultipliesBelow;

function findMultipliesBelow(max, number1, number2) {
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

		if (r1 < max && !isCommonMultiply(r1, n1, n2)) {
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

exports.isCommonMultiply = isCommonMultiply;
function isCommonMultiply(multiply, number1, number2) {
    return (multiply > number1) && (multiply > number2) && (multiply % number1 == 0) && (multiply % number2 == 0);
}

exports.buildFibonacci = buildFibonacci;
function buildFibonacci(position) {
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

exports.buildFiboSequenceLessThan = buildFiboSequenceLessThan;
function buildFiboSequenceLessThan(n) {
    var index = 2;
    var fibo = [];
    fibo[0] = 1;
    fibo[1] = 1;
    var current = fibo[1];
    while ((current = fibo[index - 1] + fibo[index - 2]) < n) {
        fibo[index] = current;
        index++;
    }
    return fibo;
}

exports.isEven = isEven;
function isEven(n) {
    return n % 2 == 0;
}


exports.findFactorsOf = findFactorsOf;
function findFactorsOf(number) {
    var factors = [];
    var index = 0;
    var sqrt = Math.floor(Math.sqrt(number));
    for (var i = 1; i <= sqrt; i++) {
        if (number % i == 0) {
            factors[index++] = i;
            var theOther = number / i;
            if (theOther != i) {
                factors[index++] = theOther;
            }
        }
    }
    return factors;
}

exports.isPrime = isPrime;
function isPrime(n) {
    if (n == 1) {
        return false;
    }
    var sqrt = Math.sqrt(n);
    for (var i = 2; i <= sqrt; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

exports.findLargestPrimeFactorOf = findLargestPrimeFactorOf;
function findLargestPrimeFactorOf(n) {
    var f = findFactorsOf(n);
    var primes = [];
    var index = 0;
    for (var i in f) {
        if (isPrime(f[i])) {
            primes[index++] = f[i];
        }
    }

    var largestPrime = Math.max.apply(Math, primes);
    return largestPrime;
}

exports.isPalindrome = isPalindrome;
function isPalindrome(n) {
    var s = "" + n;
    var count = s.length;
    for (var i = 0; i < count / 2; i++) {
        if (s[i] != s[count - 1 - i]) {
            return false;
        }
    }
    return true;
}
