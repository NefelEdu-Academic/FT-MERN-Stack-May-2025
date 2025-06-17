// String
let username : string = "Alex"
let firstName : string
firstName = "Ali"

console.log(username, firstName);

// number
let age: number
age = 19
console.log(age);

// boolean
let isValid : boolean = true

console.log(!isValid);

// null / undefined
let obj : null //undefined
obj = null
console.log(obj);

// any
let anyData : any 
console.log(typeof anyData);

anyData = "20"
console.log(anyData);
console.log(typeof anyData);

// void
function greeting(): void{
    console.log("Hello World");
    
}
greeting()

function sumNumbers(a: number, b: number): number{
    return a+b
}

let result: number = sumNumbers(10,20)
console.log(result);


// Arrays
let numbers : number[] = [1,2,3,4]

// Tuples
let person : [string, number] = ["Alice", 25]

// Enums
enum Role{
    Admin,
    User,
    Visitor,
    SuperAdmin
}

let userRole: Role = Role.SuperAdmin

// Union types
let id : string | number
id = 3
id = "d123df45568d"
console.log(id);


// interfaces
interface Book{
    _id: string
    title: string
    nbOfPages : number
    author: string
    image? : string //Optional property
}

let book1 : Book = {
    _id: "a12a233z56",
    author: "author 1",
    nbOfPages:200,
    title: "title 1",
    image: "rdfghjkledfvgbhj"
}

let book2: Book = {
  _id: "b66455d6g1hy",
  author: "author 2",
  nbOfPages: 100,
  title: "title 2"
};

function getBookInfo(book : Book): string{
    return book.image
      ? `id: ${book._id} title: ${book.title} # pages: ${book.nbOfPages} author: ${book.author} image ${book.image}`
      : `id: ${book._id} title: ${book.title} # pages: ${book.nbOfPages} author: ${book.author}`;
}

console.log(getBookInfo(book1));
console.log(getBookInfo(book2));


// Classes
class Person {
    private username: string
    private age: number
    private nickname?: string
    // constructor
    constructor(personName: string, personAge: number, personNickName?:string){
        this.username = personName
        this.age = personAge
        this.nickname = personNickName
    }

    greet(): string{
        return `Hello my name is ${this.username}`
    }
}

const firstPerson = new Person("Ali", 20, "aloulou")
console.log(firstPerson);
console.log(firstPerson.greet());
