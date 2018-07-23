$(document).ready(function(){
    $.getJSON("api/list",function (result) {
    	var html = []
    	result = JSON.parse(result.dailyResult)
    	//console.log(result.boxOfficeResult.dailyBoxOfficeList);
    	$.each(result.boxOfficeResult.dailyBoxOfficeList, function(i, boxoffice) {
	        html.push('<tr>');
	        html.push('		<td>' + boxoffice.rank +'</td>');
	        html.push('		<td>' + boxoffice.movieNm +'</td>');
	        html.push('		<td>' + boxoffice.openDt +'</td>');
	        html.push('		<td>' + boxoffice.salesAmt +'</td>');
	        html.push('		<td>' + boxoffice.salesShare +'</td>');
	        html.push('		<td>' + boxoffice.salesInten/boxoffice.salesChange +'</td>');
	        html.push('		<td>' + boxoffice.salesAcc +'</td>');
	        html.push('		<td>' + boxoffice.audiCnt +'</td>');
	        html.push('		<td>' + boxoffice.audiInten/boxoffice.audiChange +'</td>');
	        html.push('		<td>' + boxoffice.audiAcc +'</td>');
	        html.push('		<td>' + boxoffice.scrnCnt +'</td>');
	        html.push('		<td>' + boxoffice.showCnt +'</td>');
	        html.push('</tr>');
    		
    		$('tbody').html(html.join(''));
   		});

        
    })
});