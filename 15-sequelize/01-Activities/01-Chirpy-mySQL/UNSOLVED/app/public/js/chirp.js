// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
// $.ajax({
// method: "GET",
// url: "/api/all"
// }).then(function(data) {
// console.log(data);
// showChirps(data);
// });

// function showChirps(chirps){
//     $("#chirps").empty();
//     for (let i = 0; i < chirps.length; i++) {
//         const element = chirps[i];

//         addOneChirp(element);        
//     }
// }

// function addOneChirp(chirp){
//     var newChirpElement = $("<div>");
//         newChirpElement.addClass("chirp");
//         newChirpElement.append('<p>${chirp.author}</p>');
//         newChirpElement.append('<p>${chirp.chirp}</p>');
//         newChirpElement.append('<p>${chirp.time_created}</p>');
//         $("#chirps").append(newChirpElement);
// }

// $("#addChirp").click(function(event){
//     event.preventDefault;

//     var author = $("#author").val().trim();
//     var chirp = $("#chirp").val().trim();

//     $.post("/api/chirps", {
//         author,
//         chirp
//     }).then (function(data){
//         showChirps(data);
//     });
// })



// franklin code
$.ajax({
    method: "GET",
    url: "/api/all"
  }).then(function(data){
    console.log("ajax get: ", data);
    showChirps(data);
  
  });
  //chirps is the table.
  function showChirps(chirps){
    // $("#chirpsarea").empty();
    for (let i = 0; i < chirps.length; i++) {
      const element = chirps[i];
      console.log("showChirps() element: ", element);
      addOneChirp(element);
    }
  }
  
  // chirpColumn can be anything
  function addOneChirp(chirpColumn){
    var newChirpElement = $("<div>");
    newChirpElement.addClass("chirp");
    newChirpElement.append(`<p>${chirpColumn.author}</p>`);
    newChirpElement.append(`<p>${chirpColumn.chirp}</p>`);
    newChirpElement.append(`<p>${chirpColumn.time_created}</p>`);
    $("#chirpsarea").append(newChirpElement);
    console.log("add ui chirp ", newChirpElement);
    
  }
  
  $("#addChirp").click(function(event){
    event.preventDefault();
  
    var author = $("#author").val().trim();
    var chirp = $("#chirp").val().trim();
  
    $.post("/api/chirps", {
      author,
      chirp
    }).then(function(data){
      console.log("AFTER POST: ", data);
      showChirps(data);
    });
  })
















