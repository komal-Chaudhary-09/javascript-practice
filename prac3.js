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


