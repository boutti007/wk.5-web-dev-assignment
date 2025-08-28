// Part 1: Variables + Conditionals
let count = 0;
if (count === 0) console.log("Start!");

// Part 2: Functions
function greet() { alert("Hello!"); }
function addItem(text) {
  let li = document.createElement("li"); li.textContent = text;
  document.getElementById("list").appendChild(li);
}

// Part 3: Loops
for (let i=1; i<=3; i++) addItem("Item " + i);
let j=0; while(j<2){ console.log("Loop " + j); j++; }

// Part 4: DOM Interactions
document.getElementById("title").style.color = "blue";
document.getElementById("btn").addEventListener("click", greet);
document.body.style.backgroundColor = "#f0f0f0";
