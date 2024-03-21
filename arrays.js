//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

arr1=[3,7,34,90,12]
let lastElement = arr1[arr1.length-1]
console.log({ lastElement})

arr2 =[true,"green","where" ,12,56 ]
let elementLast = arr2[arr2.length-1]
console.log({elementLast})


//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];


let stringmyPets =["cow","Bird","Snake","Dog"]
console.log(stringmyPets.join(","))

myPets =["cow","Bird","Snake","Dog"]
console.log(myPets.toString())

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let arr3 =[-5,9,5,3,2,-3,6,8];
arr3.sort((x,y) => x-y)
console.log(arr3)

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];

var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];

function removeDuplicates(data){
    let unique = [];
    data.forEach(element=> {
        if(!unique.includes(element)){
            unique.push(element)
        }
        
    })
    return unique
}
console.log(removeDuplicates(arr))

//getduplicates

function getDuplicates(data){
    return data.filter((value,index)=> data.indexOf(value)!== index);
}
console.log(getDuplicates(arr));

//Write a JS script to search for the following word in the array."way"If the word is present, console it else console "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];


//Write a JS script to sort the following string:let word = "sevink"
let word = "sevink"
let sortString = (word) =>{
    return word.split("").sort().join("");
};
console.log("Sorted String: ");
console.log(sortString("sevink"));