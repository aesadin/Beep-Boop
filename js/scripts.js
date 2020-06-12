$(document).ready(function() {
  console.log("Script executing!");
  $("#formOne").submit(function(event) {
    console.log("Submit form successfully reached.");
    event.preventDefault();

    const userNumber = paresInt($("#numInput").val());
    const numberArray = [];

    function range(start, end) {
      for (let i = 0; i <= userNumber; i++) {
        numberArray.push(i);
      };
    
    };

    $("#output").text(userNumber);
    $("#formOne").hide();
    $(".result").show();
    
  });
});  

//Business Logic

for(i = 0; i < numberArray.length; i++) {
  if (numberArray[i] === 1) {
    numberArray[i] = "Beep!";
  };
  
};

for(i = 0; i < numberArray.length; i++)  {
  if (numberArray[i] === 2) {
    numberArray[i] = "Boop!";
  };
};

for(i = 0; i < numberArray.length; i++)  {
  if (numberArray[i] === 3) {
    numberArray[i] = "Won't you be my neighbor!";
  };
};

function beepReplace(numberArray) {
  const arrayToString = numberArray.toString("")
  for (const element of arrayToString) {
    for(i = 0; i < element.length; i++) {
      if (element[i] === 1) {
        let element = "Beep!"
      }
    }
  }
}

function boopReplace(numberArray) { 
  for (const element of arrayToString) {
    for(i = 0; i < element.length; i++) {
      if (element[i] === 2) {
        let element = "Beep!"
      }
    }
  }
}