const fs = require('fs').promises; // fx-extra

console.log('console-log-1'); //1
async function asyncFunction() {
  console.log('asyncFunction-1');//3
  await Promise.resolve();
  console.log('asyncFunction-2'); //5
  await fs.open(__filename);
  console.log('asyncFunction-3');//7
}

new Promise(resolve => {
  console.log('PromiseFunction-1');//2
  resolve(Promise.resolve());
}).then(() => {
  console.log('PromiseFunction-2');//4
  return fs.open(__filename);
}).then(() => {
  console.log('PromiseFunction-3');//6
});

asyncFunction();

