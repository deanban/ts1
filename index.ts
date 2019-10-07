let isBeginner: boolean = true;
let total: number = 0;
let lang: string = 'Typescript';

let sentence: string = `I am a beginner:${isBeginner}
  with ${total} years of experience in ${lang}.`;
console.log('TCL: sentence', sentence);

//subtypes
let n: null = null;
let u: undefined = undefined;

let lang2: string = u;
console.log('TCL: lang2', lang2);
let total2: number = n;
console.log('TCL: total2', total2);

const list1: number[] = [1, 2, 3];
const list2: Array<number> = [...list1, 4, 5, 6];
console.log('TCL: list2', list2);

//mixed types = tuple types
//tuple array numbers of elements are fixed
//and they have to match the order that it is defined
//so for fixed number of values with diffrent types,
//tuples are the way to go.
const person1: [string, number] = ['yo', 22];

//enum type
enum Color {
  Red,
  Green,
  Blue
}
console.log('TCL: Color', Color);
//enum values start with a value of zero.
//Red = 0,...
//if we need them to start at a different number,
//a starting number can be assaigned to the first enum.
enum Color2 {
  red = 3,
  green,
  blue
}
let c: Color = Color.Green;
console.log('TCL: c', c);
console.log('TCL: Color2', Color2);

//any type
//if expecting a value from user or another library, use any
let randomVal: any = 5;
console.log('TCL: randomVal', randomVal);
randomVal = true;
randomVal = 'a string now';
console.log('TCL: randomVal', randomVal);

//unknown type
let randomVal2: unknown = 5;
console.log('TCL: randomVal2', randomVal2);
randomVal2 = true;
randomVal2 = 'a string now';
console.log('TCL: randomVal2', randomVal2);

//type assertion/casting
(randomVal2 as boolean) === false;
console.log(typeof randomVal2);

//check if obj has a name property
//hasName takes in an obj with type any,
//and returns obj which contains the name property as string.
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(randomVal2)) {
  console.log(randomVal2.name);
}

//union of types
let multiTypes: number | boolean; //number or boolean
multiTypes = 20;
multiTypes = true;

//functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}
//fine->
console.log(add(1, 5));
//Argument of type '"string"' is not assignable to parameter of type 'number' ->
// console.log(add(1, 'string'));

//optional parameter: ?
//num3is optional
//optional parameters must always be written after the
//required parameters
function divide(num1: number, num2: number, num3?: number): number {
  if (!!num3) return num1 / num2 / num3;
  return num1 / num2;
}
console.log(divide(9, 3));
console.log(divide(9, 3, 2));

function fullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};
let p2 = {
  firstName: 'Kal',
  lastName: 'El'
};

console.log(fullName(p));

//interfaces
interface Person {
  firstName: string;
  lastName: string;
}
//interface properties can be optional
//user forms are a good place to use optional properties..
//..'?'

function fullName2(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}
console.log(fullName2(p2));

//classes and access modifiers
