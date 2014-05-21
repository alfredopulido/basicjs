function cargacontenido(valor,donde,cual){
	$('#'+donde).html('<img src="images/loader.gif">');
	$.ajax({
	  url: 'mod/'+cual+'.php?id='+valor + '&r='+Math.random(),
	  success: function(data) {
		$('#'+donde).html(data);	
	  }
	});
}
