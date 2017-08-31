// Phase 1

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping1(); // in block, in block

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping2(); // in block, out of block

// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// mysteryScoping3(); // SyntaxError

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping4(); // in block, out of block

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
//
// mysteryScoping5(); // SyntaxError


// Write a function that takes three strings - a verb, an adjective, and
// a noun - uppercases and interpolates them into the sentence "We shall
// VERB the ADJECTIVE NOUN". Use ES6 template literals.
function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}


// isSubString
function isSubstring(string, substring) {
  return string.includes(substring);
}

function fizzBuzz(array) {
  const fizzBuzzed = [];

  array.forEach( el => {
    if ((el % 3 === 0) && (el % 5 === 0)) {
      fizzBuzzed.push(el);
    }
  })

  return fizzBuzzed;
}

function isPrime (n) {
  if (n < 2) { return false; }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNPrimes (n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }

  return sum;
}
