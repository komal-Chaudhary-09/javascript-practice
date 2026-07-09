let arr = ["I", "go","home"];
delete arr[1];
(arr[1])
console.log(arr)

let arr1 = ["hello","I" ,"KOMAL"];
arr1.splice(1,1)
console.log(arr1)

let arr2 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr2.splice(0,3,"lets" ,"dance")
console.log(arr2)
console.log(removed)

let arr3 =  ["I", "study", "JavaScript"];
arr3.splice(2,0,"complex","langauge");
console.log(arr3);

let arr4 = ["t", "e", "s", "t"];
console.log(arr4.slice(1,3))
console.log(arr4.slice(-2));

let arr5 = [1,2];
console.log(arr5.concat([3,4]));
console.log(arr5.concat([3,4,5,6]));

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log((`${item} is at index ${index} in ${array}`));
});

let fruits = ['Apple', 'Orange', 'Apple'];
console.log(fruits.indexOf('Apple'));
console.log(fruits.lastIndexOf("Apple"));

let users = [
    {id: 1, name: "john"},
    {id:2, name: "pete"},
    {id:3, name:"mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name)


/* transform an array */


let length = ["Bilbo", "Gandalfd", "Nazgul"].map(item => item.length);
console.log(length)











