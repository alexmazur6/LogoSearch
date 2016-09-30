$(document).ready(function() {

	var programType = 0;
	var educationLevel = 0;

	$('.dropdown').on('click', function() {
		var clickedID = $(this).children('.drop-content').attr('id');
		if (clickedID === '1') {
			$('#' + clickedID).show();
		}
		if (clickedID === '2') {
			$('#' + clickedID).show();

		}
	});


	$('.drop-content').children('a').on('click', function(e) {
		 e.stopPropagation();
		var clickedClass = $(this).attr('class');
		var dropID = $(this).parent().attr('id');
		var dropSelect = ('div#' + dropID);

		//Hides the drop menu
		$(dropSelect).hide();


		//If search all was clicked
		if (clickedClass === 'sa') {
			$(dropSelect).siblings('a').text('All');
			programType = 1;
			educationLevel = 1;

		}
		else if (clickedClass === 'sp') {
			$(dropSelect).siblings('a').text('Scholarship Program');
			programType = 2;
		}
		else if (clickedClass === 'lp') {
			$(dropSelect).siblings('a').text('Loan Program');
			programType = 3;
		}
		else if (clickedClass === 'kg') {
			$(dropSelect).siblings('a').text('Kindergarten');
			educationLevel = 2;
		}
		else if (clickedClass === 'hs') {
			$(dropSelect).siblings('a').text('High School');
			educationLevel = 3;
		}

	});

	$('#search-btn').on('click',function() {
		$('.aci').attr('src', 'Logos/aci.png');
		$('.acm').attr('src', 'Logos/acm - fade copy 2.png');
		$('.afe').attr('src', 'Logos/AFE - fade.png');

		var program = $('#ptype').text();
		var education = $('#etype').text();


		if ((program === 'All' || program === "Program Type") && (education === "All" || education === "Education Level")) {
			$('.aci').attr('src', 'Logos/aci - color.png');
			$('.acm').attr('src', 'Logos/acm - color.png');
			$('.afe').attr('src', 'Logos/AFE color.png');
		}

		if (program === 'Scholarship Program') {
			if (education === "Kindergarten") {
				$('img.sp.kg.aci').attr('src', 'Logos/aci - color.png');
				$('img.sp.kg.acm').attr('src', 'Logos/acm - color.png');
				$('img.sp.kg.afe').attr('src', 'Logos/AFE color.png');
			}
			else if (education === "High School") {
				$('img.sp.hs.aci').attr('src', 'Logos/aci - color.png');
				$('img.sp.hs.acm').attr('src', 'Logos/acm - color.png');
				$('img.sp.hs.afe').attr('src', 'Logos/AFE color.png');
			}
			else {
				$('img.sp.aci').attr('src', 'Logos/aci - color.png');
				$('img.sp.acm').attr('src', 'Logos/acm - color.png');
				$('img.sp.afe').attr('src', 'Logos/AFE color.png');
			}	
		}
		if (program === 'Loan Program') {
			if (education === "Kindergarten") {
				$('img.lp.kg.aci').attr('src', 'Logos/aci - color.png');
				$('img.lp.kg.acm').attr('src', 'Logos/acm - color.png');
				$('img.lp.kg.afe').attr('src', 'Logos/AFE color.png');
			}
			else if (education === "High School") {
				$('img.lp.hs.aci').attr('src', 'Logos/aci - color.png');
				$('img.lp.hs.acm').attr('src', 'Logos/acm - color.png');
				$('img.lp.hs.afe').attr('src', 'Logos/AFE color.png');
			}
			else {
				$('img.lp.aci').attr('src', 'Logos/aci - color.png');
				$('img.lp.acm').attr('src', 'Logos/acm - color.png');
				$('img.lp.afe').attr('src', 'Logos/AFE color.png');
			}	
		}

		if (education === "Kindergarten") {
			if (program === 'Scholarship Program') {
				$('img.sp.kg.aci').attr('src', 'Logos/aci - color.png');
				$('img.sp.kg.acm').attr('src', 'Logos/acm - color.png');
				$('img.sp.kg.afe').attr('src', 'Logos/AFE color.png');
			}
			else if (program === 'Loan Program') {
				$('img.lp.kg.aci').attr('src', 'Logos/aci - color.png');
				$('img.lp.kg.acm').attr('src', 'Logos/acm - color.png');
				$('img.lp.kg.afe').attr('src', 'Logos/AFE color.png');
			}
			else {
				$('img.kg.aci').attr('src', 'Logos/aci - color.png');
				$('img.kg.acm').attr('src', 'Logos/acm - color.png');
				$('img.kg.afe').attr('src', 'Logos/AFE color.png');
			}	
		}
		if (education === "High School") {
			if (program === 'Scholarship Program') {
				$('img.sp.hs.aci').attr('src', 'Logos/aci - color.png');
				$('img.sp.hs.acm').attr('src', 'Logos/acm - color.png');
				$('img.sp.hs.afe').attr('src', 'Logos/AFE color.png');
			}
			else if (program === 'Loan Program') {
				$('img.lp.hs.aci').attr('src', 'Logos/aci - color.png');
				$('img.lp.hs.acm').attr('src', 'Logos/acm - color.png');
				$('img.lp.hs.afe').attr('src', 'Logos/AFE color.png');
			}
			else {
				$('img.hs.aci').attr('src', 'Logos/aci - color.png');
				$('img.hs.acm').attr('src', 'Logos/acm - color.png');
				$('img.hs.afe').attr('src', 'Logos/AFE color.png');
			}	
		}
	});

});

