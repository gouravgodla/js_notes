// how to accept user Input 
// there are two wats to do it that are following

// 1. easy way =window prompt
// 2. professional way = html textbox

// 1 way
let username;
// username = window.prompt("what your username?");
// console.log(username);

// 2 way

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}