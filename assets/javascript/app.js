// A $( document ).ready() block.
$(document).ready(function () {

    /* Global varables 
     **********************************/
    var topics = ['space', 'stars'];

    /* functions
     *****************************/
    function displayButtons() {
        for(var i=0; i<topics.length; i++){
            console.log(topics[i]);
            var button = $('<button>');
            button.text(topics[i]);
            $('#space-buttons').append(button);
        }
    }
    
    /* Running code
    ******************************/
    displayButtons();

});