function sumArray(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));