$(document).ready(function(){
  var data = {
    name: {
      first: "sir",
      last: "russell"
    },
    quest: "I seek the grail",
    favorite_color: "blue"
  }

  var rendered = $.mustache("{{name.last}}, {{name.first}}: {{quest}}", data);
  
  $("#person").html(rendered);

});