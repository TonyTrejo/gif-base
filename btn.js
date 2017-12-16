<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  // Initial array of movies
  var topics = ["South Park", "Rick and Morty", "Family Guy", "The Simpsons"];
  // Function for displaying movie data
  function renderButtons() {
        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#toon-view").empty();
    // Looping through the array
    for (var i = 0; i < topics.length; i++) {
    // button creator
      var a = $("<button>");
      a.addClass("toon");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#toon-view").append(a);
      console.log(a)
    });