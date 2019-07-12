$( document ).ready(function() {

	var $projectListSelector = $(".projectListSelector");
	var $cameraOptions = $(".cameraOptions");
	var $settings = $(".iconButton.settings");


	$projectListSelector.on('click', updateSelector);
	$cameraOptions.on('click', handleCondenseOptions);
	$settings.on('click', displaySettings);


	function updateSelector(event) {
		$trigger = $(event.target);

		$(".projectListSelector").toggleClass("active");
		$(".projectList").toggleClass("active");
	}

	function handleCondenseOptions(event) {
		var timeoutVal = 300;

		if ( $(".listMode").length !== 0 ) {
			var countProjectImage = $(".projectImage").length;
			var widthProjectImage = $(".projectImage:first-child").outerWidth(true);
			var widthProjectCarousel = countProjectImage * widthProjectImage;
			var scrollWidth = $(".projectImageCarousel")[0].scrollWidth;

			$('.projectImageCarousel').animate({scrollLeft: widthProjectCarousel}, timeoutVal);
		}

		condenseOptions();

	}

	function condenseOptions(event) {
		$cameraOptions.toggleClass("active");
		$(".photoOverlay").toggleClass("listMode");
		$(".shutterButton").toggleClass("active");
		$(".iconButton.settings").toggleClass("show");
		$(".iconButton.share").toggleClass("show");
		$(".appOverlay .projectTitle__container").toggleClass("purple");
	}

	function displaySettings(event) {
		$settings.toggleClass("active");
		$(".settingsMenu").toggleClass('active');
	}


});