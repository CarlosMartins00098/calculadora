function getHistorico() {
  return document.getElementById("valor-de-historico").innerText;
}

function printHistorico(num) {
  document.getElementById("valor-de-historico").innerText=num;
}

function getSaida() {
  return document.getElementById("valor-de-saida").innerText;
}

function printSaida(num) {
  if(num=="") {
    document.getElementById("valor-de-saida").innerText=num;
  } else {
    document.getElementById("valor-de-saida").innerText=getNumeroFormatado(num);
  }         
} 

function getNumeroFormatado(num) {
  if(num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("pt-br");
  return value;
}


function reverseNumberFormat(num) {
  return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operador");
for(var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    if(this.id == "clear") {
      printHistorico("");
      printSaida("");
    } else if(this.id == "backspace") {
      var output = reverseNumberFormat(getSaida()).toString();
      if(output) { 
        output = output.substr(0,output.length-1);
        printSaida(output);
      }
    } else {
      var output = getSaida();
      var history = getHistorico();
      if(output == "" && history != "") {
        if(isNaN(history[history.length-1])) {
          history = history.substr(0, history.length-1);
        }
      }
      if(output != "" || history != "") {
        output = output == ""?
        output:reverseNumberFormat(output);
        history = history+output;
        if(this.id == "=") {
          var result = eval(history);
          printSaida(result);
          printHistorico("");
        } else {
          history = history + this.id;
          printHistorico(history);
          printSaida("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("numero");
for(var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
    var output = reverseNumberFormat(getSaida());
    if(output != NaN) { 
      output = output + this.id;
      printSaida(output);
    }
  });
}
