// Business logic
var convertion = function (num,str) {
  var symbols = str.split(",");
  var result = "";
  if (num < 0){
    alert("Please enter positive number!");
    return;
  }
  if (symbols.length > 3){
    return;
  } else if (symbols.length === 1){
    var i = num;
    result = symbols[0];
    while (i != 1){
      result = result.concat(symbols[0]);
      i --;
    }
    return result;
  }
  if (num === 0){
    return result = "";
  } else if (num === 1 || num === 2 || num === 3) {
    var i = num;
    result = symbols[0];
    while (i != 1){
      result = result.concat(symbols[0]);
      i --;
    }
    return result;
  } else if (num === 4){
      result = symbols[0].concat(symbols[1]);
      return result;
  } else if (num === 5){
      result = symbols[1];
      return result;
  } else if (num === 6 || num === 7 || num === 8) {
    var i = num;
    result = symbols[1];
    while (i != 5){
      result = result.concat(symbols[0]);
      i --;
    }
    return result;
  } else if (num === 9){
      result = symbols[0].concat(symbols[2]);
      return result;
  }

}





var romanNumTranslator = function(str){
  var numbers = parseInt(str);
  if (isNaN(numbers)){
    alert("Please enter a number!");
  } else if (numbers < 0 || numbers > 3999) {
    alert("Please enter positive number. And you cannot count higher than 3,999 in Roman numerals.");
    return;
  }
  var arrOfNumbers = str.split("");
  var output = "";

  if (arrOfNumbers.length == 1){
    return output = convertion(parseInt(arrOfNumbers[0]), "I,V,X");
  } else if (arrOfNumbers.length == 2){
    output = convertion(parseInt(arrOfNumbers[0]), "X,L,C");
    return output =output + convertion(parseInt(arrOfNumbers[1]), "I,V,X");
  } else if (arrOfNumbers.length == 3){
    output = convertion(parseInt(arrOfNumbers[0]), "C,D,M");
    output = output + convertion(parseInt(arrOfNumbers[1]), "X,L,C");
    return output = output + convertion(parseInt(arrOfNumbers[2]), "I,V,X");
  } else if (arrOfNumbers.length == 4){
    output = convertion(parseInt(arrOfNumbers[0]), "M");
    output = output + convertion(parseInt(arrOfNumbers[1]), "C,D,M");
    output = output + convertion(parseInt(arrOfNumbers[2]), "X,L,C");
    return output = output + convertion(parseInt(arrOfNumbers[3]), "I,V,X");
  }
}

//user interface logic starts here
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $(".output").hide();
    var userInput = $("#number").val();

    var output = romanNumTranslator(userInput);
    $(".romanNumeral").text(output);

    $(".output").show();
  });
});
