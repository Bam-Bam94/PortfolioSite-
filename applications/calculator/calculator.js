window.onload = function () {


  var buttonIDs = ["(",")","%","C","7","8","9","/","4","5","6","x","1","2","3","-","0",".","=","+"];
  var buttonListners= [];

var model =  {
    a : 0,
    b : 0,
    getA : function () {
      a = document.getElementById("answerBox").innerHTML;
        document.getElementById("answerBox").value = 0;

    },
    //Stop here
    add : function (b) {
        a = this.getA;
        b = document.getElementById("answerBox").value;
        document.getElementById("answerBox").value = a + b;

    },
    minus : function (b){
        a = this.getA;
        b = document.getElementById("answerBox").value;
        document.getElementById("answerBox").value = a - b;

    },
    multiply : function (b){
      a = this.getA;
      b = document.getElementById("answerBox").value;
      document.getElementById("answerBox").value= a * b;
    },
    division (b){
      a = this.getA;
      b = document.getElementById("answerBox").value;
      document.getElementById("answerBox").value= a / b;

    },
    clear : function() {
      a = 0;
      b = 0;
      document.getElementById("answerBox").value = 0;
      controller.answerHTML= "";
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
  },
  handleSymbol: function(x){
    if (x == "+"){
      model.add;
    }else if (x == "-"){
      model.minus;
    }else if (x == "*"){
      model.multiply;
    }else if (x == "/"){
      model.division;
    }else if (x == "C"){
      model.clear();
    };

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
  var answer = document.getElementById('answer');


};

function addEventListners() {
  equalSign = document.getElementById("=");
  //equalSign.addEventListners("click", handleEqualsButton());

  clear = document.getElementById('C');
  //clear.addEventListners("click", handleClear());
};

function addPush(x){
if (isNaN(x) && x!= "."){
  controller.handleSymbol(x);
}else{
  console.log(x);
  controller.AnswerArray.push(x);
  controller.makeNumber();
  controller.AnswerArray = [];
}



  };


  function addNumberListnersList() {
    for (i=0;i<buttonIDs.length;i++){
      var buttonName = document.getElementById(buttonIDs[i]);
      buttonName.addEventListener('click', function(){
          //console.log(this.id);
          addPush(this.id);

        });

      buttonListners.push(buttonName);
      console.log(buttonListners);
    };


  };

  addNumberListnersList();

};
