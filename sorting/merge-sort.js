let arr=[4,3,2,1,7,5,9,6]

function sort(arr){
    if(arr.length<2)return arr
    let mid = Math.floor(arr.length / 2)
    let left =arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(sort(left),sort(right))
}
function merge(left,right){

    let sortted=[]

    while(left.length && right.length){
        if(left[0]<right[0]){
            sortted.push(left.shift())
        }else{
            sortted.push(right.shift())
        }
    }
    return [...sortted,...left,...right]
}

console.log(sort(arr))














// // Sort function to recursively divide the array and merge sorted halves
// function sort(arr) {
//     // Base case: If the array has 1 or 0 elements, it's already sorted
//     if (arr.length < 2) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     // Recursively sort both halves and merge them
//     return merge(sort(left), sort(right));
// }

// // Function to merge two sorted arrays into one sorted array
// function merge(left, right) {
//     let sorted = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sorted.push(left.shift()); // Remove the first element and add it to sorted
//         } else {
//             sorted.push(right.shift()); // Remove the first element and add it to sorted
//         }
//     }

//     // Concatenate any remaining elements from left and right arrays
//     return [...sorted, ...left, ...right];
// }

// const sortedArr = sort(arr);
// console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 9]
