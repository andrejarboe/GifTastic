// A $( document ).ready() block.
// $(document).ready(function () {

/* Global varables 
 **********************************/
var topics = ['space', 'stars', 'black hole'];



/* functions
 *****************************/
function displayButtons() {
    //clear space buttons
    $('#space-buttons').empty();

    //make buttons
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var button = $('<button>');
        button.text(topics[i]);
        button.attr('data-name', topics[i]);
        button.attr('class', 'button');

        $('#space-buttons').append(button);
    }
}

//start the site
function start() {
    displayButtons();
    $(document).on('click', '.button', makeGifs);

}

//grab button data
function makeGifs() {
    console.log('buton clicked');
    var apiKey = "3OIDYelHWdb40LzAq89bCSEY3DUWdDkd";
    var search = $(this).attr('data-name');
    var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=10";
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function (res) {
        console.log(res);
        var results = res.data;
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $('<div class="item">');
                var rating = results[i].rating;
                var p = $('<p>').text("Rating: " + rating);
                var img = $('<img>');

                img.attr('src', results[i].images.fixed_height_still.url);
                img.attr('data-still', results[i].images.fixed_height_still.url);
                img.attr('data-animate', results[i].images.fixed_height.url);
                img.attr('data-state', 'still');
                img.attr('class', 'gif');
                gifDiv.append(p);
                gifDiv.append(img);

                $('#gifs').prepend(gifDiv);
            }
        }
    });

}


/* Click handlers 
 ********************************************/
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var topic = $("#search").val().trim();

    // Adding movie from the textbox to our array
    topics.push(topic);

    $('#search').val('');

    // Calling renderButtons which handles the processing of our movie array
    displayButtons();
});


/* Running code
 ******************************/
start();



// });