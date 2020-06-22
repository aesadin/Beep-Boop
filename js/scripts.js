// Business Logic

function createRange(start, end) {
  const mkArray = [];
  for (let i = start; i <= end; i++) {
      mkArray.push(i);
      console.log(mkArray)
  }
  return mkArray;
}

function toBeep(array) {
  const elements = []
  for (let i = "1"; i < "1000"; i++) {
    if (array.includes("3")) {
      elements.push("Won't you be my neighbor?");
    } else if (array.includes("2")) {
        elements.push("Boop!");
    } else if (array.includes("1")) {
        elements.push("Beep!")
    } else {
        elements.push(i)
    }
  }
  return elements;
}





//UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("#numInput").val();
    const toNumber = parseInt(userInput)
    const numberArray = createRange(1, toNumber)
    
    const stringArray = numberArray.toString().split(",")
    stringArray.forEach(function(string) {
      string.replace("3", "Won't you be my neighbor?")
      return stringArray
    })
    const beepString = toBeep(stringArray)
    

    

    $("p").html(beepString);
    $(".result").show();
  
    });
  });
