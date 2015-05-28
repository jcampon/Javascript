function Student(name, age) {
    this.name = name;
    this.age = age;
    return this;
}

/*
function ScienceStudent(name, age) {
    
	var studentObject = Student.call(this, name, age);
	
	this.Student = Student.call(this, name, age);
    this.Student.subject = "Physics";
}
*/

 
function ScienceStudent(name, age) {
    Student.call(this, name, age);
    this.subject = "Physics";
}

function Classroom() {
	this.scienceStudent = new ScienceStudent("Ignored", 10);
	Student.call(this.scienceStudent, "RealName", 20);
}

var classroom = new Classroom();
console.log(classroom);

//ScienceStudent.prototype = Object.create(Student.prototype);

var stud1 = new ScienceStudent('DJ', 32);

console.log(Student('StraightCall', 10));

var studentObject = new Student("ObjectCreated", 11);
console.log(studentObject);

console.log(stud1);
console.log(stud1.name + ", " + stud1.subject);


/*
var obj_add1 = function func_Add1(num1, num2) 
{
    var result = num1 + num2;
    return result;
};

var i = obj_add1(34, 67);
console.log(i);

// console.log(func_Add1(1, 2)); this will throw error as obj_add1 is undefined

function func_Add2(num1, num2) 
{
    var result = num1 + num2;
    return result;
};
var j = func_Add2(5, 5);
console.log(j);
console.log("func_Add2(5, 10) = " + func_Add2(5, 10));

(function func_3() 
{
    var output = "Pepe!";
	console.log(output);	
})();

var foo = {
    fooAge: 37,
    o: function () {
        return this.fooAge;
    }
};
var res = foo.o();
console.log(res);

function Foo(num) {
 
    this.myVar = num;
	this.blablabla = "blablabla";
    console.log(this);
 
}
 
var fooObject = new Foo(12);
console.log(fooObject.myVar);
console.log(fooObject.blablabla);

var anotherFooObject = 
{
	WhatDoISayWhenISayBlah: "'Blah', of Course!",
	AnotherBlah: function(differentBlah)
	{
		this.WhatDoISayWhenISayBlah = differentBlah;
	}
}

console.log(anotherFooObject);
anotherFooObject.AnotherBlah("Well well well...");
console.log(anotherFooObject);

var testanotherFooObject.AnotherBlah
*/
