let red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

let center = document.querySelector(".center");

let getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColorChanger = (element) => {
    return element.addEventListener("mouseenter",()=>{
        center.style.backgroundColor = getBGColor(element);
    })
}

magicColorChanger(red);
magicColorChanger(cyan);
magicColorChanger(violet);
magicColorChanger(orange);
magicColorChanger(pink);