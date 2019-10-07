var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var isBeginner = true;
var total = 0;
var lang = 'Typescript';
var sentence = "I am a beginner:" + isBeginner + "\n  with " + total + " years of experience in " + lang + ".";
console.log('TCL: sentence', sentence);
//subtypes
var n = null;
var u = undefined;
var lang2 = u;
console.log('TCL: lang2', lang2);
var total2 = n;
console.log('TCL: total2', total2);
var list1 = [1, 2, 3];
var list2 = __spreadArrays(list1, [4, 5, 6]);
console.log('TCL: list2', list2);
//mixed types = tuple types
//tuple array numbers of elements are fixed
//and they have to match the order that it is defined
//so for fixed number of values with diffrent types,
//tuples are the way to go.
var person1 = ['yo', 22];
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log('TCL: Color', Color);
//enum values start with a value of zero.
//Red = 0,...
//if we need them to start at a different number,
//a starting number can be assaigned to the first enum.
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 3] = "red";
    Color2[Color2["green"] = 4] = "green";
    Color2[Color2["blue"] = 5] = "blue";
})(Color2 || (Color2 = {}));
var c = Color.Green;
console.log('TCL: c', c);
console.log('TCL: Color2', Color2);
//any type
//if expecting a value from user or another library, use any
var randomVal = 5;
console.log('TCL: randomVal', randomVal);
randomVal = true;
randomVal = 'a string now';
console.log('TCL: randomVal', randomVal);
//unknown type
var randomVal2 = 5;
console.log('TCL: randomVal2', randomVal2);
randomVal2 = true;
randomVal2 = 'a string now';
console.log('TCL: randomVal2', randomVal2);
//type assertion/casting
randomVal2 === false;
console.log(typeof randomVal2);
//check if obj has a name property
//hasName takes in an obj with type any,
//and returns obj which contains the name property as string.
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(randomVal2)) {
    console.log(randomVal2.name);
}
//union of types
var multiTypes; //number or boolean
multiTypes = 20;
multiTypes = true;
//functions
function add(num1, num2) {
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
function divide(num1, num2, num3) {
    if (!!num3)
        return num1 / num2 / num3;
    return num1 / num2;
}
console.log(divide(9, 3));
console.log(divide(9, 3, 2));
function fullName(person) {
    return person.firstName + " " + person.lastName;
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
var p2 = {
    firstName: 'Kal',
    lastName: 'El'
};
console.log(fullName(p));
//interface properties can be optional
//user forms are a good place to use optional properties..
//..'?'
function fullName2(person) {
    return person.firstName + " " + person.lastName;
}
console.log(fullName2(p2));
//classes and access modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.emploName = name;
    }
    Employee.prototype.greet = function () {
        if (!!this.emploName)
            return "Good evening " + this.emploName;
        return null;
    };
    return Employee;
}());
var emp1 = new Employee('some sucker');
console.log(emp1.greet());
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        var _this = _super.call(this, managerName) || this;
        _this.managerName = managerName;
        return _this;
    }
    Manager.prototype.delegate = function (employee) {
        if (!!this.managerName)
            return this.managerName + " is delegating task to " + employee;
        return null;
    };
    return Manager;
}(Employee));
var manager = new Manager('Some Fuckface');
console.log(manager.delegate(emp1.emploName));
