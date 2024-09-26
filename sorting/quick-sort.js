let arr=[3,5,3,7,2,18,4,8]


// function partition (arr,low,high){

// let pivot = arr[high]
// let i = low-1

//     for(let j = low ;j < high ; j++){
//         if(arr[j]<=pivot){
//             i++
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//     [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
//     return i+1
// }

// function Quicksort(arr,low,high){

//     if(low < high){

//         let pivot = partition(arr,low,high)

//         Quicksort(arr,low,pivot-1)
//          Quicksort(arr,pivot+1,high)
//     }
//     return arr

// }

// const res = Quicksort(arr,0,arr.length-1)
// console.log(res)


function quick(arr){
    if(arr.length<2)return arr

    let povit = arr[Math.floor(arr.length / 2)];


    let left =[]
    let right =[]
    let equal =[]

    for(let i=0;i<arr.length;i++){

        if(arr[i]<povit){

            left.push(arr[i])

        }else if(arr[i]>povit){

            right.push(arr[i])

        }else{

            equal.push(arr[i])
        }
    }

    return [...quick(left),...equal,...quick(right)]
}

const res=quick(arr)
console.log(res)