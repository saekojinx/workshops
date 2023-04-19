//first problem

const reverse =[1, 2, 3];
for(let index = reverse.length -1; index >=0; index--){
    console.log(reverse[index]);
};


// second problem


const reverseArray = (arr) => {
    const newArray = [];
for(let i = 0; i < arr.length; i++){
    newArray.unshift(arr[i]);
}
    return newArray;
}

console.log(reverseArray([1, 3, 5, 7, 9, 11]));

// third problem

const reverseArray = (arr) => {
    const newArray = [];
for(let i = 0; i < arr.length; i++){
    newArray.unshift(arr[i]);
}
    return newArray;
}

console.log(reverseArray([20, 50, 30, 60, 200]));


// fourth problem

const reverseArray = (arr) => {
    const newArray = [];
for(let i = 0; i < arr.length; i++){
    newArray.unshift(arr[i]);
}
    return newArray;
}

console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));