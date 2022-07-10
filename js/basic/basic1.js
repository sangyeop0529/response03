// 생성자 함수
function Book(type, title) {
    this.type = type
    this.title = title
    //this.action = function(){}
}
Book.prototype.action = function(){
    console.log(`${this.type} : ${this.title}`)
}

// 인스턴스
// const photoshop = new Book('graphic', 'photo')
// const script = new Book('it', 'javascript')
// const html = new Book('it', 'html5')

// photoshop.action();
// script.action();
// html.action();

// 배열인스턴스
const it = [new Book('graphic', 'photo'), 
            new Book('it', 'javascript'), 
            new Book('it', 'html5')
        ]

// for문
let num = it.length
console.log(num)
for(let i = 0; i <= num-1; i++) {
    it[i].action();
}

// for in
for (let index in it) {
    it[index].action();
}

// for of
for (let item of it) {
    item.action();
}