// for activity 12, 13, & 14.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "top_songsDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    
    //need to run each function individually.

    // getsongsbyArtist() // working
    // multisongbyArtist(); // working
    // songbyRange(); // working
    // searchSong(); // working
    topSongandAlbum();

  });
  
  
  function getsongsbyArtist() {

    //user needs to input Artist name.

    connection.query("SELECT * FROM top1000 where artist = ?",[process.argv[2]], function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }

  function multisongbyArtist() {
    connection.query("SELECT * FROM top1000 GROUP BY artist HAVING count(*) > 1", function(err, res) {
      if (err) throw err;
        for (var i = 0; i < res.length; i++){
            console.log(res[i].artist);
        }
      connection.end();
    });
  }

  function songbyRange() {

    //user needs to input rank between 1 and 1,099 record.

    connection.query("SELECT rank, artist, song, year FROM top1000 where rank between ? AND ?", 
    [[process.argv[2]],[process.argv[3]]],function(err, res) {
      if (err) throw err;
        for (var i = 0; i < res.length; i++){
            console.log(res[i].rank, res[i].artist, res[i].song, res[i].year);
        }
      connection.end();
    });
  }

  function searchSong() {

    //user needs to input song name.

    connection.query("SELECT * FROM top1000 where song = ?",[process.argv[2]],function(err, res) {
      if (err) throw err;
        console.log(res);
        
        connection.end();
    });
  }

  //for activity 14
  function topSongandAlbum() {
    // connection.query("SELECT topalbum.album, topalbum.year, top1000.artist, top1000.song FROM topalbum INNER JOIN top1000 ON topalbum.artist = top1000.artist AND topalbum.year = top1000.year",
    connection.query("SELECT topalbum.year, topalbum.album, topalbum.rank, top1000.song, top1000.artist FROM topalbum INNER JOIN top1000 ON (topalbum.artist = top1000.artist AND topalbum.year= top1000.year)", 
    function(err, res) {
      if (err) throw err;
        for (var i = 0; i < res.length; i++){ 
            console.log(res[i].album, res[i].artist, res[i].song, res[i].year);
        }
        connection.end();
    });
  }

  // franklin code for activity 14.
//   function songAndAlbumSearch() {
//     inquirer
//       .prompt({
//         name: "artist",
//         type: "input",
//         message: "What artist would you like to search for?"
//       })
//       .then(function(answer) {
//         var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
//         query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
//         query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year ";
  
//         connection.query(query, [answer.artist, answer.artist], function(err, res) {
//           console.log(res.length + " matches found!");
//           for (var i = 0; i < res.length; i++) {
//             console.log(
//               "Album Position: " +
//                 res[i].position +
//                 " || Artist: " +
//                 res[i].artist +
//                 " || Song: " +
//                 res[i].song +
//                 " || Album: " +
//                 res[i].album +
//                 " || Year: " +
//                 res[i].year
//             );
//           }
  
//           runSearch();
//         });
//       });
//   }
