
// when we click the submit btn
$("#submit-btn").on('click', function(event) {
    event.preventDefault();
    // save the query as a variable
    var searchTerm = $("#text-input").val().trim();
    // build the queryURL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";    
    // query giphy api using our searchTerm
    $.ajax({
        url: queryURL,   
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // console.log(results[i].images.fixed_height.url);
        var results = response.data
        // loop over the response, and for each gif
        for (var i = 0; i < results.length; i++) {
            // build an html element to hold the gif
            var imgSrc = results[i].images.fixed_height.url;
            var imageElement = $("<img>");
            var title = $("<p>").text(results[i].title)
            // set the src attribute = the giphy address
            imageElement.attr('src', imgSrc);
            // append that element to the page
            imageElement.appendTo(".gifs");
            title.appendTo(".gifs");
        }

    });

    // empty the search box
    $("#text-input").val("");
})

// incorporate the giphy api



