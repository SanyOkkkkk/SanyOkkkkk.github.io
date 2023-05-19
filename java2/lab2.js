function pow(x, n)
{
    return x**n;
}
function sumTo(n)
{
    return (n*(n+1))/2

}
function factorial(n)
{
    //return BigInt(n ? (n * factorial(n-1)) : 1) ;
   var p=1;
   for (var f=1; f<=n; f++)
   {
       p=p*f;
    }
    
    return BigInt(p);
}
function fib(n){
    return BigInt(n<=1 ? n: fib(n-1)+fib(n-2));
}