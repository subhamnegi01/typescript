class person{
    name:string
    age:number

    constructor(n1:string,n2:number){
        this.name = n1
        this.age = n2
    }
    greet():void{
        console.log(`hi ${this.name}`)
    }
}

const obj1 = new person("Rohit", 20)
const obj2 = new person("Smith", 23)
console.log(obj1)
console.log(obj2)

console.log(obj1.name)
obj1.greet()


interface human{
    name:string
    age:number
}

interface Teacher extends human{
    salary:string
    id:number
}

const obj: Teacher={
    name:"Hitesh",
    age:20,
    salary:"12000",
    id:123
}


// Public private protected

class customer{
    public name:string
    private age:number
    protected balance:number

    constructor(name:string,age:number,balance:number){
        this.name = name
        this.age = age
        this.balance = balance
    }
    meet():number{
        this.age = this.age+15
        return this.age
    }
}

const p1 = new customer("Om", 20, 34312)
console.log(p1.name)
console.log(p1.meet())



class employee extends customer{
    salary:number

    constructor(salary:number, name:string, age:number, balance:number){
        super(name, age, balance)
        this.salary = salary
    }

    meet():number{
        console.log("Hello Coder Army")
        return 10
    }
}

const E1= new employee(12000, "Ramesh", 23, 24223)
console.log(E1)
console.log(E1.meet())



// Generic: Template

// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//     return a

// }

function value<T>(a:T):T{
    return a
}

console.log(value(10))
console.log(value("Rohit"))
console.log(value([10,11,12,13,14]))
console.log(value(true))



interface Admin<T>{
    name:string
    age:number
    adhar:T

}

const obj10: Admin<number>={
    name:"Ridhi",
    age:20,
    adhar: 1234
}
