window.onload = function () {


  var buttonIDs = ["(",")","%","C","7","8","9","/","4","5","6","x","1","2","3","-","0",".","=","+"];
  var buttonListners= [];

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

    answer = document.getElementById("answerBox");
    answer.value = displayValue;
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
 console.log(x);
 controller.AnswerArray.push(x);
 controller.makeNumber();


  };


  function addNumberListnersList() {
    for (i=0;i<buttonIDs.length;i++){
      var buttonName = document.getElementById(buttonIDs[i]);
      buttonName.addEventListener('click', function(){
          //console.log(this.id);
          addNumber(this.id);

        });

      buttonListners.push(buttonName);
      console.log(buttonListners);
    };


  };

  addNumberListnersList();

};
