//--Global Variables go here---
var timeSeconds = 60;
var interValId; //place holder
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 10;



//----Start jQury o document-----
$('document').ready(function(){

	//Hide questions and timer on page load
	$('.questions').hide();
	$('#timer').hide();
	$('.finished').hide();

	//Show questions and timer when the start button is clicked
	$('.start_button').on("click", function(){
		$('.start_button').hide();
		$('.questions').show();
		$('#timer').show();

	});

	// Start the startTimer function that is neccesary to activate the timer 
	$('.start_button').on("click", startTimer);

	// Define the startTimer function that will decrement the timer by 1 second
	function startTimer(){
		// setInterval must be attached to a variable. Run decrement function every 1 second
		interValId = setInterval(decrement, 1000);
	}

	// Define the decrement function in setInterval();
	function decrement (){
		// Decrease timeSeconds variable by 1
		timeSeconds--;
		// Display the timer
		$('#timer').html(timeSeconds);

		// If statement to stop the timer 
		if (timeSeconds === 0) {
			// Clear the variable set to setInterval();
			clearInterval(interValId);
			// Hide the quetions
			$('.questions').hide();
			// Display result's screen
			$('.finished').show();
			// Display the numbers of correct, wrong and unanswered
			$('#correct').html(correctAnswers);
			$('#wrong').html(wrongAnswers);
			$('#unanswered').html(unanswered - correctAnswers - wrongAnswers);

		}
	}


//Working change function to keep that of results but buttons and be switched which increase the score past 10
$('#question_1 input').on('change', function() {
   console.log($('input:radio[name=q1]:checked', '#question_1').val());
   if( $('input:radio[name=q1]:checked', '#question_1').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q1]").attr('disabled', true);
   } 

   if( $('input:radio[name=q1]:checked', '#question_1').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q1]").attr('disabled', true);
   }  


});


$('#question_2 input').on('change', function() {
   console.log($('input:radio[name=q2]:checked', '#question_2').val());
   if( $('input:radio[name=q2]:checked', '#question_2').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q2]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q2]:checked', '#question_2').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q2]").attr('disabled', true);
   }  
});

$('#question_3 input').on('change', function() {
   console.log($('input:radio[name=q3]:checked', '#question_3').val());
   if( $('input:radio[name=q3]:checked', '#question_3').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q3]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q3]:checked', '#question_3').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q3]").attr('disabled', true);
   }  
});

$('#question_4 input').on('change', function() {
   console.log($('input:radio[name=q4]:checked', '#question_4').val());
   if( $('input:radio[name=q4]:checked', '#question_4').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q4]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q4]:checked', '#question_4').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q4]").attr('disabled', true);
   }  
});

$('#question_5 input').on('change', function() {
   console.log($('input:radio[name=q5]:checked', '#question_5').val());
   if( $('input:radio[name=q5]:checked', '#question_5').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q5]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q5]:checked', '#question_5').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q5]").attr('disabled', true);
   }  
});

$('#question_6 input').on('change', function() {
   console.log($('input:radio[name=q6]:checked', '#question_6').val());
   if( $('input:radio[name=q6]:checked', '#question_6').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q6]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q6]:checked', '#question_6').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q6]").attr('disabled', true);
   }  
});

$('#question_7 input').on('change', function() {
   console.log($('input:radio[name=q7]:checked', '#question_7').val());
   if( $('input:radio[name=q7]:checked', '#question_7').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q7]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q7]:checked', '#question_7').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q7]").attr('disabled', true);
   }  
});

$('#question_8 input').on('change', function() {
   console.log($('input:radio[name=q8]:checked', '#question_8').val());
   if( $('input:radio[name=q8]:checked', '#question_8').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q8]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q8]:checked', '#question_8').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q8]").attr('disabled', true);
   }  
});


$('#question_9 input').on('change', function() {
   console.log($('input:radio[name=q9]:checked', '#question_9').val());
   if( $('input:radio[name=q9]:checked', '#question_9').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q9]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q9]:checked', '#question_9').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q9]").attr('disabled', true);
   }  
});

$('#question_10 input').on('change', function() {
   console.log($('input:radio[name=q10]:checked', '#question_10').val());
   if( $('input:radio[name=q10]:checked', '#question_10').val() == "c" ){	
   		correctAnswers++;
   		console.log(correctAnswers);
   		$("input:radio[name=q10]").attr('disabled', true);
   } 	

   if( $('input:radio[name=q10]:checked', '#question_10').val() == "f" ){	
   		wrongAnswers++;
   		console.log(wrongAnswers);
   		$("input:radio[name=q10]").attr('disabled', true);
   }  
});


// --End of jQuery---------------------------------------
});

