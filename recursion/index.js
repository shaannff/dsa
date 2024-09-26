

function fib(n) {                   //O(n)
    if (n < 2) return n;              //O(1)
    return fib(n - 1) + fib(n - 2);   //O(n-1) + O(n-2) 
  }
  
  console.log(fib(7));

function f(n){
    if(n<=1){
        return
    }
    f(n-1)
    console.log(n)
    f(n-1)
}