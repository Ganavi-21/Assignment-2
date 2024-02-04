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