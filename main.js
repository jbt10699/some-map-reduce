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

let arr = [1,3,2,4];
console.log(arr.myCustomFilter((el) => el>1 ) );