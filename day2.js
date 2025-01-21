var num1=Math.floor(Math.random()*10);
var count=0;

function checkGuess(){
    var num=document.getElementById("guess").value;
    count++;
var tonum=parseInt(count);
if(num==num1){
    document.getElementById("result").innerHTML="Congratulations! You have guessed the number in "+tonum+" attempts";

}
else if(num>num1){
    document.getElementById("result").innerHTML="Your guess is too high";

}
else{
    document.getElementById("result").innerHTML="Your guess is too low";
}}