let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
// console.log(one, two, three, four);

function titleOne() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      one.style.visibility = "visible";
      resolve(); // Resolve the promise here
    }, 1000);
  });
}
function titleTwo() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      two.style.visibility = "visible";
      resolve(); // Resolve the promise here
    }, 1000);
  });
}
function titleThree() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      three.style.visibility = "visible";
      resolve(); // Resolve the promise here
    }, 1000);
  });
}
function titleFour() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      four.style.visibility = "visible";
      resolve(); // Resolve the promise here
    }, 1000);
  });
}

async function showAll() {
  await titleOne();
  await titleTwo();
  await titleThree();
  await titleFour();
}

showAll();

//////////////////////////////////////////
// another way async/await
//////////////////////////////////////////

// async function showAllElements() {
//   await new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       one.style.visibility = "visible";
//       resolve(); // Resolve the promise here
//     }, 1000);
//   });

//   await new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       two.style.visibility = "visible";
//       resolve(); // Resolve the promise here
//     }, 1000);
//   });

//   await new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       three.style.visibility = "visible";
//       resolve(); // Resolve the promise here
//     }, 1000);
//   });

//   setTimeout(() => {
//     four.style.visibility = "visible";
//     resolve(); // Resolve the promise here
//   }, 1000);
// }

// showAllElements();
