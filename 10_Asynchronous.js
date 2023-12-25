// Handle Asynchronous NnodeJs
let a = 10;
let b = 0;

// By promises
let getResult = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    },2000);
});

getResult.then((data) => {
    b = data;
    console.log(a+b);
});