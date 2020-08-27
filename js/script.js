$(function() {
	let $mnav_popup = $('.media_nav');
	
	$(".media_nav-triger, .media_nav-close").click(function(){
		$mnav_popup.slideToggle(300, function(){
			if ($mnav_popup.is(':hidden')) {
				$('pointer').removeClass('media_nav-pointer');
			} else {
				$('pointer').addClass('media_nav-pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.media_nav_wrapper').length){
			$('pointer').removeClass('media_nav-pointer');
			$mnav_popup.slideUp(300);
		}
	});
});


// let modal = document.getElementById('myModal');
// let img = document.getElementById('myImg');
// let modalImg = document.getElementById('img');
// let captionText = document.getElementById('caption');

// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

//увеличение картинок и окна с отправкой данных - это единственный сложный пункт, на увеличение картинок я потратил пол дня и забил...