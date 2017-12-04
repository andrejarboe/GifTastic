// A $( document ).ready() block.
$(document).ready(function () {

    /* Global varables 
     **********************************/
    var topics = ['space', 'stars', 'black hole'];

    /* functions
     *****************************/
    function displayButtons() {
        //clear space buttons
        $('#space-buttons').empty();

        //make buttons
        for(var i=0; i<topics.length; i++){
            console.log(topics[i]);
            var button = $('<button>');
            button.text(topics[i]);
            button.attr('data-name', topics[i]);
            button.attr('class', 'button');

            $('#space-buttons').append(button);
        }
    }

    // make a new button
    function newButton(){
        $('#submit').on('click', function(){
            topics.push($('#search').val()); 
            displayButtons();           
        });
    }

    //grab button data
    function makeGifs(){

    }

    //start the site
    function start(){
        displayButtons();
        newButton();
    }
    
    /* Running code
    ******************************/
    start();
});