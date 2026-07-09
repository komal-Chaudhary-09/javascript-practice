let nums = [10,20,30,40,40,50];
nums.splice(2,2,100,200);
console.log(nums)


let arr = [10,20,30,40,50];
let ans = arr.slice(3,5);
console.log(ans)

arr.forEach((items) => {
    console.log(items);
});

arr.forEach((items,index) => {
    console.log(index,items);
});

arr.forEach((items) => {
    console.log(items*2);
});   // array change nhi hua 

arr.forEach((items , index) => {
    arr[index] = items*10;
});
console.log(arr) // array changed


let arr2 = [90,80,70,90,90,60,90];
console.log(arr2.indexOf(90));

console.log(arr2.includes(900));

console.log(arr2.lastIndexOf(90));

let users = [
    {id:1 , name:"komal"},
    {id:2 , name : "anu"},
    {id:3 , name: "hello"}
];

let user = users.find(item => item.id == 2);
console.log(user.name);

let numbers = [300,400,500,300,200,20900];
let ans1 = numbers.filter(num => num > 300);
console.log(ans1)

let products  = [
    {name: 'laptop' , price: 90000},
    {name: 'phone' , price : 30000},
    {name : 'bottle' , price : 300}
];

let expensive = products.filter(product => product.price > 900);
console.log(expensive)

let num3 = [1,2,3];
let ans3 = num3.map(num => num*3);
console.log(ans3)

let users4= [
    {name:"Rahul"},
    {name:"Aman"},
    {name:"Priya"}
]; 
let names = users4.map(user => user.name);
console.log(names)

let arr8 = [9,8,7];
let ans8 = arr8.map(num => num +100);
console.log(ans8)

let arr9 = [1,2,15];
arr9.sort((a,b) => a-b);
console.log(arr9);

let users2 = [
    {name:"Rahul", age:25},
    {name:"Aman", age:18},
    {name:"Priya", age:30}
];
users2.sort((a,b) => a.age - b.age);
console.log(users2)