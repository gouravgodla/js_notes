// const = a variable that can't be changed

//1 way to do this 
// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(circumference);


// 2 way to do this 
const PI = 3.14159;
let radius;
let circumference;
document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}