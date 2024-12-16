let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

// console.log(one, two, three, four);

///////////////////////////////////////////////
// promises chain
///////////////////////////////////////////////
function titleOne() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      one.style.visibility = "visible";
      resolve(); // Resolve the promise here
    }, 1000);
  });
}

titleOne()
  .then(() => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        two.style.visibility = "visible";
        resolve(); // Resolve the promise here
      }, 1000);
    });
  })
  .then(() => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        three.style.visibility = "visible";
        resolve(); // Resolve the promise here
      }, 1000);
    });
  })
  .then(() => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        four.style.visibility = "visible";
        resolve(); // Resolve the promise here
      }, 1000);
    });
  });
