function findMinAndRemove(arr){
    let min=arr[0];
    let index = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]<min){
            min=arr[i]
            index=i
        }
    }
    arr.splice(index, 1)
    return min
}

function insertionSort(array){
    let sorted = []
    while (array.length>0){
        sorted.push(findMinAndRemove(array))
    }
    return sorted;
}
