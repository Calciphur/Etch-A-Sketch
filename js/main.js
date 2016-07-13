gridSize = 80;      //Stores the length and width value of the game board. default 80.
penColor = 'blue';  //Stores the color value of the pen. default blue.


//Draws the initial game board with a length and width of 80 cells.
$(document).ready(function() {
    var $grid = $('.grid');
    
    for (i = 1; i <= gridSize; i++) {
        var row = '<div class="row">';
        
        for (j = 1; j <= gridSize; j++) {
            row += '<div class="row-cells">'+'</div>';
        }
        
        row += '</div>';
        $grid.append(row);
    } 
});

//Creates a square 'board' of div's. length and width are defined by the gridSize //variable.
function createBoard(gridSize) {
    var $grid = $('.grid');
    
    for (i = 1; i <= gridSize; i++) {
        var row = '<div class="row">';
        
        for (j = 1; j <= gridSize; j++) {
            row += '<div class="row-cells">'+'</div>';
        }
        
        row += '</div>';
        $grid.append(row);
    } 
    
    $('.row-cells').css('height', Math.ceil(800/gridSize));
    $('.row-cells').css('width', Math.ceil(800/gridSize));
}


//Erases all div's associated with the .row-cells class
function eraseBoard() {
    $('.row-cells').remove();
}


//One left click begins the draw effect.
$('.grid').on('click', function() {
    $('.row-cells').hover(function() {
        $(this).css('background-color', penColor);
        
        //double-clicking the left mouse button ends the draw effect.
        $('.grid').on('dblclick', function() {
            $('.row-cells').unbind('mouseenter mouseleave');
        });
    });
});


//Changes the background color of all grid cells to the default white.
$('#clear').on('click', function() {
    $('.row-cells').css('background-color', 'white');
});


//Erases the board and creates a new one.
$('#generate').on('click', function() {
    eraseBoard();
    gridSize = prompt("Please choose the size of the sketchpad (2 - 128)");
    createBoard(gridSize);
});


//Change the pen color by clicking on the respective color in the drop-down menu.
$('#color-red').on('click', function() {
    penColor = 'red';
});

$('#color-blue').on('click', function() {
    penColor = 'blue';
});

$('#color-purple').on('click', function() {
    penColor = 'purple';
});

$('#color-yellow').on('click', function() {
    penColor = 'yellow';
});

$('#color-green').on('click', function() {
   penColor = 'green'; 
});

$('#color-orange').on('click', function() {
    penColor = 'orange';
});
