// ======================================================
// JAVASCRIPT LEARNING
// ======================================================


// ======================================================
// 1. CONSOLE
// ======================================================

console.log("Hello");


// ======================================================
// 2. DATA TYPES
// ======================================================

let name = "Mathesh";       // String
let age = 21;               // Number
let percentage = 99.88;     // Number
let isStudent = true;       // Boolean

console.log(name);
console.log(age);
console.log(percentage);
console.log(isStudent);


// ======================================================
// 3. VARIABLES
// ======================================================

let studentName = "Mathesh";
const college = "ABC College";
var city = "Madurai";

console.log(studentName);
console.log(college);
console.log(city);


// ======================================================
// 4. OPERATORS
// ======================================================

let a = 12;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponential:", a ** 2);


// Comparison operators

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


// Logical operators

let x = 10;
let y = 20;

console.log(x < y && y > 10);
console.log(x > y || y > 10);
console.log(!(x > y));


// ======================================================
// 5. DOM MANIPULATION
// ======================================================

// querySelector()

let hulk = document.querySelector(".hulk");

hulk.innerHTML = "Mathesh";

console.log(hulk);


// textContent

hulk.textContent = "Mathesh JavaScript";


// style

hulk.style.backgroundColor = "green";
hulk.style.color = "white";


// ======================================================
// 6. STORE DOM ELEMENT IN A VARIABLE
// ======================================================

let value = document.querySelector(".hulk");

value.textContent = "JavaScript Learning";

value.style.backgroundColor = "red";

console.log(value);


// ======================================================
// 7. CREATE ELEMENT
// ======================================================

let newTag = document.createElement("span");

newTag.textContent = "Mathesh";

console.log(newTag);


// ======================================================
// 8. APPEND
// ======================================================

let bodyTag = document.querySelector("body");

bodyTag.append(newTag);

console.log(bodyTag);


// ======================================================
// 9. CREATE DIV + SPAN
// ======================================================

let divTag = document.createElement("div");

divTag.className = "nest";

let spanTag = document.createElement("span");

spanTag.textContent = "Mathesh";

bodyTag.append(divTag);

divTag.append(spanTag);

console.log(bodyTag);


// ======================================================
// 10. CREATE IMAGE USING JAVASCRIPT
// ======================================================

let imageTag = document.createElement("img");

imageTag.src = "photo.jpg";
imageTag.alt = "My Image";

let imageContainer = document.querySelector(".ko");

imageContainer.append(imageTag);


// ======================================================
// 11. setAttribute()
// ======================================================

let anotherImage = document.createElement("img");

anotherImage.setAttribute("src", "photo.jpg");
anotherImage.setAttribute("alt", "My Image");

imageContainer.append(anotherImage);


// ======================================================
// 12. className
// ======================================================

let h1Tag = document.querySelector(".hTag");

console.log(h1Tag.className);


// Create new element and assign class

let createdHeading = document.createElement("h1");

createdHeading.className = "newHeading";

createdHeading.textContent = "New Heading";

bodyTag.append(createdHeading);

console.log(createdHeading.className);


// ======================================================
// 13. CREATE BUTTON
// ======================================================

let buttonContainer = document.querySelector(".sir");

buttonContainer.innerHTML = "<button>Click</button>";

console.log(buttonContainer);


// ======================================================
// 14. IF - ELSE
// ======================================================

let userAge = 21;

if (userAge >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// ======================================================
// 15. IF - ELSE WITH DOM
// ======================================================

let imageBox = document.querySelector(".blukan");

let image = "vijay";

let selectedImage = document.createElement("img");

if (image == "vijay") {

    selectedImage.setAttribute("src", "photo.jpg");
    selectedImage.setAttribute("alt", "Vijay Image");

} else {

    selectedImage.setAttribute("src", "photo.jpg");
    selectedImage.setAttribute("alt", "Default Image");

}

imageBox.append(selectedImage);


// ======================================================
// 16. SWITCH CASE
// ======================================================

let imageType = "vijay";

let switchImage = document.createElement("img");

switch (imageType) {

    case "vijay":
        switchImage.setAttribute("src", "photo.jpg");
        switchImage.setAttribute("alt", "Vijay Image");
        break;

    case "tech":
        switchImage.setAttribute("src", "photo.jpg");
        switchImage.setAttribute("alt", "Tech Image");
        break;

    default:
        switchImage.setAttribute("src", "photo.jpg");
        switchImage.setAttribute("alt", "Default Image");
        break;
}

let switchContainer = document.querySelector(".kanadi");

switchContainer.append(switchImage);


// ======================================================
// 17. FOR LOOP
// ======================================================

for (let i = 0; i < 10; i++) {

    console.log(i);

}


// ======================================================
// 18. FOR LOOP - ALGORITHM
// ======================================================

// Multiplication example

for (let i = 1; i <= 10; i++) {

    console.log(i * 2);

}


// ======================================================
// 19. FOR LOOP - BREAK
// ======================================================

for (let i = 0; i < 10; i++) {

    if (i == 5) {
        break;
    }

    console.log(i);
}


// ======================================================
// 20. FOR LOOP - CONTINUE
// ======================================================

for (let i = 0; i < 10; i++) {

    if (i == 7) {
        continue;
    }

    console.log(i);
}


// ======================================================
// 21. WHILE LOOP
// ======================================================

let count = 0;

while (count < 10) {

    console.log(count);

    count++;
}


// ======================================================
// 22. LET
// ======================================================

let number = 10;

number = 20;

console.log(number);


// ======================================================
// 23. CONST
// ======================================================

const fixedNumber = 100;

console.log(fixedNumber);


// ======================================================
// 24. VAR
// ======================================================

var oldVariable = "JavaScript";

console.log(oldVariable);


// ======================================================
// 25. ARRAY
// ======================================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);


// Array index

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// Change array value

fruits[1] = "Grapes";

console.log(fruits);


// Array length

console.log(fruits.length);


// ======================================================
// 26. ARRAY WITH LOOP
// ======================================================

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}


// ======================================================
// 27. OBJECT
// ======================================================

let car = {

    brand: "BMW",
    color: "White",
    model: "X5"

};

console.log(car);


// Access object values

console.log(car.brand);
console.log(car.color);
console.log(car.model);


// Change object value

car.color = "Black";

console.log(car);


// ======================================================
// 28. OBJECT WITH ARRAY
// ======================================================

let student = {

    name: "Mathesh",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"]

};

console.log(student.name);
console.log(student.age);
console.log(student.skills);

console.log(student.skills[0]);
console.log(student.skills[1]);
console.log(student.skills[2]);


// ======================================================
// 29. FUNCTION
// ======================================================

function add() {

    let a = 10;
    let b = 20;

    console.log(a + b);

}

add();


// ======================================================
// 30. FUNCTION WITH PARAMETERS
// ======================================================

function addition(a, b) {

    console.log(a + b);

}

addition(10, 20);
addition(50, 30);


// ======================================================
// 31. FUNCTION WITH RETURN
// ======================================================

function multiply(a, b) {

    return a * b;

}

let result = multiply(5, 4);

console.log(result);


// ======================================================
// 32. ANONYMOUS FUNCTION
// ======================================================

const greet = function () {

    console.log("Hello Mathesh");

};

greet();


// ======================================================
// 33. FUNCTION ASSIGNED TO VARIABLE
// ======================================================

const subtract = function (a, b) {

    return a - b;

};

console.log(subtract(20, 5));


// ======================================================
// 34. FUNCTION + DOM
// ======================================================

const inputBox = document.querySelector(".inputBox");
const inputButton = document.querySelector(".inputBtn");
const resultText = document.querySelector(".result");

inputButton.addEventListener("click", function () {

    let inputValue = inputBox.value;

    resultText.textContent = inputValue;

});