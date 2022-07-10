class Fruit {
    constructor(title, color, price){
        this.title = title
        this.color = color
        this.price = price
    }

    action(){
        document.write(
            `<p>${this.title} : ${this.color} : ${this.price}원</p>`
        )
    }
}

const list = [new Fruit('apple', 'red', 1000),
            new Fruit('banana', 'yellow', 2000),
            new Fruit('grape', 'violet', 3000),
]

list[0].action();
list[1].action();
list[2].action();