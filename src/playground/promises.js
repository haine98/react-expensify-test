

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something wrong.');
    }, 5000);
    
});

console.log('Before')

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('Error:', error);
});

console.log('After')