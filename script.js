var dData = [];

$(document).ready(function() {
	var complete = false,
		dName;
	
	$.get('https://api.github.com/repos/nischaalc/designProjects/contents/', function(contents) {
		dData = contents;
		
		if (dData.length !== 0) {
			$.each(dData, function(i, dataInf) {
				
				if (dataInf.type === 'dir') {
					dName = (dataInf.name).replace('-', ' ');
					$('#list').append('<span class = "item"><a href = "http://nischaalc.github.io/designProjects/'+dName+'/index.html">'+dName+'</a><a href = "'+dataInf.html_url+'" class = "homefolder">[Home]</a></span>');
				}
			});
		}
	});
	
});
