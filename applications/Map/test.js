/*window.onload = init;
function init(){
  var rightArrow = document.getElementById("rightArrow");
  rightArrow.onclick = callObject;

};


var firstObject = {

  number : 1,
  secondNumber : 2,
  firstAlert: function(amount){
    if ( amount == 2){
      alert("hello");
    }else if (amount == 1) {
      alert ("goodbye");

    }
  }

};

console.log(firstObject.number + firstObject.secondNumber);


function callObject(){
    firstObject.firstAlert(1);
};
*/

var number = {
  digit : 1



}

number.digit = number.digit + 1 ;
console.log (number.digit);
