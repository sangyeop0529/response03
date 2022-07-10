class People {
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    action(){
        console.log(`이름은 ${this.name}이고 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }
}

const list = [
    new People('영희','18','여'),
    new People('철수','19','남'),
    new People('민수','17','남')
]

list[0].action();
list[1].action();
list[2].action();