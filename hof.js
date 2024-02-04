//8.Custom Map and Filter
function customMap(array,callback){
    const result=[];
    for(i=0;i<=array.length-1;i++){
        result.push(callback(array[i],i,array));
    }
    return result;
    }
    function customFilter(array,callback){
        const result=[];
        for(i=0;i<=array.length-1;i++){
            if(callback(array[i],i,array)){
                result.push(array[i]);
            }
        }
        return result;
    }
//Examples usage of customMap and customFilter
const numbers=[1,2,3,4,5]
const sqrnumbers=customMap(numbers,(num)=>num**2);
console.log(sqrnumbers);

const oddnumbers=customFilter(numbers,(num)=>num%2!==0)
console.log(oddnumbers)

///////////////////////////////////////////////////////////////////////////////
//4.Implement reduce
function myReduce(array, callback, initialValue) {
    if (array.length === 0 && initialValue === undefined) {
      throw new Error("Reduce of empty array with no initial value");
    }
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }
  const number = [1, 2, 3, 4, 5];
  const sum = myReduce(number, (acc, current) => acc + current, 0);
// const sum = number.reduce((acc, current) => acc + current, 0);
  console.log(sum); 

///////////////////////////////////////////////////////////////////////////////  
//3.Implement filter
function myFilter(array,callback){
    const Arrfilter=[];
    for(i=0;i<=array.length-1;i++){
        if(callback(array[i],i,array)){
            Arrfilter.push(array[i])
    }
    }
    return Arrfilter;
}
const Numbers=[11,22,33,44,55] 
const even=myFilter(Numbers,Num=>Num%2===0)
console.log(even)

///////////////////////////////////////////////////////////////////////////////
//2.Implement map
function myMap(array,callback){
    const arrMap=[]
    for(i=0;i<=array.length-1;i++){
        arrMap.push(callback(array[i],i,array));
    }
    return arrMap;
}
const num = [1, 2, 3, 4, 5]
const squaredNumbers = myMap(num, (num)=>num*num);
console.log(squaredNumbers);

///////////////////////////////////////////////////////////////////////////////
//1.Implement myForEach
function myForEach(array,callback){
    for(i=0;i<=array.length-1;i++){
        callback(array[i],i,array)
    }
}
const nums = [1, 2, 3, 4, 5];
function logElement(element, index, array) {
  console.log(`Element at index ${index}: ${element}`);
}
myForEach(nums, logElement);

///////////////////////////////////////////////////////////////////////////////
//5.Function Composition
function compose(func1, func2) {
    return function (x) {
      return func2(func1(x));
    };
  }
  function square(x) {
    return x * x;
  }
  function double(x) {
    return x * 2;
  }
  const composedFunction = compose(square,double);
  console.log(composedFunction(2));  

//6.Chaining Functions
function chainFunctions(functions) {
    return function (x,y) {
      let result = functions[0](x,y);
      for (let i = 1; i < functions.length; i++) {
        result = functions[i](result);
      }
      return result;
    };
  }
  function add(x, y) {
    return x + y;
  }
  function double(x) {
    return x * 2;
  }
  function square(x) {
    return x * x;
  }
  const chainedFunction = chainFunctions([add, double, square]);
  const result = chainedFunction(1, 2); 
  console.log(result);

//7.Higher-Order Function Practice
const numarr = [44,87,99,78,54,33];
const sumOfSquaresOfEvenNumbers = numarr
  .filter(number => number % 2 === 0)
  .map(evenNumber => evenNumber ** 2) 
  .reduce((sum, squaredNumber) => sum + squaredNumber, 100);
console.log(sumOfSquaresOfEvenNumbers);