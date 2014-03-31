
/**
 * Finds common multiplies of number1 and number2 below number max.
 *
 **/
exports.findMultiplesBelow = findMultiplesBelow;
function findMultiplesBelow(max, number1, number2) {
    var multiples = [];
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

		if (r1 < max && !isCommonMultiple(r1, [n1, n2])) {
		    multiples[index] = r1;
            index++;
		}
        if (r2 < max) {
            multiples[index] = r2;
            index++;
        }

        if (r1 >= max && r2 >= max) {
            break;
        }
	}
	return multiples;
}

/**
 * Checks whether number multiply is the common multiply of nubmer1 and number2.
 **/
exports.isCommonMultiple = isCommonMultiple;
function isCommonMultiple(multiple, array) {
    for (var i in array) {
        var current = array[i];
        if (multiple % current != 0) {
            return false;
        }
    }

    return true;
}

/**
 * Builds fibonacci sequence until position.
 **/
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

/**
 * Builds fibonacci sequence less than number.
 **/
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

/**
 * Whether the number n is even.
 **/
exports.isEven = isEven;
function isEven(n) {
    return n % 2 == 0;
}

/**
 * Finds all factors for the number.
 **/
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

/**
 * Whether the number n is prime.
 **/
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

/**
 * Finds all prime factors of number n.
 **/ 
exports.findPrimeFactorsOf = findPrimeFactorsOf;
function findPrimeFactorsOf(n) {
    var primeFactors = [];
    var index = 0;
    if (!isPrime(n)) {
        for (var i = 2; i <= n / 2; i++) {
            if (n % i == 0 && isPrime(i)) {
                primeFactors[index++] = i;
            }
        }
    }
    return primeFactors;
}

/**
 * Find the least common multiple of the given array.
 **/
exports.findLeastCommonMultiple = findLeastCommonMultiple;
function findLeastCommonMultiple(array) {
    var primeFactors = [];
    var index = 0;
    for (var i in array) {
        if ((array[i] != 1) && (!isPrime(array[i]))) {
            var factors = findPrimeFactorsOf(array[i]);
            for (var j in factors) {
                if (!isIn(factors[j], primeFactors)) {
                    primeFactors[index++] = factors[j];
                }
            }
        }
        else {
            if (!isIn(array[i], primeFactors)) {
                primeFactors[index++] = array[i];
            }
        }
    }

    var multiple = 1;
    for (var i in primeFactors) {
        multiple *= primeFactors[i];
    }

    var result = 0;
    outer:
    for (var n = 1; ; n++) {
        result = multiple * n;
        if (isCommonMultiple(result, array)) {
            break outer;
        }
    }
    return result;
}

/**
 * Checks whether the given number n is in the array.
 **/
exports.isIn = isIn;
function isIn(n, array) {
    for(var i in array) {
        if (n == array[i]) {
            return true;
        }
    }
}

/**
 * Finds largest prime factor of number n.
 **/
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

/**
 * Whether the number n is a palindrome, which means a number reads the same both ways.
 **/
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

/**
 * Get the triangular number at position. The position starts from 0;
 **/
exports.triangularNumberAt = triangularNumberAt;
function triangularNumberAt(position) {
    var n = position + 1;
    return n * (n + 1) / 2;
}

/**
 * Adds the array in the array. The array is composed of a series of string. Each string represents a positive integer.
 **/
exports.add = add;
function add(array) {
    var digitLut = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var start = "0";
    var maxLength = 0;
    for (var i in array) {
        maxLength = maxLength < array[i].length ? array[i].length : maxLength;
    }

    var step = 0;
    var index = 0;
    var result = "";
    for (var i = 0; i < maxLength; i++) {
        var sum = 0;
        for (var j in array) {
            var length = array[j].length;
            if (length - 1 - i >= 0) {
                var digit = array[j][length - 1 - i];
                sum += digitLut[digit - start];
            }
        }
        sum += step;
        var current = sum % 10;
        result = current + result;
        step = (sum - current) / 10;
    }

    while (step > 0) {
        var current = step % 10;
        result = current + result;
        step -= current;
        step /= 10;
    }

    return result;
}
