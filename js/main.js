keyClickCounter = 1;
gridSize = 80;

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

function eraseBoard() {
    $('.row-cells').remove();
}

$('.grid').on('click', function() {
    $('.row-cells').hover(function() {
        $(this).css('background-color', 'blue');
        
        $('.grid').on('dblclick', function() {
            $('.row-cells').unbind('mouseenter mouseleave');
        });
    });
});

$('#clear').on('click', function() {
    $('.row-cells').css('background-color', 'white');
});

$('#generate').on('click', function() {
    eraseBoard();
    gridSize = prompt("Please choose the size of the sketchpad (2 - 128)");
    createBoard(gridSize);
});
