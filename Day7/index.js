function insertionSort(arr){
    let n= arr.length;
    for(let i=0;i<n;i++){
        let j= i-1;
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}

console.log(insertionSort([4,3,2,1]));