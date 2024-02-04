//1.Sum of two numbers
function sumOfTwoNumbers(num1,num2){
    sum=num1+num2
    return sum
}
console.log(sumOfTwoNumbers(3,5))


//2.Check for even or odd
function evenOrodd(num){
    if(num%2==0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
evenOrodd(45)


//3.Reverse a string
let string='ganavi'
rev_string=''
function rev(a){
    for(i=string.length-1;i>=0;i--){
        rev_string+=string[i]
    }
    console.log(`The reverse of string is ${rev_string}`)
}
rev(string)


//4.Calculate Square
function sqrOfNumber(x){
    sqr=x**2
    return sqr
}
console.log(sqrOfNumber(5))


//5.Concatenate Strings
function concate(str1,str2){
    con=str1+str2
    return con
}
console.log(concate('Monica','Geller'))



//6.Check for Palindrome
let a='MADAM'
rev=''
function Palindrome(){
    for(i=a.length-1;i>=0;i--){
        rev+=a[i]
    }
    if(rev==a){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
Palindrome(a)

//7.Calculate Factorial
function fac(num) {
if(num==0 || num==1){
    return 1
}
for(var i=num-1; i>=1 ; i--){
    num*=i;
}
return num
}
console.log(fac(5))

//8.Maximum of Two Numbers
function max(a,b){
    if(a>b){
        console.log(`${a} is greater`)
    }
    else{
        console.log(`${b} is greater`)
    }
}
max(3,7)


//9.Greet a Person
function greet(name){
    msg=`Good Morning ${name} Have a Nice Day!!`
    return msg
}
console.log(greet('Chandler'))


//10.Calculate Average
a=[12,56,76,53,53]
sum=0
function Average(arr){
    for(i=0;i<=a.length-1;i++){
        sum+=a[i]
    }
    avg=sum/2
    return avg
}
console.log(Average(a))