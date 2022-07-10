// 전개 연산자
const fruit = ['apple', 'orange', 'banana']

// function toOb(a, b, c) {
//     return {a,b,c}
// }

const toOb = (a,b,c) =>  ({a,b,c})
console.log(toOb(...fruit))

const word = ['red', 'yellow', 'blue', 'pink']
const myWorld = (a,b,...c) => ({a,b,c})
console.log (myWorld(...word))