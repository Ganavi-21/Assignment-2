//1. Write a function curry that takes a function and curried arguments and returns a new function that can take the remaining arguments.

// function curry(func, ...args) {
//     return function curried(...moreArgs) {
//         const allArgs = args.concat(moreArgs);
//         if (allArgs.length >= func.length) {
//             return func(...allArgs);
//         } else {
//             return curry(func, ...allArgs);
//         }
//     };
// }
// function add(a, b, c) {
//     return a + b + c;
// }
// const curriedAdd = curry(add, 1);
// console.log(curriedAdd(2, 9)); 

// const curriedAdd2 = curry(add, 1, 2);
// console.log(curriedAdd2(9));  

// const curriedAdd3 = curry(add);
// console.log(curriedAdd3(1, 2, 9));  


//2.Implement a function deepFlatten that takes a deeply nested array and flattens it.
// let arr = [1,3,4,[4,8,[6,9,0],9],2,5]
// function flat(arr){
//     let flatArr=[]
//     for(let i=0; i<arr.length ;i++){
//         if(typeof arr[i]== number){
//             flatArr.push(arr[i])
//         }
//         else{
//            flatArr.push(...flat(arr[i]))
//         }
//     }
//     return flatArr
// }
// console.log(flat(arr));

//3.Create a debounce function that limits the execution of a function call and waits for a certain amount of time before running it again.
// 4)Write a throttle function that ensures a given function is only called at most once in a specified time period.
// const input = document.getElementById(input)
// const normal = document.getElementById(normal)
// const debouncing =document.getElementById(debouncing)
// const throttling =document.getElementById(throttle)

// input.addEventListener(input,function (e){
//     normal.textContent=e.target.value
//     updateDebounceText(e.target.value)
//     updateThrottleText(e.target.value)
// })

// let updateDebounceText= debounce(text=>{
//     debouncing.textContent=text
// })

// function debounce(cb,delay=2000){
//     let timeout;
//     return (...args)=>{
//         clearTimeout(timeout)
//         timeout=setTimeout(()=>{
//             cb(...args)
//         },delay)
//     }
// }

// let updateThrottleText = throttle(text=>{
//     throttling.textContent=text
// })

// function throttle(cb,delay=2000){
//     let throttled=false
//     return (...args)=>{
//         if(!throttled){
//             throttled=true;
//             setTimeout(()=>{
//                 cb(...args)
//                 throttled=false
//             },delay)
//         }
//     }
// }


//5.Write a function chunk that splits an array into subarrays of specified length.
// function chunk(array, size) {
//     const chunkedArray = [];
//     let index = 0;
//     while (index < array.length) {
//         chunkedArray.push(array.slice(index, index + size));
//         index += size;
//     }
//     return chunkedArray;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunkSize = 3;
// console.log(chunk(arr, chunkSize)); 


//6.Create a function deepEqual that compares two values deeply, checking if they are equal in value and structure.
// function deepEqual(value1, value2) {
//     if (value1 === value2) {
//         return true;
//     }
//     if (typeof value1 === 'object' && value1 !== null &&
//         typeof value2 === 'object' && value2 !== null) {
//         const keys1 = Object.keys(value1);
//         const keys2 = Object.keys(value2);
//         if (keys1.length !== keys2.length) {
//             return false;
//         }
//         for (let key of keys1) {
//             if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return false;
// }
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 2 } };
// console.log(deepEqual(obj1, obj2));

// const arr1 = [1, 2, [2, 4,[2,4,{a:2}]]];
// const arr2 = [1, 2, [2, 4,[2,4,{a:2}]]];
// console.log(deepEqual(arr1, arr2));

// console.log(deepEqual(obj1, arr1)); 

//7.Implement your own bind function that replicates the functionality of JavaScript's native Function.prototype.bind.
// function myBind(func, context, ...boundArgs) {
//     return function(...args) {
//         return func.apply(context, boundArgs.concat(args));
//     };
// }
// const obj = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// };
// const unboundGetX = obj.getX;
// const boundGetX = myBind(obj.getX, obj);
// console.log(unboundGetX()); 
// console.log(boundGetX());   


//8.Write a function unique that returns a new array with only the unique elements from the original array.
// let arr=[2,4,5,8,0,9,5,8,4,9,1,4]
// function unique(arr){
//     let uniqueArr=[]
//     arr.forEach(element => {
//         if(!uniqueArr.includes(element)){
//             uniqueArr.push(element)
//         }
//     });
//     return uniqueArr
// }
// console.log(unique(arr));

// 9.Implement a function intersection that finds the intersection of two arrays, returning an array with elements that appear in both.
// let arr1 =[3,5,6,7,3,7,9]
// let arr2=[4,5,8,6,0,1,6,2]
// function commmonArr(array1,array2){
//     let comArr=[]
//     for(i=0; i<array1.length;i++){
//         if(array2.includes(array1[i])){
//             comArr.push(array1[i])
//         }
//     }
//     return comArr
// }
// console.log(commmonArr(arr1,arr2));



//10.Write a custom filter function that mimics the behavior of the native Array.prototype.filter method.
// function customFilter(array, callback) {
//     if (array == null) {
//       throw new TypeError('Array is null or undefined');
//     }
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }
//     const filteredArray = [];
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i], i, array)) {
//         filteredArray.push(array[i]);
//       }
//     }
//     return filteredArray;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const evenNumbers = customFilter(numbers, function(num) {
//     return num % 2 === 0;
//   });
//   console.log(evenNumbers); 
  



//11.Create your own version of the reduce method called myReduce that mimics the behavior of the native Array.prototype.reduce.
// function myReduce(array, callback, initialValue) {
//     if (ar.length === 0 && initialValue === undefined) {
//         throw new TypeError('Reduce of empty array with no initial value');
//     }
//     let accumulator = initialValue !== undefined ? initialValue : ar[0];
//     const startIndex = initialValue !== undefined ? 0 : 1;
//     for (let i = startIndex; i < ar.length; i++) {
//         accumulator = callback(accumulator, ar[i], i, ar);
//     }

//     return accumulator;
// }
// const ar = [1, 2, 3, 4, 5];
// const sum = myReduce(ar, (accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); 





//12.Write a function permute that returns all possible permutations of the elements in an array
// function permute(nums) {
//     const result = [];
    
//     function backtrack(current, remaining) {
//         if (remaining.length === 0) {
//             result.push(current);
//             return;
//         }
        
//         for (let i = 0; i < remaining.length; i++) {
//             const next = current.concat(remaining[i]);
//             const remainingCopy = [...remaining];
//             remainingCopy.splice(i, 1);
//             backtrack(next, remainingCopy);
//         }
//     }
    
//     backtrack([], nums);
//     return result;
// }
// const nums = [1, 2, 3];
// console.log(permute(nums));



//13.Implement a function rotateArray that rotates an array to the right by a given number of steps
// function rotateArray(arr, steps) {
//     if (arr.length === 0) return arr;

//     const n = arr.length;
//     const actualSteps = steps % n;

//     if (actualSteps === 0) return arr;

//     const rotated = [];
//     for (let i = 0; i < n; i++) {
//         const newIndex = (i + actualSteps) % n;
//         rotated[newIndex] = arr[i];
//     }

//     return rotated;
// }

// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// const rotatedArray = rotateArray(array, steps);
// console.log(rotatedArray); 



//14.Write a function isBalanced that takes a string containing only parentheses and checks if they are balanced.
// function isBalanced(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(') {
//             count++;
//         } else if (str[i] === ')') {
//             count--;
//         }
//         if (count < 0) {
//             return false;
//         }
//     }
//     return count === 0;
// }
// console.log(isBalanced("()")); 
// console.log(isBalanced("({})")); 
// console.log(isBalanced("{[)}")); 
// console.log(isBalanced("()[]{}")); 
// console.log(isBalanced("[({})]")); 
// console.log(isBalanced("((")); 
// console.log(isBalanced("))((")); 



//15.Create a function mergeIntervals that merges all overlapping intervals in an array of interval pairs
// function mergeIntervals(intervals) {
//     if (intervals.length <= 1) {
//         return intervals;
//     }

//     intervals.sort((a, b) => a[0] - b[0]);

//     const mergedIntervals = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const currentInterval = intervals[i];
//         const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

//         if (currentInterval[0] <= lastMergedInterval[1]) {
//             lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
//         } else {
//             mergedIntervals.push(currentInterval);
//         }
//     }

//     return mergedIntervals;
// }

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// console.log(mergeIntervals(intervals));



//16.Implement a function nestedSum that calculates the sum of all numbers in a nested array, regardless of how deep the array is.
// function nestedSum(arr){
//     total=0;
//     for(i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             total+=nestedSum(arr[i])
//         }
//         else{
//             total+=arr[i]
//         }
//     }
//     return total;
// }
// let arr=[1,2,3,[3,4,5,[4,5,[5,5,6]]],6,8]
// console.log(nestedSum(arr))


// 17.Implement a function calcLetters that calculates and resturns the sum of all repeated characters in an strings.
// Ex: input  => "Apple"
//    outout => {"A":1, "e":1, "l":1, "p":2}
// function calcLetters(str) {
//     let letterCounts = {};
//     str = str.toLowerCase();
//     for (let char of str) {
//         if (/[a-z]/.test(char)) {
//             letterCounts[char] = (letterCounts[char] || 0) + 1;
//         }
//     }
//     letterCounts = Object.fromEntries(Object.entries(letterCounts).filter(([key, value]) => value > 0));

//     return letterCounts;
// }

// const input = "Apple";
// console.log(calcLetters(input)); 
