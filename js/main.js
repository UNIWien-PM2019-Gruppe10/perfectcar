$(function(){

	function scrollToHash(hash){
		//if(targetHash != hash){
			//targetHash = hash;
			var scrollTarget = $(hash).offset().top;
			$('html, body').stop();
			$('html, body').animate({
				scrollTop: (scrollTarget-80)
			}, 500, function(){
				//window.location.hash = hash;
				history.replaceState({}, '', hash);
			});
		//}
	}

	$('a').on('click', function(event) {
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;
			scrollToHash(hash);
		}
	});
});