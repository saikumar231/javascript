function sumAll(...args){
    let sum=0;

    for(let item of arr) sum+=args;
    return sum;
}

console.log(sumAll(1));