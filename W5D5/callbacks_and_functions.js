// // Simple Timeout
// window.setTimeout(function () {
//   alert('HAMMERTIME');
// }, 5000);


// // Timeout Plus Closure
// function hammerTime (time) {
//   window.setTimeout( function () {
//     alert(`${time} is HAMMERTIME`);
//   }, time);
// }

// Some tea? Some Bisbuits?
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// reader.question("Would you like some tea?", function (response) {
//   console.log(response);
//
//   reader.close();
// });

function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    reader.question('Would you like some biscuits?', (res2) => {
      first = res;
      console.log(`You replied ${res}.`);
      second = res;
      console.log(`You replied ${res}.`);

      const firstRes = (first === 'yes') ? 'do' : 'don\'t';
      const secondRes = (second === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });



}

teaAndBiscuits();
