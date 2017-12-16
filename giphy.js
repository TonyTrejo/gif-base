<script>
var topics = ["south park", "rick and morty", "robot chicken", "the venture bros", "family guy",]
$("#show").on("click", function () {
    topics = $(this).attr("#show");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "QEATE35eTALPtNfpbD4gL0HIZXBFNZrW&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
})
    .done(function (response) {
        var results = response.data;
        console.log(response)

        for (var [i] = 0; i < results.lenght; i++) {
            var gifDiv = $("<div class= '#show-buttons'>");
            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            Var toonImage = $('<img>');
            toonImage.attr('src', results[i].images.
                fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(toonImage);

            $('gifs-appear-here').prepend(gifDiv);
)
 }
})
</script>