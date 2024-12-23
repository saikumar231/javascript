const promise= new Promise((resolve,reject)=>{
let ans= Math.random();
  if(ans>0.5){
    resolve("Greater Number");
  }else{
    reject("Lesser Number");
  }
});
    
    promise
    .then((message)=>{console.log(message);})
    .catch((error)=>{console.log(error);});