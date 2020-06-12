$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();


    function getInputNum() {
      let userNumber = paresInt($("#input").val());
      return userNumber;
    }




