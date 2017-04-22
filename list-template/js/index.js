$(document).ready(function() {
  console.log("ready!");
  
  $("#important-events h1").css("background-color", "steelblue");

  $("section>p").css("background-color", "yellow");
  
  $("li:first-child").css("background-color", "steelblue");
  
  $("#unimportant-events").hide();
  
  $("#important-events li:even").css("background-color", "steelblue");
  
  $("#important-events").find("span").css("color", "yellow").css("font-size", "45px");
  
});