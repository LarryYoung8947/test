alert("JavaScript Test: Passed");

function fadeIn() {
	$(preload).fadeIn(4500);
	$(".banner").fadeIn(4500);
}

document.addEventListener("DOMContentLoaded", function(event){
	let imgArray = ['img/dancers1.jpg',
	'img/southsidesweetshot.jpg',
	'img/sweetshotdrumhead.jpg'];
	numOFSlide = 0;
	function shift() {
		document.getElementById('slide').src = imgArray[numOFSlide];
		$('#slide').fadeIn(1500);
		setTimeout(function(){
			$('#slide').fadeOut(1500);
		}, 2500);
		numOFSlide++;
		if (numOFSlide === imgArray.length) {
			numOFSlide = 0;
		}
		setTimeout(shift, 4000);
	}
	shift();
});
