const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('first');5000
    });
});

const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('second');2000
    });
});

const promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('third');1000
    });
});

Promise.all([promise1,promise2,promise3]) 
.then((results)=>console.log(results)) 
.catch((error)=>console.log(error));


Promise.allSettled([promise1,promise2,promise3]) 
.then((results)=>console.log(results)) 
.catch((error)=>console.log(error));

Promise.any([promise1,promise2,promise3]) 
.then((results)=>console.log(results)) 
.catch((error)=>console.log(error));

Promise.race([promise1,promise2,promise3]) 
.then((results)=>console.log(results)) 
.catch((error)=>console.log(error));