document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "json"
  }).done(function(responseData){
    var candidates = responseData.candidates;
    for (var i = 0; i < candidates.length; i++) {
      var li = $("<li>");
      li.html(candidates[i].name + ": " + candidates[i].votes + " votes");
      $(".candidates").append(li);
    }
  });
});
