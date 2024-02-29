// 1) Find a 2nd maximum and Minimum number in an array
// let arr=[-10,3,4,7,9,-20,6,8,5,-Infinity]
// function secMin(array){
//     let min = Infinity
//     let secMin = Infinity
//     for(let i=0;i<array.length;i++){
//         if(arr[i]<min){
//             secMin=min
//             min =arr[i]

//         }
//         else if(arr[i]<secMin && secMin!==min){
//             secMin=arr[i]
//         }
//     }
//     console.log(min,secMin);
// }
// function secMax(array){
//     let max = -Infinity
//     let secMax = Infinity
//     for(let i=0;i<array.length;i++){
//         if(arr[i]>max){
//             secMax=max
//             max =arr[i]

//         }
//         else if(arr[i]>secMax && secMax!==max){
//             secMax=arr[i]
//         }
//     }
//     console.log(max,secMax);
// }
// secMin(arr)
// secMax(arr)

// 2) Sort an array without using built in methods
// function sort(array){
//     let sortArr=[]
//     temp = -Infinity
//     for(i=0;i<array.length;i++){
//         for(j=i+1;j<array.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//         sortArr.push(arr[i])
//         }
//         return sortArr
//     }
//     console.log(sort(arr));

// 3) write a function to remove the duplicate element from an array
// let arr=[3,5,6,7,9,9,6,4,2,2,4,6,7,0]
// function original(array){
//     let oriArr=[]
//     for(i=0;i<array.length;i++){
//         if(!oriArr.includes(arr[i])){
//             oriArr.push(arr[i])
//         }
//     }
//     return oriArr
// }
// console.log(original(arr));

// 4)write a function to remove duplicate elements in a string "HelloWorld"
// let str='HelloWorld'
//     function original(string){
//         let oriStr=''
//         for(let char of string){
//             if(!oriStr.includes(char)){
//                 oriStr+=char
//             }
//         }
//         return oriStr
//     }
//     console.log(original(str));

// 5)Write function to convert camelCase to snake_case
// let camelCase = 'thisIsASnakeCase'

// function camelToSnake (str){
//     let snakeCs=''
//     for(i=0;i<str.length;i++){
//         if(str[i].match(/[A-Z]/)){
//             snakeCs+="_"+str[i].toLowerCase()
//         }
//         else{
//             snakeCs+=str[i]
//         }
//     }
//     return snakeCs
// }
// console.log(camelToSnake(camelCase));

// 6)Write function to convert snake_case to camelCase
// let snakeCase = this_is_a_camel_case
// function snakeToCamel(str){
//     let camelCasee=``
//     for(i=0;i<str.length;i++){
//         if(str[i]=="_"){
//             i++
//             camelCasee+= str[i].toUpperCase()
//         }
//         else{
//             camelCasee+= str[i]
//         }
//     }
//     return camelCasee
// }
// console.log(snakeToCamel(snakeCase));

// 7) write a function to flatten the nested array
// let  arr=[2,4,[5,8,9],5,8,9,6,[48,3,[4,5,7,]]]
// function flat(array){
//     let flatArr=[]
//     for(let i=0;i<array.length;i++)
//     if(typeof array[i] === 'number'){
//         flatArr.push(array[i])
//     }
//     else{
//         flatArr.push(...flat(array[i]))
//     }
//     return flatArr
// }
// console.log(flat(arr));

// 8) Write a function to find the 2nd largest number in a nested array

// let  arr=[2,4,[5,8,9],5,40,8,9,6,[48,3,[4,5,7,]]]
// function flat(array){
//     let flatArr=[]
//     for(let i=0;i<array.length;i++)
//     if(typeof array[i] === 'number'){
//         flatArr.push(array[i])
//     }
//     else{
//         flatArr.push(...flat(array[i]))
//     }
//     return flatArr
// }
// function secLargest(arr){
//     let flatArr=flat(arr)
//     flatArr.sort((a,b)=>a-b)
//     let seclarge= flatArr[flatArr.length-2]
//     // console.log(flatArr);
//     console.log(seclarge);
// }
// secLargest(arr)

// 9) write a function to generate below pattern
// 	1
// 	2 9
// 	3 8 10
// 	4 7 11 14
// 	5 6 12 13 15


// 10)program for adding zeros after 3 values in array
// function addZerosAfterThreeValues(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//         if ((i + 1) % 3 === 0 ) {
//             result.push(0);
//         }
//     }
//     return result;
// }
// let array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 6];
// let result = addZerosAfterThreeValues(array);
// console.log(result);

// 11)Reverse a string a without using built in method.
// let str= 'Ganavi'
// function revString(string){
//     revStr=``
//     for(i=string.length-1;i>=0;i--){
//         revStr+=string[i]
//     }
//     return revStr
// }
// console.log(revString(str));

// 12)Write a function to return a fibonacci series
// function fibonacciSeries(n){
//     let series=[0,1]
//     for(i=2;i<n;i++){
//         series.push(series[i-1]+series[i-2])
//     }
//     return series
// }
// console.log(fibonacciSeries(10));

// 13)Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.
// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj; // Return the object if it's not an object or null
//     }

//     let clone = Array.isArray(obj) ? [] : {}; // Determine if it's an array or object

//     for (let key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             clone[key] = deepClone(obj[key]); // Recursively clone nested objects or arrays
//         }
//     }
//     return clone;
// }
// let original = {
//     a: 1,
//     b: [2, 3],
//     c: {
//         d: 4,
//         e: [5, 6]
//     }
// };
// let cloned = deepClone(original);
// console.log(cloned);

// 14) write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl"
// let arr= [1,8,2,3,3,5,2,1,7,6,8,7,8]
// function numCount(array){
//     let a={}
//     for(i=0;i<array.length;i++){
//         let b=array[i]
//         if(a[b]){
//             a[b]++
//         }
//         else{
//             a[b]=1
//         }
//     }
//     return a
// }
// console.log(numCount(arr));

// let str= 'abcdaabdlfjl'
// function numCount(string){
//     let a={}
//     for(i=0;i<string.length;i++){
//         let b=string[i]
//         if(a[b]){
//             a[b]++
//         }
//         else{
//             a[b]=1
//         }
//     }
//     return a
// }
// console.log(numCount(str));

// 15)write a function to capitalize the each words first letter to capital

// let arr=['abc','def','efg']
// function capitalizeWords(arr) {
//     return arr.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
// }

// let capitalizedArr = capitalizeWords(arr);
// console.log(capitalizedArr);

// 16) write a function to calculate the sum of total marks in an array of objects
// let arr = [
//   { sub: "Maths", marks: 60 },
//   { sub: "Science", marks: 70 },
//   { sub: "English", marks: 90 },
// ];
// function totalMarks (array){
//     let total=0
//     array.forEach(element => {
//         total+=element.marks
//     });
//     return total
// }
// console.log(totalMarks(arr));


// 20)Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
// a = [1,2,3,4,5] let b = [5,3,7,8,9]
// function original(a,b){
//     let combinedArray = a.concat(b)
//         let oriArr=[]
//         for(i=0;i<combinedArray.length;i++){
//             if(!oriArr.includes(combinedArray[i])){
//                 oriArr.push(combinedArray[i])
//             }
//         }
//         return oriArr
//     }
// let a = [1, 2, 3, 4, 5];
// let b = [5, 3, 7, 8, 9];
// let result = original(a, b);
// console.log(result);
