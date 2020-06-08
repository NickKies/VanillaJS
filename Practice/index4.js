console.log(document);

const title = document.getElementById("title");
const tit = document.querySelector("#title");

console.log(title);

title.innerHtML = "Hi From JS";
title.style.color = "red";
tit.style.backgroundColor = "black";
console.dir(document);

document.title = "I own you now";