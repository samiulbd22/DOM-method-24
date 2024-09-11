const ab = document.getElementById("ab");
const p4 = document.createElement("p");
p4.textContent= "fourth element";
const p5 = document.createElement("p");
p5.textContent = "fifth element";
ab.before(p4,p5)
console.log(document.body)