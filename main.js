Array.prototype.myCustomFilter = function(callback){
    let newArray = [];
        //'this' referes to the array
    for(let i=0; i<this.length; i++){
        //Add to array if element passes the provided callback function
        if(callback(this[i])){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

/*
let arr = [1,3,2,4];
console.log(arr.myCustomFilter((el) => el>1 ) );
*/

Array.prototype.myCustomReduce = function(callback, accumulate){
//var accumulate =0;
    for(let i=0; i<this.length; i++){
        callback(accumulate = accumulate+this[i]);
    }
    return accumulate;
}

/*
let arr = [5,21,61,8,1];
console.log(arr.myCustomReduce((acc,item) => acc+item, 0));
*/

Array.prototype.myCustomSome = function(callback){
    for(let i=0; i<this.length; i++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
}

/*
let arr = [1,11,3,11,5];
console.log(arr.myCustomSome((item) => item%2===0));
*/