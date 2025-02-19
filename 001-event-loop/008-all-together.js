const fs = require('fs');
console.log('start');  // 1

new Promise((resolve, reject) => {
  console.log('new Promise');  //2
  // setTimeout(resolve, 1000)
  resolve();
}).then(_ => console.log('then-1')) //6
  .then(_ => console.log('then-2'));

setTimeout(_ => console.log('setTimeout'), 0);

fs.open(__filename, _ => {
  console.log('fs.open');
  queueMicrotask(_ => {
    console.log('queueMicrotask-1');
    queueMicrotask(_ => {
      console.log('queueMicrotask-2');
    })
  });
});

process.nextTick(_ => {
  console.log('nextTick-1'); //4
  process.nextTick(_ => console.log('nextTick-2')); //5
});

console.log('end'); //3
