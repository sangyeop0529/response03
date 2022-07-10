import data from './data01.json'
console.log(data.array)
console.log(data.null)
console.log(data.object.a)

// JSON객체 -> stringify(), parse()
const color = {
    title: 'red',
    sample: 'apple',
    no: 100
}

// 일반객체 -> json 만들기
const str = JSON.stringify(color)
console.log(str);

// JSON -> javascript
const obj = JSON.parse(str)
console.log(obj)