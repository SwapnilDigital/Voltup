$('.cricle_bg').on('mouseover', function() {  
	var a = $(this).attr('id');
	  $("#center_h").html("");
	$("#center_p").html("");
	
	if(a == 'circle_cri_2'){
		$("#center_h").html("Sell");
		$("#center_p").html("We strive to provide you with the best possible price in the shortest time.");
	}
	else if(a == 'circle_cri_3'){
		$("#center_h").html("Technology Advancement");
		$("#center_p").html("Everytime you swap with VoltUp, you get direct and instant access to the most advanced Lithium battery technology. With our platform approach, all VoltUp batteries deliver peak performances with our data backed platform, managing all battery parameters.");
	}
	else if(a == 'circle_cri_4'){
		$("#center_h").html("Range Anxiety");
		$("#center_p").html("VoltUp is solving range anxiety by a mix of batteries and it’s swapping network. VoltUp batteries provide an assured travel range.");
	}
	else if(a == 'circle_cri_5'){
		$("#center_h").html("Overseas");
		$("#center_p").html("With over 30 years experience living and working in the local and surrounding areas we are able to provide advice on whatever your requirements.");
	}
	else if(a == 'circle_cri_6'){
		$("#center_h").html("Battery Lifespan");
		$("#center_p").html("VoltUp provides commitment of 3 years with every subscription providing you the peace of mind against battery renewal or any hassles of battery maintenance.");
	}
	else{
		$("#center_h").html("Time to <br>Refill");
		$("#center_p").html("Why wait 8 hours for a charge? A swap with VoltUp can get you a fully charged battery in less than 2 minutes, just like refueling at a fuel station.");
	}
});
