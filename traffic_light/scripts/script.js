const circles = document.getElementsByClassName(`circle`);
const modificators = [`circle--red`, `circle--yellow`, `circle--green`];

let currentPos = 0;

const onClickNext = () => {  
    circles[currentPos].classList.remove(modificators[currentPos]);  
    currentPos !== 2 ? currentPos++ : currentPos = 0;
    circles[currentPos].classList.add(modificators[currentPos])  
}