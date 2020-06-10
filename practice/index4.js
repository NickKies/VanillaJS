console.log(document);

const title = document.getElementById("title");
const tit = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

console.log(title);

function init() {
    title.innerHtML = "Hi From JS";
    title.style.color = BASE_COLOR;
    tit.style.backgroundColor = "black";
    console.dir(document);

    document.title = "I own you now";

    //console.log("I have been resized");
    //window.addEventListener("resize", handleResize());
    window.addEventListener("resize", handleResize);
    //title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
}

init();

function handleResize(event) {
    console.log(event);
}

function handleClick() {
    const currerntColor = title.style.color;
    if ( currerntColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function handleOffline() {
    console.log("bye bye");
}
function handleOnline() {
    console.log("welcome back")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOffline);

