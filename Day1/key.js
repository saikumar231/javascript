let book={
    title:"java",
    author:"sunmicrosystems"
};

function property(obj, key){
    return key in obj;
}

console.log(property(book,"title"));
console.log(property(book,"year"));