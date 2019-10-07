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
