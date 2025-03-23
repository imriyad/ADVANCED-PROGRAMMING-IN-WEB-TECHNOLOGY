let mess:string="Hello World!!";
console.log(mess);

let person:{name:string,age:number}={name:"mahdi",age:30};
console.log(person.age);

function add(a:number,b:number):number{
    return a+b;
}

//any
let a:any=20;   //Can store any datatype
console.log(a)

//Enum //for type safety
enum role{admin,user,guest}
let userRole:role=role.user;

//Touple //for Different Data Types in One Structure// Useful for Grouping Related Data

let ektalok:[string,number]=["akkas",30]
console.log(ektalok);
console.log(ektalok[0]);

ektalok.forEach((val)=>
{
    console.log(val);
    
})


//type aliases
type id=number|string
let userId:id="Sdss"    //number or string


//type unions
//One variable can be different type
type val=number|string;
let myVal:val;
myVal="hello"
myVal=367;


//literal type(variable er jnno value fixed kore dewa jabe)
let ss:"success"|"error"
ss="success"
//ss="pending"//error

//Interface
interface pr{
    name?:string;
    age?:number;
    address?:string;
}
let user:pr={name:"bob",age:30}
console.log(user);


//Generic
//print any type data explicitly
function add1<T>(value:T):T{
    return value
}
let num=add1<number>(10);
let str=add1<string>("aaa");
console.log(num,str);
