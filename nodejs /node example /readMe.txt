
 
Pulls
Issues
Marketplace
Explore
 
@huang15n 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.

Read the guide

huang15n
/
javascript
 Unwatch 
1
 Star 0  Fork 0
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
 master 
javascript/javascript/javascript/javascript_crash_course.md
Go to file


Eddie Huang v1
Latest commit c6d4276 6 days ago
 History
 0 contributors
1101 lines (801 sloc)  21.9 KB
RawBlame
  
Javascript Basics Crash Course for Beginners + modern Javascript

background

you just need to know html and css to style up a page to utilize them to change the effects or the appearance of things on a webpage you swatted on those two areas it is time to get cracking with javascript

html -- controls the structure of your website css -- controls the presentation/design javascript -- adds behaviours and interactivity

javascript is a scripting language intentionally limited does not have the same features as other programming languages cannot communicate directly with a database , or file system on a computer, however its intended purpose is great at manipulating webpages

javascript is a client side language client/browser <- server html/css/js. php

do not rely on javascript javascript should enhance your audience's experience only do not rely on js to add core functionality to your website the official name of js is ECMAscript, jumped on that bandwagon

embed javascript into html web page annoying pop-up box

<script>
window.alert("hello");

</script>
they have been putting javascript for a long time, it is a big step up, the learning curve is not that steep , introduce yourself softly into js

where to put your javascript?

just paste at the bottom of your content before the closing body tag in some circumstance you are going to find links at the top here and there are occassions when that is absolutely find when the javascript is asynchronous and it loads in conjunction with your html page

you put it in an external file so it does not meess up your content page in your html

it is neater and it keeps things in a logical place

link that file to the external file

<script src="xxx.js"> </script>
externalize it and put it in separate file and then link that file at the bottom of the page using script reference

google chrome developer tools

right click -> resources console tab -> We can type in javascript in the browser so it can test things out , it can throw errors that it may have when it comes to js

syntax

it is beneficial before we write any code 1 javascript is case sensitive , case sensitive

function myFunction(){}
myFunction();
2 statement ends with semicolon carried on now technically speaking

3 whitespace is not sensitive generally they are performanicing the same tasks

4 comments similar to css, javascript // /* */

5 run from top to bottom follow particular order

variable

1 they can contain letters, numbers underscores 2 have a specific naming contention 3 we do not have to specify the type of the variable when we initalize it

outdated:

var Variable = value;
console.log(Variable);
we can change value or type of variables , name your variable in logical way this is what is known dynamic types , in other languages, you will have to specify the types of variable when you initialize it the takeaway points are that we initalize variables with the var keyword and we can set them to empower you in the same statement

I would advise you not to do that !!!!!

numbers, NaN, Strings

numbers: integer and real numbers

var value1 = 5; // number 
var value2 = "5"; // string 
value1 + value 2; // squashing going on is concatenation 
console.log(typeof(value1 + value2)) // string 
Math.round(5.999)
6
Math.ceil(5.999)
6
Math.floor(5.999)
5
you can supercharge yourself

NaN: not a number , it is hard to get your head around it

var a = NaN; 
undefined
if(isNaN(a)){
    console.log("a is NaN");
}
String:

var stringVariable = "this is O'Neil's book";
 
console.log(stringVariable);
var stringVariable = "this is O'Neil\"s book";
 
console.log(stringVariable);
VM1691:1 this is O'Neil"s book
var stringVariable = "this is O'Neil's book";
 
console.log(stringVariable.toUpperCase())
VM1791:1 THIS IS O'NEIL'S BOOK
 
console.log(stringVariable.toLowerCase())
VM1890:1 this is o'neil's book

console.log(stringVariable.length)
VM1946:1 
console.log(stringVariable.indexOf('is'))
2

if(stringVariable.indexOf('eddie')){
    console.log("cannnot find eddie");
}
VM2142:2 

console.log("abc" < "ABC")
VM2195:1 false
undefined
console.log("abc" > "ABC")
VM2207:1 true
undefined
console.log("abc".toUpperCase() === "ABC")
that is string in nutshell

slice method in strings:

var stringVariable = "this is O'Neil's book";
undefined
stringVariable.slice(2,10);
"is is O'"
stringVariable.slice(4,10);
" is O'"
split method in strings and put them in pockets of these arrays:

stringVariable.split(" ");
(4) ["this", "is", "O'Neil's", "book"]

scouring through and sitting through

mathematical operators

= + - / *

4 * "hello"
NaN
this makes no sense so javascript returns a NaN javascript concatenates strings with numeric values or strings you can only do is add a number to a string and that is concatenate

value + 2
3
value + 5 
6
value * 3 
3
value - 2 
-1
value / 2 
0.5
value % 2 
1
mathmatical shorthand methods

= + - / * ++ --

var value = 3; 
value += 2;
5
value -= 2;
3
value *= 2;
6
value /= 2;
3
value %/ = 2
value %= 2;
1
var value = 3;
value + "hello";
"3hello"
logging to the console

show you a couple of techniques that are used to test certain things including writing message or variables or values to console write out to the document

var value = 100;
document.write(value);
console.log(value);
these two different ways of writing the console

booleans

a boolean is a value either represents true or false it is used to evaluate certain circumstances

var value = true;
console.log(value);
Boolean(1 + 3)
true
Boolean(0)
false
Boolean(-1)
true
Boolean(false)
false
Boolean()
false
Boolean("hello")
true
Boolean(NaN)
false
but essentially what are using these expression is we are evaluating them to get back a true false value if this value is required

Control Flow & Logic

you do something and you get specific result all conditional statements in action

var value = 100;
undefined
if (value == 100){
    console.log("this is true");
}else {
    console.log("this is false");
}
we indent our code as it goes deeper into different code blocks

else if and comparison operators

<= , >= , ==, >, < , !

var value = 20;

if (value < 20){
    console.log("this is less than 20");
}else if (value > 20 && value < 100){
    console.log("this is less than 100 but greater than 20");
}else{
    console.log("something else");
}
=== match the value and type

== match the value but not type or type

5 < 2 
false
5 > 2 
true
5 <= 2 
false
5 >= 2 
true
5 == 2
false
!(5==2)
true
5 == 5 
true
5 === 5 
true
5 == "5"
true
5 === "5"
false
try a few things out

logical operators

&& and || or in a nutshell

5 == 2 || 5 == 5 
true
5 != 2 && 2 != 3
true
while loops

while(condition){

}

condition_variable = 1 
while(condition_variable < 10){
    console.log(condition_variable);
    condition_variable ++;
}
it is always go around a in loop

for loops

while loop may execute over and over and over, that is gonna crash your computer not a good thing we defintely need third component in right there where we add one to the variable each time around for(var counter; counter < numerOfTimes; counter++){

}

for (var i = 0 ; i < 10; i ++){
    console.log(i);
}
<a href="#">something </a>
<a href="#">something </a>
<a href="#">something </a>
<a href="#">something </a>
<a href="#">something </a>
for(var i = 0; i < links.length; i++){
    console.log(i);
}
VM645:2 0
VM645:2 1
VM645:2 2
VM645:2 3


for(var i = 0; i < links.length; i++){
    links[i].innerHTML = i;
}
break and continue

we have stripped down that for loop

for (var counter = 0 ; counter < 10; counter ++){
    console.log(counter);
    if (counter == 8) {break;}
}
for (var counter = 0 ; counter < 10; counter ++){
    
    if (counter == 8) { continue;} console.log(counter);
}
break statement will break out the loop anywhere you want continue statement, anything will no longer execute any of the code below continue , just skip out the code for this iteration of this loop

functions

this is what functions steps in essentially function group logical sections of code together perform that function for you, we call that function later on when we want to run that code function getAverage(firstParameter, secondParameter){ return (firstParameter + secondParameter) / 2; } getAverage(100,200) 150

so go ask ahead

variable scopes Local vs Global

var globalValue = 20; -- global function something(){ var localValue = 10; -- local }

scope defines which part of the variable is visible

the global variable can be declared outside of any kind of function a the top level of your javascript file a local variable is which defiend inside of a function it means that it can only be used within this function, it cannot be called later on outside of the function

array

an array is a single variable that can hold multiple variables and values an important thing is an array is stored wihtin a single variable

var Array = [];
Array[0] = 1;
1
Array[2] = "hello";
"hello"
Array[3] = 1.2;
1.2
console.log(Array);
VM2665:1 (4) [1, empty, "hello", 1.2]
Array[1] = true;
true



var anotherArray = [1,"hello", true, 1.2212,NaN];
undefined
console.log(anotherArray);
VM2881:1 


ar arrayExample = new Array();
var array = new Array(); is same as var array = []; array also properties and methods

var array = [23,1,21,29];
undefined
array.sort()
(4) [1, 21, 23, 29]
array.reverse() 
(4) [29, 23, 21, 1]
Objects

javascript uses objects! javascript uses a kidn of stripped down simplified version of the objects we can all properties on it and methods

strings, numbers, arrays , plus many more

real life example var myCar = new Cars(); myCar.drive();

notice the dot and these parentheses at the end and the properties when we call the methods

creating an object:

var myObject = new Object(); 
undefined
myObject.name = "Eddie"
"Eddie"
myObject.age = 28
28
myObject.education = "I do not know"
"I do not know"
myObject
{name: "Eddie", age: 28,  education: "I do not know"}
myObject.work = function work(){
 console.log("work work work!");   
};
ƒ work(){
 console.log("work work work!");   
}
myObject.work
ƒ work(){
 console.log("work work work!");   
}
myObject.work()

myObject.work = function (){
 console.log("work work work!");   
};
ƒ (){
 console.log("work work work!");   
}
myObject.work = () => {
 console.log("work work work!");   
};
() => {
 console.log("work work work!");   
}
myObject.work()


var myObject2 = {"name":"Jenny","age": 23, "Educaiton":"University" }
undefined
console.log(myObject2);



var myObject2 = {"name":"Jenny","age": 23, "Educaiton":"University" , work: function work(){console.log("this is my work!!!")}}
undefined
myObject2.work() 


var myObject3 = {"name":"Jamie","age": 23, "Educaiton":"University" , condition: function condition(name, age){console.log("her name is " + name + "\n and her age is " + age); } };
undefined
myObject3.condition()
VM1272:1 her name is undefined
 and her age is undefined
undefined
myObject3.condition("Jane","27")
VM1272:1 her name is Jane
 and her age is 27
we are assigining to that object

this keyword !!

var myObject4 = {
    name : "Jane",
    age : 27,
    talk: function(name,age){
    console.log(name+":"+age);
    }
};
undefined
console.log(myObject4.name);
VM1861:1 Jane
undefined
myObject4.talk('Jack',10);
var myObject4 = {
    name : "Jane",
    age : 27,    
    test: function() {console.log(this); },
    talk: function(name,age){
    console.log(name+":"+age);
    }
};
undefined
myObject4.test() 
go futher down the line I want to go one step futher , delve a little bit deeper this keyword refers to whatever object currently owns that space you use "this" keyword

console.log(this); prints the root of my document

myObject4.talk('Jack',10);
var myObject4 = {
    name : "Jane",
    age : 27,    
    test: function() {console.log(this); },
    talk: function(name,age){
    console.log(name+":"+age);
    }
};
undefined
myObject4.test() 
if you have test as {console.log(myObject4);} you are going to have to change everything it is a great time saver !! and also it is grateful when you are greating constructor

var myObject4 = {
    name : "Jane",
    age : 27,    
    test: function() {console.log(this.name); },
    talk: function(name,age){
    console.log(name+":"+age);
    }
};
undefined
myObject4.test() 
constructor function

if we want to create multiple objects, we can technically do this :

var myObject4 = {
    name : "Jane",
    age : 27,    
    test: function() {console.log(this.name); },
    talk: function(name,age){
    console.log(name+":"+age);
    }
};
undefined
myObject4.test() 

var myObject5 = {
    name : "Tiffany",
    age : 23,    
    test: function() {console.log(this.name); },
    talk: function(name,age){
    console.log(name+":"+age);
    }
};
undefined
myObject
we will have to change our properties, that is going to take up a lot of rooms in your javascript

constructor function

a constructor function is just a function that creates an object for us

var object = new Object(); var myArray = new Array(); undefined var myString = new String(); undefined var myObject = new Object(); undefined

we start with a captial letter when we are creating constructor functions

within these parentheses, we are going to pass in a couple of variables

var myIdentity = function(name,age){
    this.name = name;
    this.age = age;
}
this keywords to represent the object that we are making

we must use the new keyword!!!

var myIdentity = function(name,age){
    this.name = name;
    this.age = age;
    this.work = function(){
     console.log(this.name+":" +this.age);
    };

}
undefined
me.work();
VM3391:1 Uncaught TypeError: Cannot read property 'work' of undefined
    at <anonymous>:1:4
(anonymous) @ VM3391:1
me = myIdentity("Ed",29);
undefined
me.work();
Uncaught TypeError: Cannot read property 'work' of undefined
    at <anonymous>:1:4

var myIdentity = function(name,age){
    this.name = name;
    this.age = age;
    this.work = function(name,age){
     console.log(name+":" +age);
    };

}
undefined
var me = myIdentity("Ed",29);
undefined
me.work();
Uncaught TypeError: Cannot read property 'work' of undefined
    at <anonymous>:1:4


 myIdentity {name: undefined, age: undefined, work: ƒ}
me.work();
VM3660:5 undefined:undefined
undefined
var myIdentity = function(name,age){
    this.name = name;
    this.age = age;
    this.work = function work(name,age){
     console.log(this.name+":" +this.age);
    };

}
undefined
var me = new myIdentity("Ed",29);
undefined
me.work();
VM3804:5 Ed:29
date object

var myDate = new Date();
undefined
console.log(myDate);
VM3943:1 S

var myDate = new Date(1999,11,13)
myDate.getFullYear();
myDate.getDate();
myDate.getHours();
myDate.getTime();
getTime() is very useful when comparing dates

what is the DOM jn javascript

interactive pages : every html element in the doc is an object:

is an object
Document Object Model: the DOM is an application programming interface

use the DOM when we interact with web pages 1 add content to a html document 2 delete content from a html document 3 change content on a html document

the visual representation the model html / 
head body / |
ul div /\ | li p

these objects are laid out in a tree fashions we take one step further, we can introduce nodes and yet

Nodes

everything we can change in the document is a node -- elements -- text within elements -- html attribtues

what can we do with the dom? change the h1 text node at the top of the page change the background color of an element node animate the log node from left to right expand the height of an element node when you click on it

traversing the DOM

three javascript methods grab nodes or content and store them in variables 1 document.getElementByClassName(); 2 document.getElementByTagname(); return a list 3 document.getElementById();

javascript knows there should be only one id on each document

<body>
<ul> 
    <li class = "hello"> hello</li>
    <li class = "hello"> hello</li>
    <li class = "hello"> hello</li>
<li class = "hello"> hello</li>
<li class = "hello"> hello</li>

    
    </ul>


</body>

var lists = document.getElementsByClassName("hello");
undefined
for(var index = 0; index < lists.length; index++){
 console.log(index+ ":" + lists[index]);   
}
VM4473:2 0:[object HTMLLIElement]
VM4473:2 1:[object HTMLLIElement]
VM4473:2 2:[object HTMLLIElement]
VM4473:2 3:[object HTMLLIElement]
VM4473:2 4:[object HTMLLIElement]
undefined
for(var index = 0; index < lists.length; index++){
 console.log(index+ ":" + lists[index].innerHTML);   
}
VM4511:2 0: hello
VM4511:2 1: hello
VM4511:2 2: hello
VM4511:2 3: hello


var lists = document.getElementsByTagName("li");
undefined
console.log(lists[0]);
VM5073:1 <li class=​"hello">​…​</li>​
undefined
console.log(lists[0].getElementsByTagName("a"));
VM5144:1 HTMLCollection []
undefined
javascript change page content

properties: DOM_element.innerHTML = value; DOM_element.innerText = value; DOM_element.textContent = value;

var lists = document.getElementsByTagName("li");
undefined
lists[0].innerText = "good";
"good"

lists[0].textContent = "what???";
"what???"
javascript changing element attributes

DOM_element.element_name DOM_element.element_name = value; DOM_element.getAttribute("attribute_name"); DOM_element.setAttribute("attribute_name",value);

<ul> 
  <li class="hello" id="first" style="list-style-type:square">what???</li>
    <li class="hello"> hello</li>
    <li class="hello"> hello</li>
<li class="hello"> hello</li>
<li class="hello"> hello</li>

    
    </ul>
 #first {
     color:red;
     
     
    }
    .hello{
        
     background-color:blue;
        
    }
first.className
"hello"
first.id
"first"
first.attributes
var first = document.getElementById("first");
undefined
console.log(first);
VM6200:1 <li class=​"hello" id=​"first" style=​"list-style-type:​square">​::marker​"what???"</li>​
undefined
first.getAttribute("style");
"list-style-type:square"
first.setAttribute("style","list-style-type:round");
undefined
changing css styles

DOM_element.setAttribute("style",your_style); DOM_element.style.attribute = value;

var first = document.getElementById("first");

first.setAttribute("style","color:green");
//or 
first.style.color = "pink";
adding elements to the DOM

if I want it to be at the bottom of the stack dom_element.getElementByTagName();

var node_text = document.createTextNode("this is me");
undefined
node_a.appendChild(node_text);
"this is me"
node_li.appendChild(node_a);
<a>​this is me​</a>​
var lastElement = document.getElementsByTagName("li");
undefined
lastElement[lastElement.length-1].append(node_li);
undefined
remove element from the dom

var list = document.getElementsByClassName("hello");
undefined
list[4].removeChild()
VM9634:1 Uncaught TypeError: Failed to execute 'removeChild' on 'Node': 1 argument required, but only 0 present.
    at <anonymous>:1:9
(anonymous) @ VM9634:1
list[4].removeChild
ƒ removeChild() { [native code] }
list[4].removeChild(list[4].lastElementChild);
<li>​…​</li>​
list[4].removeChild(list[4].lastElementChild);


var list = document.getElementsByClassName("hello");
undefined
list[3].removeChild(list[3].lastChild);
javascript events

actions firing

you can write them directly into your html javascript should ideally be kept separate where possible

<ul> 
    <li class="hello" id="first" style="color: pink;">what???</li>
    <li class="hello" id="second"> hello</li>
    <li class="hello"> hello</li>
<li class="hello"></li>
<li class="hello"> hello</li>

    
    </ul>
var first = document.getElementById("first");
first.onclick = function(){window.alert("hello");}
var second = document.getElementById("second");
second.onmouseover = function(){ alert("on mouse over"); }


window.onload = function(){ alert("onload");}
we use window.onload to make sure we do not find javascript until the window has fully loaded. you do not have to use it for single bit of javascript that you write only when you write javascript it depends on all the elemtns being loaded in like this

Timer

after xx millisecond, I want it to fire , once setTimeout(function, interval_time_millisecond);

repeated: setInterval(funciton, interval_time_millisecond);

forms

myForm = document.forms[0]
<form action=​"/​action_page.php">​…​</form>​
dom_element.onfocus = function () {}
javascript libraries

general purpose
animation
form enhancement
video
many more by far the most popular library is jquery
what is next? ajax and json , regular expression & advanced validation

ajax is essentially a part of javascript
allows javascript to communciate with the server without having to leave web page
great example is when you zoom in google maps
json is just a way of organizing data & works well with ajax
lots in javascript have not covered in greater details

regular expression & advanced validation
oop object oriented programming
sliders, drag and drop, animated meanu's and etc
more details refer to the javascript comprehensive nodes :
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
