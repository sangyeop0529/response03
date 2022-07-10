const {a1, a2, a3} = {
    a1 : 10,
    a2 : 20,
    a3 : 30
}

console.log(a1);

const book = {
    type : 'it',
    title : 'html',
    price : 20000,
    //level : 5
}

const {type, title, price, level = 1} = book
console.log(type)
console.log(level)

// 1. 키의 이름 바꾸기
const welcome = type
console.log(type)

// 2. -> :
const graphic = {
    some : 'paint',
    bookname : 'painter'
}

const {some:subtitle, bookname} = graphic
//console.log(some)
console.log(subtitle)