$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    const userNumber = paresInt($("#input").val());
    


    $(".result").show();
    
  });
});  

//Business Logic
const numberArray = [];

function range(start, end) {
  for (let i = 0; i <= userNumber; i++) {
    numberArray.push(i);

  };
  let numberArray;
};

const newArray = [];
for (const element of numberArray) {
  if (element === 3) {
    element.replace("Won't you be my neighbor?");
  } else if (element === 2) {
    element.replace("Boop!");
  } else if (element === 1) {
    element.replace("Beep!");
  }

}