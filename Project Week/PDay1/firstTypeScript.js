// String
var username = "Alex";
var firstName;
firstName = "Ali";
console.log(username, firstName);
// number
var age;
age = 19;
console.log(age);
// boolean
var isValid = true;
console.log(!isValid);
// null / undefined
var obj; //undefined
obj = null;
console.log(obj);
// any
var anyData;
console.log(typeof anyData);
anyData = "20";
console.log(anyData);
console.log(typeof anyData);
// void
function greeting() {
    console.log("Hello World");
}
greeting();
function sumNumbers(a, b) {
    return a + b;
}
var result = sumNumbers(10, 20);
console.log(result);
// Arrays
var numbers = [1, 2, 3, 4];
// Tuples
var person = ["Alice", 25];
// Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Visitor"] = 2] = "Visitor";
    Role[Role["SuperAdmin"] = 3] = "SuperAdmin";
})(Role || (Role = {}));
var userRole = Role.SuperAdmin;
// Union types
var id;
id = 3;
id = "d123df45568d";
console.log(id);
var book1 = {
    _id: "a12a233z56",
    author: "author 1",
    nbOfPages: 200,
    title: "title 1",
    image: "rdfghjkledfvgbhj"
};
var book2 = {
    _id: "b66455d6g1hy",
    author: "author 2",
    nbOfPages: 100,
    title: "title 2"
};
function getBookInfo(book) {
    return book.image
        ? "id: ".concat(book._id, " title: ").concat(book.title, " # pages: ").concat(book.nbOfPages, " author: ").concat(book.author, " image ").concat(book.image)
        : "id: ".concat(book._id, " title: ").concat(book.title, " # pages: ").concat(book.nbOfPages, " author: ").concat(book.author);
}
console.log(getBookInfo(book1));
console.log(getBookInfo(book2));
// Classes
var Person = /** @class */ (function () {
    // constructor
    function Person(personName, personAge, personNickName) {
        this.username = personName;
        this.age = personAge;
        this.nickname = personNickName;
    }
    Person.prototype.greet = function () {
        return "Hello my name is ".concat(this.username);
    };
    return Person;
}());
var firstPerson = new Person("Ali", 20, "aloulou");
console.log(firstPerson);
console.log(firstPerson.greet());
