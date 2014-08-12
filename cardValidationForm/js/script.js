$(document).ready(function() {
	$('#cNum').focus();
});

$('#cNum').keyup(function() {
	if (($('#cNum').val().substr(0,2) === '34') || (($('#cNum').val().substr(0,2) === '37'))) Amex();
	else if ($('#cNum').val().substr(0,1) === '4') Visa();
	else if ($('#cNum').val().substr(0,1) === '5') Master();
	else $('.input-group-addon').text('?');
});

function Amex() {
	$('.input-group-addon').text('American Express  ');
	if ($('#cNum').val().length === 15) {
		Luhn($('#cNum').val());
	}
}

function Visa() {

	$('.input-group-addon').text('Visa  ');
	if (($('#cNum').val().length === 13) || ($('#cNum').val().length === 16)) {
		Luhn($('#cNum').val());
	}
}

function Master() {
	$('.input-group-addon').text('MasterCard  ');
	if ($('#cNum').val().length === 16) {
		Luhn($('#cNum').val());
	}
}

function Luhn(cardNum)
{
        var checkDig = parseInt(cardNum.substring(cardNum.length - 1, cardNum.length));
        var restNum = cardNum.substring(0, cardNum.length - 1);
        if (Calculate(restNum) == parseInt(checkDig))
        {
			$('.input-group-addon').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
			$('.input-group-addon').append('<span class="glyphicon glyphicon-remove"></span>');
		}
}

function Calculate(remNum)
{
        var t = 0;
        for (i = 0; i < remNum.length; i++)
        {
                t += parseInt(remNum.substring(i, i + 1))
        }
		
        var n = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
        for (i = remNum.length - 1; i >= 0; i -= 2)
        {
                var r = parseInt(remNum.substring(i, i + 1));
                var s = n[r];
                t += s
        }
		
        var cDig = t % 10;
        cDig = 10 - cDig;
        if (cDig == 10)
        {
                cDig = 0
        }
		
        return cDig
}
