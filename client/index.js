'use strict';
$(document).ready(init);

function init(){

var number1;
var number2;

$('#b1').click(addOne);
$('#b2').click(addTwo);
$('#b3').click(addThree);
$('#b4').click(addFour);
$('#b5').click(addFive);
$('#b6').click(addSix);
$('#b7').click(addSeven);
$('#b8').click(addEight);
$('#b9').click(addNine);
$('#b0').click(addZero);
$('#pir').click(addDec);
$('#per').click(percent);
$('#swsi').click(changeSign);
$('#div').click(divide);
$('#tim').click(multiply);
$('#min').click(subtract);
$('#plus').click(add);
$('#pir').click(percent);
$('#eql').click(equal);
$('#clear').click(clear);


function addOne(){
  $('#res').append('1');
}
function addTwo(){
  $('#res').append('2');
}
function addThree(){
  $('#res').append('3');
}
function addFour(){
  $('#res').append('4');
}
function addFive(){
  $('#res').append('5');
}
function addSix(){
  $('#res').append('6');
}
function addSeven(){
  $('#res').append('7');
}
function addEight(){
  $('#res').append('8');
}
function addNine(){
  $('#res').append('9');
}
function addZero(){
  $('#res').append('0');
}
var opp;
function percent(){
  var pers;
number1 = number1 = $('#res').text() *1;
  pers = number1/100;
  $('#res').text(pers);
}
function changeSign(){
   var reverse = $('#res').text() * -1;
   $('#res').text(reverse);

}
function divide(){
  opp = '/';
  number1 = $('#res').text() *1;
  $('#res').text('');
}
function multiply(){
  opp = '*';
  number1 = $('#res').text() *1;
  $('#res').text('');
}
function subtract(){
  opp = '-';
  number1 = $('#res').text() *1;
  $('#res').text('');
}
function add(){
  opp = '+';
  number1 = $('#res').text() *1;
  $('#res').text('');
}
function addDec(){
  var dec = $('#res').text();
  if(dec.search('.') === -1){
    $('#res').append('.');
  }
}
function clear(){
  $('#res').text('');
}
function equal() {
  number2 = $('#res').text() *1;
  var result;
  switch(opp) {
    case('+'):
      result = number1 + number2;
        break;
    case('-'):
      result = number1 - number2;
        break;
    case('/'):
      result = number1 / number2;
        break;
    case('*'):
      result = number1 * number2;
  }
  $('#res').text(result);
}


















}
