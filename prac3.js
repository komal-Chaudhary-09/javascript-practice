// let nums = [10,20,30,40,40,50];
// nums.splice(2,2,100,200);
// console.log(nums)


// let arr = [10,20,30,40,50];
// let ans = arr.slice(3,5);
// console.log(ans)

// arr.forEach((items) => {
//     console.log(items);
// });

// arr.forEach((items,index) => {
//     console.log(index,items);
// });

// arr.forEach((items) => {
//     console.log(items*2);
// });   // array change nhi hua 

// arr.forEach((items , index) => {
//     arr[index] = items*10;
// });
// console.log(arr) // array changed


// let arr2 = [90,80,70,90,90,60,90];
// console.log(arr2.indexOf(90));

// console.log(arr2.includes(900));

// console.log(arr2.lastIndexOf(90));

// let users = [
//     {id:1 , name:"komal"},
//     {id:2 , name : "anu"},
//     {id:3 , name: "hello"}
// ];

// let user = users.find(item => item.id == 2);
// console.log(user.name);

// let numbers = [300,400,500,300,200,20900];
// let ans1 = numbers.filter(num => num > 300);
// console.log(ans1)

// let products  = [
//     {name: 'laptop' , price: 90000},
//     {name: 'phone' , price : 30000},
//     {name : 'bottle' , price : 300}
// ];

// let expensive = products.filter(product => product.price > 900);
// console.log(expensive)

// let num3 = [1,2,3];
// let ans3 = num3.map(num => num*3);
// console.log(ans3)

// let users4= [
//     {name:"Rahul"},
//     {name:"Aman"},
//     {name:"Priya"}
// ]; 
// let names = users4.map(user => user.name);
// console.log(names)

// let arr8 = [9,8,7];
// let ans8 = arr8.map(num => num +100);
// console.log(ans8)

// let arr9 = [1,2,15];
// arr9.sort((a,b) => a-b);
// console.log(arr9);

// let users2 = [
//     {name:"Rahul", age:25},
//     {name:"Aman", age:18},
//     {name:"Priya", age:30}
// ];
// users2.sort((a,b) => a.age - b.age);
// console.log(users2)

// let str = "apple, banana, mango";
// let arr = str.split(",");
// console.log(arr)

// let str2  = "javascript is awesome";
// let arr2 = str2.split(" ");
// console.log(arr2)

// let arr3 = ["apple", "banana", "juice" , "mango"];
// let str3 = arr.join(",");
// console.log(str3)

// let sample = [1,2,3,4,5];

// let sum = sample.reduce((acc,current) =>{

//         return acc+current;
//     },0);
//     console.log(sum);


//     let sample1 = [2,3,4];
//     let ans = sample1.reduce((acc, current) => {
//         return acc * current;
//     } , 1);
//     console.log(ans)


// let arr = [10,20,30];
// for (let num in arr){
// console.log(num);
// }
// let arr2 = [10,20,30,40,50,60];

// for (let i =0; i<= arr.length ; i++){
//     console.log(arr2[i])
// }

// let arr3 = [90.80,70,60];
// let iterator =  arr[Symbol.iterator]();

// let range = {
//     start: 1,
//     end: 5,

//     [Symbol.iterator]() {
//         let current = this.start;
//         let last = this.end;

//         return {
//             next() {
//                 if (current <= last) {
//                     return {
//                         value : current++,
//                         done : false
//                     };
//                 } else{
//                     return {
//                         done: false
//                     };
//                 }
//             }
//         };
//     }
// };
// for (let num of range){
//     console.log(num);
// }

// let map = new Map();
//  map.set("name" , "komal");
//  map.set ("age", 20);
//  console.log(map.get("name"))

// let user = {
//     id: 101
// };

// let map = new Map();
// let user = {
//     id : 10
// };

// map.set(user , "rahul" );
// console.log(map.get(user));


let students = new Map();
students.set( "name" , "komal");
students.set ("age" , 20);

console.log(students.get("name"));
console.log(students.sixe);

console.log(students.has("age"));
students.delete("age")

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

for (let vegetable of recipeMap.keys()){
    console.log(vegetable)
}

for (let amount of recipeMap.values()){
    console.log(amount)
}

for (let entry in recipeMap){
    console.log(entry)
}