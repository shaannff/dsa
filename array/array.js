
//............................binery search ................


let elements = [1, 2, 3, 4, 5, 6, 78, 87, 93];


function binarySearch(data){
    let l = 0 
    let r =elements.length-1;
    console.log(r,l);
    while(l<r){
        let mid = Math.floor((l + r) / 2);
        if(data == elements[mid]){
            console.log("$$");
            return mid+1;
        }
        else if(data>elements[mid]){
            console.log("**")
            l = mid + 1;
        }
        else if(data< elements[mid]){
            console.log("##")
            r = mid - 1;
        }
    }
}
console.log(binarySearch(78))