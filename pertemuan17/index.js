// local scope

// function printNum(){
    // local
//     var num = 12;
// }

if(true){
  // global
  var num = 12;
}


console.log(num);

// printNum()
// global scope


var num2 = 20;


function printAja(){
    console.log(num2);
}

printAja()


// JSON = JavaScript Object Notion

// let array = [{...},{....},{....}]


let Array =[
    {
        id:1,
        name: "john",
        age : 20
    },
    {
        id:2,
        name: "jean",
        age : 19
    },
    {
        id:3,
        name: "jasen",
        age : 21
    }
]

// console.log(Array[2].age)
// Array.map(Arr=>{
//     console.log(Arr.name);
// })

// Push, Pop, Reverse, Join, dan Concat
// push = menambahkan data di akhir
let arr =["makan","minum","ngoding"]

arr.push("nonton anime");
console.log(arr);

// pop = menghilangkan data di akhir

arr.pop()
console.log(arr);

arr.reverse()
console.log(arr);

// let newArr = arr.join(", ")
// console.log(newArr);

let arr1 = ["makan","minum","ngoding"]
let arr2 = ["nonton anime", "jalan-jalan"]

let newArr = arr1.concat(arr2)
// console.log(newArr);


// Slice dan Splice

let arrBaru =["makan","minum","ngoding"]

arrBaru.splice(1,1);

console.log(arrBaru);


let NewArray = newArr.slice(1,3);
console.log(NewArray);


let name = "john"
let age = 20

console.log("nama saya"+" "+name+" "+"saya berumur"+" "+age);
console.log(`nama saya ${name} saya berumur ${age}`);


























