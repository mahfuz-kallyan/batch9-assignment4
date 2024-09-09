function deleteInvalidArray(array){
    if(Array.isArray(array) === false){
        return 'invalid'
    }
        
    let numberArray =[];
    for(let element of array){
        if(typeof element === 'number' && isNaN(element) === false){
            numberArray.push(element);
        }
    }
    return numberArray;
}
console.log(deleteInvalidArray([1, null, undefined, 18, -19, NaN, '12', [1, 2], {ob: 'lala'}])
);

console.log(deleteInvalidArray(['1', {num: 2}, NaN]));
console.log(deleteInvalidArray([1, 2, 3]));
console.log(deleteInvalidArray({numb: [1, 2, 3]}));




