window.onload = addEventListners;

var model =  {
    add : function (a,b) {
        return a + b;

    }
    minus : function (a,b){
        return a - b;

    }
    multiply : function (a,b){
      return a * b;
    }
    division (a,b){
      return a / b;
    }




};



var controller = {
  answer:,
  splitAnswer: [],
  firstParse: function(answer) {
    if (answer.split("()")) {

    }else (answer.split("*")){
      this.splitAnswer =

    }

    this.splitAnswer = answer.split("+","-","*","/" );
  },




};


var view = {




};

function handleEqualsButton () {
  var answer = document.getElementById('answer') ;
  answer = answer.innerHTML ;
  controller.answer = answer;
  controller.firstParse(answer);
};

function addEventListners() {
  equalSign = document.getElementById("=");
  equalSign.addEventListners("click", handleEqualsButton());

  clear = document.getElementById('C');
  clear.addEventListners("click", handleClear());
};
