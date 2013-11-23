$(document).ready(function(){

  // creates json object
  var jsonData = {
    name: {
      first: "sir",
      last: "russell"
    },
    quest: "I seek the grail",
    favorite_color: "blue"
  }

  // hands json and template into $.mustache function
  var renderedHtml = $.mustache("{{name.last}}, {{name.first}}: {{quest}}", jsonData);

  // replaces person id with rendered template via jquery's .html() function 
  $("#person").html(renderedHtml);


  // this works, but not statically – you'll need to run a simple server for the Access-Control-Allow-Origin errors to go away
  $.get('./partials/person.html', function(template) {
    
    // or, another way
    var html = Mustache.to_html(template, jsonData);

    $("#anotherPerson").html(html);
  });



});