const ele = document.querySelector('#ele-1');
var color = "green"

function pintar(ele,color) {
    ele.style.backgroundColor = color;
}

pintar(ele,color)

ele.addEventListener('click', function(){
    pintar(ele, "yellow")
})
 
