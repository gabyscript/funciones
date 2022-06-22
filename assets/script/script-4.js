const firstBox = document.querySelector('#box-1');
const secondBox = document.querySelector('#box-2');
const thirdBox = document.querySelector('#box-3');
const fourthBox = document.querySelector('#box-4');

const colorA= "yellow";
const colorS= "black";
const colorD= "coral";
let colorGlobal = "";

document.addEventListener('keydown',function(event) {
    if (event.key === 'a') {
        colorGlobal = colorA        
    } else if (event.key === 's') {
        colorGlobal = colorS          
    } else if (event.key === 'd') {
        colorGlobal = colorD        
    } else {
        colorGlobal = ""        
    }
    console.log("El color seleccionado es " + colorGlobal)
})

function cambiarColor(elem) {
    if (colorGlobal == "") {
        elem.style.backgroundColor = "aliceblue";
        return;
    } 

    elem.style.backgroundColor = colorGlobal    
}

firstBox.addEventListener('click', () => cambiarColor(firstBox))

secondBox.addEventListener('click',() => cambiarColor(secondBox))

thirdBox.addEventListener('click', () => cambiarColor(thirdBox))

fourthBox.addEventListener('click',() => cambiarColor(fourthBox))
