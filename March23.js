var mess = "Hello World!!";
console.log(mess);
var person = { name: "mahdi", age: 30 };
console.log(person.age);
function add(a, b) {
    return a + b;
}
//any
var a = 20; //Can store any datatype
console.log(a);
//Enum //for type safety
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
    role[role["guest"] = 2] = "guest";
})(role || (role = {}));
var userRole = role.user;
//Touple //for Different Data Types in One Structure// Useful for Grouping Related Data
var ektalok = ["akkas", 30];
console.log(ektalok);
console.log(ektalok[0]);
ektalok.forEach(function (val) {
    console.log(val);
});
var userId = "Sdss"; //number or string
var myVal;
myVal = "hello";
myVal = 367;
//literal type(variable er jnno value fixed kore dewa jabe)
var ss;
ss = "success";
var user = { name: "bob", age: 30 };
console.log(user);
//Generic
function add1(value) {
    return value;
}
var num = add1(10);
var str = add1("aaa");
console.log(num, str);
