// Your code goes here

// One
let intro = document.querySelector(".intro img");
intro.addEventListener("mouseover", (event) => {
    intro.src = "img/SafariTour.jpg";
    setTimeout(function () {
        intro.src = "img/fun-bus.jpg";
    }, 2500);
}, false);

// Two
let introColor = document.querySelector(".intro h2");
introColor.addEventListener("click", (event) => {
    event.target.style.color = "pink";
    setTimeout(function () {
        event.target.style.color = "black";
    }, 2500);
}, false);

// Three
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    imgZoom.style.transform = `scale(${scale})`;
}

let scale = 1;
const imgZoom = document.querySelector('.img-content');
imgZoom.onwheel = zoom;

// Four
let introFont = document.querySelector(".text-content p");
introFont.addEventListener("dblclick", (event) => {
    event.target.style.font = "italic bold 20px arial,serif";
    setTimeout(function () {
        event.target.style.font = 'Roboto, san-serif';
        event.target.style.fontWeight = 'normal';
        event.target.style.fontStyle = 'initial';
        event.target.style.fontSize = 'initial';
    }, 2500);
}, false);

// Five
window.addEventListener('beforeprint', (event) => {
    console.log('Do not bother printing this');
});

// Six
window.addEventListener('keydown', checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode == '84') {
        alert("The 't' key has been pressed!");
    }
}

// Seven
// window.addEventListener('keyup', checkKeyPress, false);
// function checkKeyPress(key) {
//     if (key.keyCode == '32') {
//         alert("The 'spacebar' key has been pressed!")
//     }
// }

// // Eight
// window.addEventListener('keypress', checkKeyPress, false);
// function checkKeyPress(key) {
//     if (key.keyCode == '65') {
//         alert("The 'A' key has been pressed!")
//     }
// }

//  Nine
