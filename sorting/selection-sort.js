// function selection(arr){
//     let n=arr.length-1
//     for(let i=0;i<=n;i++){
//         let mid =i
//         for(let j=i+1;j<=n;j++){
//             if(arr[j]<arr[mid]){
//                 mid = j
//             }
//         }
//         [arr[i],arr[mid]]=[arr[mid],arr[i]]
//     }
//     return arr
// }
// let arr=[8,5,9,3,7,2]
// const res=selection(arr)
// console.log(res)



let arr=[8,5,9,3,7,2]


function selection (arr){
        for(let i=0;i<arr.length;i++){

            let mid=i       
        
            for(let j=i+1;j<arr.length;j++){

                if(arr[j]<arr[mid]){
                    mid = j
                }
            }
            [arr[i],arr[mid]]=[arr[mid],arr[i]]
        }
        return arr
}
console.log(selection(arr))


