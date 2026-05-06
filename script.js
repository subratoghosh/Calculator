let a=document.getElementById("dis");
let b=document.getElementById("1");
let c=document.getElementById("2");
let d=document.getElementById("3");
let e=document.getElementById("4");
let f=document.getElementById("5");
let g=document.getElementById("6");
let h=document.getElementById("7");
let i=document.getElementById("8");
let j=document.getElementById("9");
let k=document.getElementById("0");
let l=document.getElementById("sub");
let m=document.getElementById("res");
let plus = document.getElementById("pl");
let minus = document.getElementById("mi");
let product = document.getElementById("pro");
let divide = document.getElementById("di");
let mod = document.getElementById("mod");


b.addEventListener("click", function () {
    a.innerHTML += "1";
});

c.addEventListener("click", function () {
    a.innerHTML += "2";
});

d.addEventListener("click", function () {
    a.innerHTML += "3";
});

e.addEventListener("click", function () {
    a.innerHTML += "4";
});

f.addEventListener("click", function () {
    a.innerHTML += "5";
});

g.addEventListener("click", function () {
    a.innerHTML += "6";
});

h.addEventListener("click", function () {
    a.innerHTML += "7";
});

i.addEventListener("click", function () {
    a.innerHTML += "8";
});

j.addEventListener("click", function () {
    a.innerHTML += "9";
});

k.addEventListener("click", function () {
    a.innerHTML += "0";
});



plus.addEventListener("click", function () {
    a.innerHTML += "+";
});

minus.addEventListener("click", function () {
    a.innerHTML += "-";
});

product.addEventListener("click", function () {
    a.innerHTML += "*";
});

divide.addEventListener("click", function () {
    a.innerHTML += "/";
});

mod.addEventListener("click", function () {
    a.innerHTML += "%";
});

l.addEventListener("click", function () {
    try {
        a.innerHTML = eval(a.innerHTML);
    }
    catch {
        a.innerHTML = "Error";
    }
});

m.addEventListener("click", function () {
    a.innerHTML = "";
});