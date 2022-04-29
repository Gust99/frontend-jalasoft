// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hola mundo");
//         }, ms);
//     });
// };

// delay(1000).then(result => console.log(result));

console.log(0)

setTimeout(() => console.log(1));

Promise.resolve().then(() => console.log(2));

setTimeout(() => console.log(3));

console.log(4)