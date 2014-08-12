$(document).ready(function() {
	$('#detection').focus();
	setTimeDate();
});

$('#bg-img').click(function() {
	$('#dateTime').fadeOut(300);
	$('#bg-img').slideUp(700);
});

$('#detection').keyup(function() {
	$('#dateTime').fadeOut(300);
	$('#bg-img').slideUp(700);
});

function setTimeDate() {
	var dateTime = new Date(),
		month = [],
		day = [],
		minutes = dateTime.getMinutes(),
		hours = dateTime.getHours();
	day[0] = "Monday";
	day[1] = "Tuesday";
	day[2] = "Wednesday";
	day[3] = "Thursday";
	day[4] = "Friday";
	day[5] = "Saturday";
	day[6] = "Sunday";
	month[1] = "January";
	month[2] = "February";
	month[3] = "March";
	month[4] = "April";
	month[5] = "May";
	month[6] = "June";
	month[7] = "July";
	month[8] = "August";
	month[9] = "September";
	month[10] = "October";
	month[11] = "November";
	month[12] = "December";

	$('#date').empty();
	$('#time').empty();
	
	if (minutes < 10) minutes = '0' + minutes;
	if (hours < 10) hours = '0' + hours;
	
	var date = day[dateTime.getDay()] + ', ' + month[(dateTime.getMonth()+1)] + ' ' + dateTime.getDate();
	var time =  hours + ':' + minutes;
	$('#date').append(date);
	$('#time').append(time);
	
	setTimeout(setTimeDate, 1000);
}

$('#again').click(function() {
	$('#bg-img').slideDown(600);
	$('#dateTime').fadeIn(1500);
});

