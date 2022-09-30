let grid = document.getElementById('grid');
let size = 256;
let small = document.getElementById('small');
let medium = document.getElementById('medium');
let large = document.getElementById('large');
let boxes = document.querySelectorAll('div.box');


function createBox(size) {
    for (i = 0; i < size; i++) {
        
        square = document.createElement('div');

        if (size === 256){
            square.classList.add('small-box');
        }

        if (size === 1024){
            square.classList.add('medium-box');
        }

        if (size === 4096){
            square.classList.add('large-box');
        }
        grid.appendChild(square);    
}}




small.addEventListener('click', function(){
    grid.innerHTML = "";
    createBox(256);
});

medium.addEventListener('click', function(){
    grid.innerHTML = "";
    createBox(1024);

});

large.addEventListener('click', function(){
    grid.innerHTML = "";
    createBox(4096);

});


createBox(size)