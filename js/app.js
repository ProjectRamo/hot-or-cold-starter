
   var target = Math.round(Math.random()*100);
   var count = 0;
   var guess = $('#userGuess').val();
   var gap = 0;

function newGame(){
	alert("Let's just say a new game started");
	target = Math.round(Math.random()*100);
  console.log(target)
  $('#guessList').empty();
  count = 0;
  $('#count').text(count+"")
  $("#feedback").text("New Game");
  $('#userGuess').val('');
}

$(document).ready(function(){
  guess = $('#userGuess').val();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("a.new").click(function(){
  		newGame();
  	});

    $('form').submit(function(event){
      event.preventDefault();
      count += 1;
      guess = +$('#userGuess').val();
      gap = guess-target;
      console.log("gap", gap)
      switch(gap) {
        case (gap < -10):
          feedback = "Cold, higher"
          break;
        case (gap < -20):
          feedback = "Ice cold bra, higher"
          break;
        case (gap > 10):
          feedback = "hot, lower"
          break;
        case (gap > 20):
          feedback = "Too hot bra, lower"
          break;
        case (gap == 0):
          break;
        default:
          feedback = "Something is amiss!"
      }
      if (+guess===target) {
        console.log("Should see feedback text", guess, target);
        $("#feedback").text(">> YOU WON! <<");
        alert ("You won! Yaaay");
        newGame();
      }
      $("#feedback").text(feedback);
      $('#guessList').append("<li>"+guess+"</li>");
      $('#count').text(count+"")
  });

});


