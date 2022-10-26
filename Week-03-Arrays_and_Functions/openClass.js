let names = ["Sam", "Tom", "Eric", "Sally", "Nicholas"];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);
console.log(sum);

names.forEach(function(element) {
    console.log(element);
});

//filter method, returns array using boolean expression to filter the array
let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

//splice, adding modifying or removing elements from array at specific location
//here we remove element
let removedElement = names.splice(1, 1);
console.log(removedElement);



var a = 3;
var b = 1;

//write your code below
function sumOfTwo(a) {
    return a + b
}



//do not change. Used for Testing purposes
console.log(sumOfTwo(a, b))

