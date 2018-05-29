// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newBook = {
    title: $("#title").val().trim(),
    author: $("#author").val().trim(),
    genre: $("#genre").val().trim(),
    pages: $("#pages").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBook)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#author").val("");
  $("#genre").val("");
  $("#pages").val("");

});

// // this will go to api.routefile.
// // Add sequelize code to create a book
// app.post("/api/new", function(req, res) {
//   Book.create({
//     //instead of req.bdy
//     title: req.body.title,
//     author: req.body.author,
//     genre: req.body.genre,
//     pages: req.body.pages
//   }).then(function(result) {
//     res.end();
//   });    
// });
