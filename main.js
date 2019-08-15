// function search() {
//   //console.log($("#txtSearchBar").val());
//   $.ajax({
//     type: "GET",
//     url: "https://www.omdbapi.com/",
//     data: { s: $("#txtSearchBar").val(), apikey: "cbf17422" },
//     dataType: "json",
//     success: function(data) {
//       //console.log(data);
//       $("#SearchResults").html("");
//       $.each(data.Search, function(index, element) {
//         var html = "";
//         var imdbLink = "http://www.imdb.com/title/" + element.imdbID;
//         html +=
//           '<div class="omdb-card"> <div class="omdb-header" ' +
//           '   style="background: url(' +
//           element.Poster +
//           ');"><div class="header-icon-container"><a href="' +
//           imdbLink +
//           '" ' +
//           '  target="_blank"><i class="material-icons header-icon"></i> </a> </div> ' +
//           '   </div> <div class="omdb-content"> <div class="omdb-content-header"> ' +
//           '<a href="' +
//           imdbLink +
//           '" target="_blank"> <h3 class="omdb-title">' +
//           element.Title +
//           "</h3> " +
//           '</a> </div> <div class="omdb-info"> <div class="info-section"> <label>Year</label> ' +
//           "  <span>" +
//           element.Year +
//           '</span> </div> <div class="info-section"> <label>Type</label> ' +
//           "  <span>" +
//           element.Type +
//           "</span> </div> </div> </div> ";
//         $("#SearchResults").append(html);

//       });

//       if (jQuery.type(data.Error) != "undefined") {
//         $("#SearchResults").append(
//           '<div class="alert alert-info"><strong>Sorry! </strong>' +
//             data.Error +
//             "</div>"
//         );
//       }
//     }
//   });

// }
// $('').autoComplete({
//   source: function(term, response){
//       $.getJSON('/some/ajax/url/', { q: term }, function(data){ response(data); });
//   }
// });
// $("#txtSearchBar").autocomplete({

//   source: function(request, response) {
//     $.ajax({
//       url: "https://www.omdbapi.com/",
//       type: 'GET',
//       dataType: "json",
//       data: { s: $("#txtSearchBar").val(), apikey: "cbf17422" },
//       success: function(data) {
//         $("#list").html("");
//         $.each(data.Search, function(index, element) {
//           var html = "";
//           var imdbLink = "http://www.imdb.com/title/" + element.imdbID;
//             html +='<div class="list-inline"> '+
//                     '<li> '+
//                     '<a href="' +
//                     imdbLink +
//                     '" target="_blank"> <h3 class="omdb-title">' +
//                     element.Title +
//                     "</h3> "
//                     $("#list").append(html);
//                   });

// });
var result = []
$("#txtSearchBar").keyup(function() {

  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/",
    data: { s: $("#txtSearchBar").val(), apikey: "cbf17422" },
    dataType: "json",
    success: function(data) {

result=data;
//     if (data.Search !== undefined && data.Search.length > 0) {
//       data.Search.forEach(function (item) {
//         result.push(item.Title)
//       })
// console.log(data)
//       console.log(result)

//       $("#txtSearchBar").autocomplete({
//         source: result
//       });
//     }


  //     $("#SearchResults").html("");
  // $.each(data.Search, function(index, element) {
  //   var html = "";
  //   var imdbLink = "http://www.imdb.com/title/" + element.imdbID;
  //   html +=
  //       '<div class="omdb-card"> <div class="omdb-header" style="background: url(' +
  //       element.Poster +
  //       ');"><div class="header-icon-container"><a href="' +
  //       imdbLink +
  //       '" target="_blank"><i class="material-icons header-icon"></i> </a> </div> </div> <div class="omdb-content"> <div class="omdb-content-header"> <a href="' +
  //       imdbLink +
  //       '" target="_blank"> <h3 class="omdb-title">' +
  //       element.Title +
  //       '</h3> </a> </div> <div class="omdb-info"> <div class="info-section"> <label>Year</label> <span>' +
  //       element.Year +
  //       '</span> </div> <div class="info-section"> <label>Type</label> <span>' +
  //       element.Type +
  //       "</span> </div> </div> </div> </div>";
  //   $("#SearchResults").append(html);
  // });
  //
  // if (jQuery.type(data.Error) != "undefined") {
  //   $("#SearchResults").append(
  //       '<div class="alert alert-info"><strong>Sorry!</strong>' +
  //       data.Error +
  //       "</div>"
  //   );
  // }
}
});
});
/*
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#txtSearchBar" ).autocomplete({
    source: availableTags
  });
} );
*/
