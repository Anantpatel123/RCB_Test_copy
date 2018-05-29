var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "playlistdb"
  });

  connection.connect(function(err){
      if(err) throw(err);
      console.log("connected as id " + connection.threadId);
    //   getAllSongs();
      getsongsbyGenre()
  });

  function getAllSongs() {
        connection.query("SELECT * FROM songs", function(err, res) {
          if(err) throw err;
        console.log(res);               
      });
  }

  function getsongsbyGenre() {
    connection.query("SELECT * FROM songs where genre = ? AND artist = ?", [[process.argv[2]],[process.argv[3]]], function(err, res) {
      if(err) throw err;
    console.log(res);      
    connection.end();
  });
}