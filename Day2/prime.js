function isprime(n){

    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

console.log(isprime(6));