var euler = require('./euler');

/**
 * Multiples of 3 and 5
 * Problem 1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 **/
function p1() {
    var multiples= euler.findMultiplesBelow(1000, 3, 5);
    var result = 0;
    for (var i in multiples) {
        result += multiples[i];
    }
    console.log(result);
}

/**
 * Even Fibonacci numbers
 * Problem 2
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 **/
function p2() {
    var fibo = euler.buildFiboSequenceLessThan(4000000);
    var result = 0;
    for (var i in fibo) {
        if (euler.isEven(fibo[i])) {
            result += fibo[i];
        }
    }
    console.log(result);
}

/** 
 * Largest prime factor
 * Problem 3
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 **/
function p3() {
    var largest = euler.findLargestPrimeFactorOf(600851475143);
    console.log(largest);
}

/**
 * Largest palindrome product
 * Problem 4
 * 
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 �� 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 **/
function p4() {
    var largest = 0;
    iloop:
    for (var i = 999; i >= 100; i--) {
        jloop:
        for (var j = 999; j >= 100; j--) {
            var multiply = i * j;
            var result = euler.isPalindrome(multiply);
            if (result) {
                if (largest < multiply) {
                    largest = multiply;
                    break jloop;
                }
            }
            if (multiply < largest) { 
                break jloop;
            }
        }
    }
    console.log("the largest palindrome: " + largest);
}

/**
 * Smallest multiple
 * Problem 5
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 **/
function p5() {
    var array = [];
    for (var i = 0; i < 20; i++) {
        array[i] = i + 1;
    }
    var result = euler.findLeastCommonMultiple(array);
    console.log(result);
}

/**
 * Sum square difference
 * Problem 6
 * 
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * 
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 552 = 3025
 * 
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 ? 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 **/
function p6() {
    var squareSum = 1/6 * 100 * (100 + 1) * (2 * 100 + 1);
    var sumSquare = 5050 * 5050;
    console.log(sumSquare - squareSum);
}

/**
 * 10001st prime
 * Problem 7
 * 
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * 
 * What is the 10 001st prime number?
 **/
function p7() {
    var index = 0;
    var result = 0;
    for (var n = 2; ; n++) {
        if (euler.isPrime(n)) {
            index++;
        }
        if (index == 10001) {
            result = n;
            break;
        }
    }
    console.log(n);
}

/**
 * Largest product in a series
 * Problem 8
 * 
 * Find the greatest product of five consecutive digits in the 1000-digit number.
 * 
 * 73167176531330624919225119674426574742355349194934
 * 96983520312774506326239578318016984801869478851843
 * 85861560789112949495459501737958331952853208805511
 * 12540698747158523863050715693290963295227443043557
 * 66896648950445244523161731856403098711121722383113
 * 62229893423380308135336276614282806444486645238749
 * 30358907296290491560440772390713810515859307960866
 * 70172427121883998797908792274921901699720888093776
 * 65727333001053367881220235421809751254540594752243
 * 52584907711670556013604839586446706324415722155397
 * 53697817977846174064955149290862569321978468622482
 * 83972241375657056057490261407972968652414535100474
 * 82166370484403199890008895243450658541227588666881
 * 16427171479924442928230863465674813919123162824586
 * 17866458359124566529476545682848912883142607690042
 * 24219022671055626321111109370544217506941658960408
 * 07198403850962455444362981230987879927244284909188
 * 84580156166097919133875499200524063689912560717606
 * 05886116467109405077541002256983155200055935729725
 * 71636269561882670428252483600823257530420752963450
 **/
function p8() {
    var input = 
        "73167176531330624919225119674426574742355349194934"+
        "96983520312774506326239578318016984801869478851843"+
        "85861560789112949495459501737958331952853208805511"+
        "12540698747158523863050715693290963295227443043557"+
        "66896648950445244523161731856403098711121722383113"+
        "62229893423380308135336276614282806444486645238749"+
        "30358907296290491560440772390713810515859307960866"+
        "70172427121883998797908792274921901699720888093776"+
        "65727333001053367881220235421809751254540594752243"+
        "52584907711670556013604839586446706324415722155397"+
        "53697817977846174064955149290862569321978468622482"+
        "83972241375657056057490261407972968652414535100474"+
        "82166370484403199890008895243450658541227588666881"+
        "16427171479924442928230863465674813919123162824586"+
        "17866458359124566529476545682848912883142607690042"+
        "24219022671055626321111109370544217506941658960408"+
        "07198403850962455444362981230987879927244284909188"+
        "84580156166097919133875499200524063689912560717606"+
        "05886116467109405077541002256983155200055935729725";
    var result = 0;
    for (var i = 0; i < input.length - 4; i++) {
        var product = 1;
        for (var j = 0; j < 5; j++) {
            product *= input[i + j];
        }
        console.log(product);
        if (result < product) {
            result = product;
        }
    }
    console.log("result: " + result);

}

/**
 * Special Pythagorean triplet
 * Problem 9
 * 
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a^2 + b^2 = c^2
 * 
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 **/
function p9() {
    outer:
    for (var c = 6; ; c++) {
        for (var b = c - 1; b > 4; b--) {
            for (var a = b - 1; a > 3; a--) {
                if (a * a + b * b == c * c) {
                    var sum = a + b + c;
                    if (sum == 1000) {
                        console.log("result: " + a * b * c);
                        break outer;
                    }
                }
            }
        }
    }
}

/**
 * Summation of primes
 * Problem 10
 * 
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 * Find the sum of all the primes below two million.
 **/
function p10() {
    var result = 0;
    for (var n = 2; n < 2000000; n++) {
        if (euler.isPrime(n)) {
            result += n;
        }
    }
    console.log(result);
}

p10();
