$(document).ready(function(){
  $("form#meter").submit(function(event){
    event.preventDefault();
    //debugger;
    var score = 5;
    var t = parseInt($("#ttttt").val());
    var i = parseInt($("#iiiii").val());
    var lorem = parseInt($("#Lorem").val());
    var ipsum = parseInt($("#Ipsum").val());
    var a = parseInt($("#aaaaa").val());

    function addScore(){
      return (score + lorem + ipsum + i + t + a);
    }

    var result = addScore();
    //console.log("result before branching: " +result);

    if (result <= 7 && result >= 3){
      alert("You are  Moderate!")
    } else if (result <3) {
      alert("You're an Ipsum!")
    } else if (result > 7){
      alert("You're a Lorem!")
    }
    else {
      //console.log("else clause");
    }
  });
  //alert(a);
});

//-------------------------
