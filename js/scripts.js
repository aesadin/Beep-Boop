
//Business Logic
function beepBoop(userNumber) {
  let numberArray = [];
  for(i = 1; i < userNumber; i++) {
    if ([i].toString().includes(3)) {
      numberArray.push("Won't you be my neighbor?");
    } else if ([i].toString().includes(2)) {
      numberArray.push("Boop!");
    } else if ([i].toString().includes(1)) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(i);
    }
  } 
  console.log(numberArray)
  return numberArray;
};



//UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userNumber = parseInt($("#numInput").val())
    const transformedArray = beepBoop(userNumber)

    $("p").html(transformedArray);
    $(".result").show();

  });
    
});
