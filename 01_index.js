// const app = require('./App');
// console.log(app.x);



// Filter

let arr = [2, 6, 4, 8, 23, 56, 81, 1, 4];
const result = arr.filter((item) => {
    return item > 4;
});
console.log(result);