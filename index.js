// //1-masala


// let string = "34567"
// let array = []
// function reverseArr(str , arr) {
//     str = string.split('')
//     for(let value of str){
//         value = Number(value)
//         arr = array.push(value)
//     }
//     console.log(array.reverse()); 
// }
// reverseArr(string , array)


// //2-masala

// // == va === vazifasi bir xil ya'ni tenglikni tekshiradi . Farqi shundaki === qattiy ya'ni tipini ham tekshiradi

// let str = "3"
// let num = 3
// if(str == num){
//     console.log(true);
// } else {
//     console.log(false);
// }
// if(str === num){
//     console.log(true);
// } else {
//     console.log(false);
// }


// //3-masala

// let user = 20
// let stop = 0
// function recursion(){
//     stop += 1
//     console.log(stop);
//     if(stop == user){
//         return stop
//     }
//     recursion()
// }
// recursion()

// //4-masala

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let even = 0
// let odd = 0
// let result = []
// for(let value of arr){
//     if(value %2 == 0){
//         even += value 
//     }else{
//         odd += value
//     }
// }
// result.push(even,odd)
// console.log(result);

//5-masala

// let str ="salom! alik! js!" 
// let undo = str.split('!')
// console.log(undo.join(''));

// // 6- masala

// let arr1 = [1,3,6,9]
// let arr2 = [2,4,8,5]
// let sum = 0
// function sumOfTwoArrays(Arr1 , Arr2){
//     Arr1 = Arr1.concat(Arr2)
//     for(let value of Arr1){
//         sum += value
//     }
//     return sum
// }
// console.log(sumOfTwoArrays(arr1 , arr2));


// //7-masala

// let str = 'birinchi joyi va oxirgi joyi olib tashlanadi'

// function remove(Str){
//     Str = Str.split('')
//     Str.pop()
//     Str.shift()
//     console.log(Str.join(''));
// }
// remove(str)

// 8-masala

// let arr = [true , false , undefined , null , 2 , 'hello']
// let newArr = []
// function reverse(ARR){
//     for(let value of ARR){
//         newArr.unshift(value)
//     }
//     console.log(newArr);
// }
// reverse(arr)

// 9- masala 

let str = "159060"

function withoutZero(string) {
    for(let value of str){
            for(let i = value.lenght -1 ; i >= 0  ; i--){
        }       
    }
} withoutZero(str) 

// 10-masala 

// let arr = [100, 150, 850, 4, 9, 3, 6, 7, 5]
// function reverse(ARR){
//     ARR.sort((a , b) => a-b)
//     return ARR[0]**4
// }
// console.log(reverse(arr));