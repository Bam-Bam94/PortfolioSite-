window.onload = function () {


var model =  {
    add : function (a,b) {
        return a + b;

    },
    minus : function (a,b){
        return a - b;

    },
    multiply : function (a,b){
      return a * b;
    },
    division (a,b){
      return a / b;
    }




};



var controller = {
  answerHTML:"",
  AnswerArray: [],
  makeNumber: function () {
    for (i=0;i<this.AnswerArray.length;i++){
      this.answerHTML=this.answerHTML + this.AnswerArray[i];
    };
    view.displayValue();
  }

};


var view = {
     displayValue: function(){
     displayValue=controller.answerHTML;
     displayValue= displayValue.toString();
     console.log(displayValue);

     document.getElementById("answer")[0].placeholder = "hello";
  }



};

function handleEqualsButton () {
  var answer = document.getElementById('answer') ;


};

function addEventListners() {
  equalSign = document.getElementById("=");
  //equalSign.addEventListners("click", handleEqualsButton());

  clear = document.getElementById('C');
  //clear.addEventListners("click", handleClear());
};

function addNumber(x){
 var  NumberForArray = x
 controller.AnswerArray.push(NumberForArray);
 controller.makeNumber();


  };
  function addNumberListners(x) {
    x = 
    button = document.getElementById(x)
    button.addEventListners("click", addNumber(x) )

  };

};
