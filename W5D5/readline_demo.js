// Intro to Callbacks
// Node I/O is Async

// First example
//
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
// });
//
// console.log("Last program line");


// // One final note: note that our program didn't end when it hits the end
// // of the code. It patiently waited for our input. That's because Node
// // understands that there is an outstanding request for user input. Node
// // knows that the program may not be done yet: anything could happen in
// // response to that input. So for that reason, Node doesn't terminate
// // the program just because we hit the end of the source file. If we
// // want to stop accepting input, we have to explicitly call reader.close():
// // const readline = require('readline');
//
// // Close example
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
//
//   // Close the reader, which will allow the program to end because it
//   // is no longer waiting for any events.
//   reader.close();
// });
//
// console.log("Last program line");


// // Example #1 (More developed)
//
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function addTwoNumbers(callback) {
//   // Notice how nowhere do I return anything here! You never return in
//   // async code. Since the caller will not wait for the result, you
//   // can't return anything to them.
//
//   reader.question("Enter #1: ", function (numString1) {
//     reader.question("Enter #2: ", function (numString2) {
//       const num1 = parseInt(numString1);
//       const num2 = parseInt(numString2);
//
//       callback(num1 + num2);
//     });
//   });
// }
//
// addTwoNumbers(function (result) {
//   console.log(`The result is: ${result}`);
//   reader.close();
// });


// Final Example\
// When we need to do a loop in code that is asynchronous, we can
// modify the trick from above:


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdTimesAsync (numTimes, fnAsync, completionFn) {
  let i = 0;

  function loopStep () {
    if (i == numTimes) {
      // we're done, stop looping
      completionFn();
      return;
    }

    i++;

    // fnAsync is an asynchronous function that takes a callback (in this case loopStep)
    fnAsync(loopStep);
  }

  loopStep();
}

function addTwoNumbersAsync(callback) {
  reader.question("Enter #1: ", function (numString1) {
    reader.question("Enter #2: ", function (numString2) {
      const num1 = parseInt(numString1);
      const num2 = parseInt(numString2);

      callback(num1 + num2);
    });
  });
}

let totalSum = 0;

function addTwoNumbersAndIncrementAsync(callback) {
  addTwoNumbersAsync(function (result) {
    totalSum += result;

    console.log(`Sum: ${result}`);
    console.log(`Total Sum: ${totalSum}`);

    callback();
  });
}

function outputResultAndCloseReader () {
  console.log(`All done! Total Sum: ${totalSum}`);
  reader.close();
}

absurdTimesAsync(3, addTwoNumbersAndIncrementAsync, outputResultAndCloseReader);
