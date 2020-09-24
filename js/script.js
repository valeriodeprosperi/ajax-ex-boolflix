
$(document).ready(function(){
  // valore input search
    $("#search-button").click(function() {
      var searchMovie = $("#search-bar").val();
      resetSearch();
      getMovies(searchMovie);
    });

  // valore input invio
 $("#search-bar").keyup(
     function(event) {
       if (event.which == 13) {
         var searchMovie = $("#search-bar").val();
         resetSearch();
         getMovies(searchMovie);
       }
     }
   );

   function getMovies(searchString) {


  $.ajax(
    {

      "url": "https://api.themoviedb.org/3/search/movie",
      "data": {
        "api_key":"998db081c3b816179a3b215856e82b99",
        "query": searchString,
        "language": "it-IT"
      },
      "method": "GET",
      "success": function(data){
        renderMovie(data.results);
      },
      "error": function(err){
        alert("Errore!");
      }
    }


  )

};














function renderMovie(movies){
  // console.log(movies);
  var source = $("#movie-template").html();
var template = Handlebars.compile(source);

// stampare film chiamata api
for (var i = 0; i < movies.length; i++) {
console.log(movies[i]);

var title = movies[i].title;
var originalTitle = movies[i].original_title;
var lang = printFlags(movies[i].original_language);
var vote = printStars(movies[i].vote_average);

// prepariamo context
var context = {
  "title": title,
  "original_title": originalTitle,
  "lang":lang,
  "vote": vote
};
// prepariamo html
var html = template(context);

// inseriamo html nel tag ul
$("#list-movies").append(html);
};

};
};


function printStars(num){
  // trasformo numero in numero intero
  var num = Math.ceil( num / 2);
  var string = "";

  for (var i = 1; i <= 5; i++){
    if(i <= num){
      string += "<i class= 'fas fa-star'></i>";
    } else {
      string += "<i class= 'fas fa-star'></i>";
    }
  }
    return string;
  }



function printFlags(lang){
var flags =[
  "it",
  "en"
];
if (flag == "it") {
    var flag = '<img class="flag" src="img/it.svg" alt="it">';
  } else  (flag == "en") {
    flag = '<img class="flag" src="img/gb.svg" alt="it">';
}


}
