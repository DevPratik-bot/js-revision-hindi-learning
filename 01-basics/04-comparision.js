console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)


//*  the reason is that equality checks == and comparisons >  <> = <= work differently 
//comparisons  convert null to a number treating  it as 0 thats why (3) null  >=0  is true and (1) null >0 is false

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)


//=== strict check


