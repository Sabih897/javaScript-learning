// function delay(delayTime) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("run");
//       resolve("done");
//     }, delayTime * 1000);
//   });
// }

// // // const response = (res) => {
// // //   console.log(res);
// // // };

// // // const error = (err) => {
// // //   console.log(err);
// // // };

// // // delay(2).then(response).catch(error);

// // // Promise.all([delay(2), delay(3), delay(1)])
// // //   .then(response)
// // //   .catch(error);

// // async function getUser() {
// //   return new Promise((resolve, reject) => {
// //     const random = Math.random();

// //     if (random > 0.5) {
// //       return resolve("done");
// //     } else {
// //       reject(new Error("not done"));
// //     }
// //   });
// // }

// // try {
// //   let res = await getUser();
// //   console.log(res);
// // } catch (err) {
// //   console.log(err.message);
// // }

// //  BuildTask

// async function userData() {
//   await delay(2);
// }

// async function productData() {
//   await delay(3);
// }

// async function orderData() {
//   await delay(4);
//   return new Promise((resolve, reject) => {
//      let random = Math.random();
//   if (random > 0.5) {
//     resolve("done");
//   } else {
//     reject(new Error("orderData not available"));
//   }
//   })

// }

// Promise.all([userData(), productData()])
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   try {
//    let res = await orderData();
//    console.log(res);

//   } catch (error) {
//     console.log(error.message);

//   }

// independent challenge

async function job(time) {
  let random = Math.random();
  return new Promise((resolve, reject) => {
    if (random > 0.5) {
      setTimeout(() => {
        resolve("Successfull");
      }, time * 1000);
    } else {
      reject(new Error("job did not get executed"));
    }
  });
}

async function main() {
  try {
    let res = await Promise.all([job(2), job(1), job(3)]);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

main();