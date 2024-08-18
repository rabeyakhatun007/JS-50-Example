/*Example:1*/
function showText(){
	document.getElementById('s_text').innerHTML="Welcome to JavaScript World";
}


/*Example:2*/
function showContent(){
	document.getElementById('demo').innerHTML="Hello JavaScript!";
}


/*Example:3*/
function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}


/*Example:4*/
function bulbOn(){
	document.getElementById('img').src="images/on.gif";	
}
function bulbOff(){
	document.getElementById('img').src="images/off.gif";	
}


/*Example:5*/
function showContent(){
	document.getElementById('con').style.display="block";
}
function hideContent(){
	document.getElementById('con').style.display="none";
}


/*Example:6*/
var number1 = 5;
var number2 = 4;
var result = number1 + number2;
function showResult(){
	document.getElementById('result').innerHTML = "11";
}

/*Example:7*/
let x, y, z;  
x = 5;        
y = 6;        
z = x + y;   
document.getElementById('demo2').innerHTML="The value of z is " + z + ".";


/*Example:8*/
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById('demo3').innerHTML= c;

/*Example:9*/
let e, f, g;
e = 5; f = 6; g = e + f;
document.getElementById('demo4').innerHTML= g;


/*Example:10*/
document.getElementById("demo5").innerHTML =
"Hello Dolly!";


/*Example:11*/
function seeBlocks() {
  document.getElementById("demo6").innerHTML = "Hello Dolly!";
  document.getElementById("demo7").innerHTML = "How are you?";
}


/*Example:12*/
document.getElementById("demo8").innerHTML = 10.50;



/*Example:13*/
document.getElementById("demo9").innerHTML = 'John Doe';


/*Example:14*/
let r;
r = 6;
document.getElementById("demo10").innerHTML = r;


/*Example:15*/
document.getElementById("demo11").innerHTML = (5 + 6) * 10;


/*Example:16*/
let h, i;
h = 5;
i = 6;
document.getElementById("demo12").innerHTML = h + i;


/*Example:17*/
document.getElementById("demo13").innerHTML = 5 * 10;


/*Example:18*/
var j;
j = 5;
document.getElementById("demo14").innerHTML = j * 10;


/*Example:19*/
document.getElementById("demo15").innerHTML = "John" + " "  + "Doe";



/*Example:20*/
let k, l;
k = 5 + 6;
l = k * 10;
document.getElementById("demo16").innerHTML = l;

/*Example:21*/
let lastname, lastName;
lastName = "Rabeya";
lastname = "Khatun";
document.getElementById("demo17").innerHTML = lastName;

/*Example:22*/
document.getElementById("myH").innerHTML = "JavaScript Comments";
document.getElementById("myP").innerHTML = "My first paragraph.";


/*Example:23*/
let o = 5;      
let p = o + 2;  
document.getElementById("demo18").innerHTML = y;


/*Example:24*/
x1 = 5;
y1 = 6;
z1 = x1 + y1;
document.getElementById("demo19").innerHTML =
"The value of z1 is: " + z1;


/*Example:25*/
const x2 = 5;
const y2 = 6;
const z2 = x2 + y2;
document.getElementById("demo20").innerHTML =
"The value of z2 is: " + z2;


/*Example:26*/
var  x3 = 10;
{  
var x3 = 2;
}
document.getElementById("demo21").innerHTML = x3;


/*Example:27*/
try {
  const PI = 3.141592653589793;
  PI = 3.14;
}
catch (err) {
  document.getElementById("demo22").innerHTML = err;
}


/*Example:28*/
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");
document.getElementById("demo23").innerHTML = cars; 




/*Example:29*/
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";
document.getElementById("demo24").innerHTML = "Car owner is " + car.owner; 


/*Example:30*/
const  x4 = 10;
{  
const x5 = 2;
}
document.getElementById("demo25").innerHTML = "x5 is " + x4;


/*Example:31*/
let x6 = 5;
let y6 = 2;
let z6 = x6 + y6;
document.getElementById("demo26").innerHTML = "The sum of x6 + y6 is: " + z6;

/*Example:32*/
let x7 = 5;
let y7 = 2;
let z7 = x7 + y7;
document.getElementById("demo27").innerHTML = z7;


/*Example:33*/
let x8 = 5;
let y8 = 2;
let z8 = x8 * y8;
document.getElementById("demo28").innerHTML = z8;


/*Example:34*/
let x9 = 5 + 5;
let y9= "5" + 5;
let z9 = "Hello" + 5;
document.getElementById("demo29").innerHTML =x9 + "<br>" + y9 + "<br>" + z9;


/*Example:35*/
let x10 = 10;
document.getElementById("demo30").innerHTML = "Value of x10 is: " + x10;


/*Example:36*/
let q = 16 + "Volvo";
document.getElementById("demo31").innerHTML = q;


/*Example:37*/
let y11 = 50
let x11 = 10 + y11;
document.getElementById("demo32").innerHTML = "Value of x11 is: " + x11;


/*Example:38*/
let text = "Hello";
text += " World";
document.getElementById("demo33").innerHTML = text;

/*Example:39*/
let x12 = 10;
x12 -= 5;
document.getElementById("demo34").innerHTML = "Value of x12 is: " + x12;

/*Example:40*/
let x13 = 10;
x13 *= 5;
document.getElementById("demo35").innerHTML = "Value of x13 is: " + x13;



/*Example:41*/
let x14 = 10;
x14 **= 5;
document.getElementById("demo36").innerHTML = "Value of x14 is: " + x14;


/*Example:42*/
let x15 = 10;
x15 /= 5;
document.getElementById("demo37").innerHTML = x15;

/*Example:43*/
let x16 = 10;
x16 %= 5;
document.getElementById("demo38").innerHTML = "Value of x16 is: " + x16;

/*Example:44*/
let x17 = -100;
x17 <<= 5;
document.getElementById("demo39").innerHTML = "Value of x17 is: " + x17;

/*Example:45*/
let x18 = 100;
x18 ^= 5;
document.getElementById("demo40").innerHTML = "Value of x18 is: " + x18;

/*Example:46*/
let x19 = 100;
x19 &&= 5;
document.getElementById("demo41").innerHTML = "Value of x19 is: " + x19;

/*Example:47*/
let x20 = undefined;
x20 ||= 5;
document.getElementById("demo42").innerHTML = "Value of x20 is: " + x20;

/*Example:48*/
let x21;
document.getElementById("demo43").innerHTML = x21 ??= 5; 

/*Example:49*/
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

document.getElementById("demo44").innerHTML =
carName1 + "<br>" + 
carName2; 


/*Example:50*/
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
document.getElementById("demo45").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;


/*Example:51*/
let x22 = 34.00;
let x23 = 34;
let x24= 3.14;
document.getElementById("demo46").innerHTML =
x22 + "<br>" + x23 + "<br>" + x24;


/*Example:52*/
let s = 123e5;
let t = 123e-5;
document.getElementById("demo47").innerHTML =
s + "<br>" + t;


/*Example:53*/
let x25 = BigInt("123456789012345678901234567890");
document.getElementById("demo48").innerHTML = x25; 


/*Example:54*/
let x26 = 5;
let y26 = 5;
let z26 = 6;
document.getElementById("demo49").innerHTML =
(x26 == y26) + "<br>" + (x26 == z26);


/*Example:55*/
const cars2 = ["Saab","Volvo","BMW"];
document.getElementById("demo50").innerHTML = cars2[0];

/*Example:56*/
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
document.getElementById("demo51").innerHTML =
person.firstName + " is " + person.age + " years old.";


/*Example:57*/
document.getElementById("demo52").innerHTML = 
typeof "" + "<br>" +
typeof "John" + "<br>" + 
typeof "John Doe";


/*Example:58*/
document.getElementById("demo53").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);



/*Example:59*/
let car3;
document.getElementById("demo54").innerHTML =
car3 + "<br>" + typeof car3;


/*Example:60*/
let car4 = "";
document.getElementById("demo55").innerHTML =
"The value is: " + car4 + "<br>" + "The type is: " + typeof car4;

/*Example:61*/

/*Example:62*/

/*Example:63*/
















