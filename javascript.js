let grid = document.getElementById('grid');
let size = 256;
let clear = document.getElementById('clear')
let small = document.getElementById('small');
let medium = document.getElementById('medium');
let large = document.getElementById('large');
let black = document.getElementById('black');
let rainbow = document.getElementById('rainbow');
let boxes = document.getElementsByClassName('box')

function createBox(size) {
    for (i = 0; i < size; i++) {
        
        square = document.createElement('div');
        
        if (size === 256){
            square.classList.add('small-box', 'box');
        }

        if (size === 1024){
            square.classList.add('medium-box', 'box');
        }

        if (size === 4096){
            square.classList.add('large-box', 'box');
        }
        grid.appendChild(square);


}}

function paintBlack(){
    for (i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('mouseover', function(e){
            
            e.target.style.backgroundColor="black"
            e.target.style.outline='none'
        })
    }
}

function paintRGB(){
    for (i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('mouseover', function(e){
            
            e.target.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
            e.target.style.outline='none';
        })
    }
}





small.addEventListener('click', function(){
    grid.innerHTML = "";
    size = 256
    createBox(256);
});

medium.addEventListener('click', function(){
    grid.innerHTML = "";
    size = 1024;
    createBox(1024);

});

large.addEventListener('click', function(){
    grid.innerHTML = "";
    size = 4096;
    createBox(4096);

});

clear.addEventListener('click', function(){
    grid.innerHTML = "";
    createBox(size);

});
black.addEventListener('click', paintBlack);
rainbow.addEventListener('click', paintRGB);

createBox(size)