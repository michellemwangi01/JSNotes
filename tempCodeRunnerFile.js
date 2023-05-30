const numbers3 = [1,2,3,4,5,6,7,8,9,10]
let [one,,three,,five,...rest] = numbers3
console.log(`${one} and ${three} and ${five} and ${rest}`)
console.log(rest)