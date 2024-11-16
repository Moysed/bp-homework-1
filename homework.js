let a= [1,2,3]
let b= [4,5,6]



//1
// function MergeArr (arr1,arr2){
//     return console.log(arr1.concat(arr2))
// }
// MergeArr(a,b)

//2
// let num2 = [10,20,30,40,50]
// let arr2 = num2.filter(FliterArr)
// function FliterArr(arr1){
//     return arr1 > 30
// }
// console.log(arr2)

//3
// let arr = [5,6,7,2,4]


// function takeOutelementbyIndex(arr1,input){
//     arr1.splice(input,1)
//     return console.log(arr1)
// }
// takeOutelementbyIndex(arr,2)

//4 Roman number
// function symboltoNum(symbol){
//     if(symbol == 'X'){
//         return 10;
//     }
//     if(symbol == 'IX'){
//         return 9;
//     }
//     if(symbol == 'V'){
//         return 5;
//     }
//     if(symbol == 'IV'){
//         return 4;
//     }
//     if(symbol == 'I'){
//         return 1;
//     }
// }

// function RomantoNum(value){
//     let result  = 0;

//     for (i = 0 ; i < value.length ; i++){
//         let  n1 =   symboltoNum(value[i]);

//         if(i + 1 < value.length){
//             let n2 = symboltoNum(value[i + 1]);

//             if(n1 >= n2){
                
//                 result = result + n1;
//             }
//             else{
//                 result = result + n2 - n1;
//                 i++;
//             }
//         }else{
//             result = result + n1;
//         }
//     }
//     return result
// }

// console.log(RomantoNum('XIV'))

// 5 Remove duplicate number
// function removeDuplicateNum(arr){
//     setvalue = new Set(arr)
//     NewArr = Array.from(setvalue)
//     return NewArr.sort()

// }

// console.log(removeDuplicateNum([1,2,1,4,5,2,3,4,1,4]))

//6 Rotate Array
// let resArr = [1,2,3,4,5]
// function RotateArr(r){
//     for(i= 0 ; i < r ; i++){
//         let deletedNum = resArr[4]
//         resArr.pop()
//         resArr.unshift(deletedNum)
//         deletedNum = []
//     }
//     return resArr
// }
// console.log(RotateArr(3))