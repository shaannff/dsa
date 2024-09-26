// arr=[3,6,2,4,2,7,9,0]
// function bubbleSort(arr){
//     let swap
//     do{
//         swap = false
//         for(let i=0 ;i<arr.length ;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                   arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swap = true
//             }
//         }

//     }while(swap)
//         return arr
// }

// let sortedArry = bubbleSort(arr)
// console.log('hello world',sortedArry)


function sort(arr){
    let swap
    do{
        swap = false
        for(let i=1;i<arr.length;i++){
            if(arr[i]<arr[i-1]){
                let temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                swap = true
            }
        }

    }while(swap)
        return  arr
}
let arrf=[4,2,5,3,7,1]
console.log(sort(arrf))
