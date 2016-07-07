$(document).ready(function() {
	$('#userInput').submit(function(event) {
		event.preventDefault();
		var something = $('#inputBox').val();
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allItems ul').append("<li class='currentItem'> <img class='checked' src='assets/check.png'/>" + " " + something + " " + "<img src='assets/delete.png'/ class='trash'></li>");	
		}
		// resets the textbox after item is entered
		$('#userInput')[0].reset();
	});

});

//functions to delete and strikethrough code when checkbox and trashcan are clicked
assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.trash', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});	
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked');
	});
}