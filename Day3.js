// // console.log("A");

// // setTimeout(() => {
// //     console.log("B");

// // }, 2000);

// // console.log("C");

// // callback fn

// // function orderFood(callback) {
// //   console.log("Order Placed");

// //   setTimeout(() => {
// //     console.log("Food is being Prepared....");
// //   }, 2000);
// //   setTimeout(() => {
// //     callback();
// //   }, 5000);
// // }

// // const foodPrepared = () => {
// //   console.log("Your food is ready");
// // };

// // orderFood(foodPrepared);

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello");
//       resolve();
//     }, 2000);
//   });
// }

// getUser()
//   .then(() => {
//     console.log("Promise resolved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function hello() {
//   console.log("hello");
// }

// hello().then(() => {
//   console.log("done");
// });

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data");
//     }, 2000);
//   });
// }

// async function test() {
//   return 10;
// }

// const result = test();

// console.log(result);

function getA() {
  return Promise.resolve("A");
}
function getB() {
  return Promise.reject("B failed");
}
function getC() {
  return Promise.resolve("C");
}

async function main() {
  try {
    const result = await Promise.all([getA(), getB(), getC()]);
    console.log(result);
    
  } catch (error) {
    console.log(error);
  }
}
main();
