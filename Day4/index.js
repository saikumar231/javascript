function outerfunction(){
    let count=0;
    function innerfunction(){
        count++;
        return count;
    }
    return innerfunction;
}
const incrementcounter= outerfunction();
console.log(incrementcounter());
console.log(incrementcounter());
console.log(incrementcounter());