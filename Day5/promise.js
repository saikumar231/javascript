const promise= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve ("The function is ");
    },2000);
});

promise
.then((message)=>{console.log(message+" success");})
.catch((error)=>{console.log(error+ " Failure");});