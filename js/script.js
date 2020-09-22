$(document).ready(function(){

  var searchMovie = "Il Padrino";

  $.ajax(
    {

      "url": "https://api.themoviedb.org/3/search/movie"
      "data": {
        "api_key":"998db081c3b816179a3b215856e82b99",
        "query": searchMovie,
        "language": "it-IT"
      },
      "method": "GET"
      "success": function(data){
        console.log(data);
      },
      "error": function(err){
        alert("Errore!");
      }
    }


  )





});
