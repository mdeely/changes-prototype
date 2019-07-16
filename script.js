$( document ).ready(function() {

	var $projectListSelector = $(".projectTitle__container:not(.settingsTitle)");
	var $cameraOptions = $(".cameraOptions");
	var $camera = $(".camera");
	var $settings = $(".textButton.settings");
	var $closeSettings = $(".iconButton.settings");
	var $closeProjects = $(".closeProjects");
	var $projectImageHero = $(".projectImage.hero");


	$projectListSelector.on('click', updateSelector);
	$camera.on('click', handleCondenseOptions);
	$settings.on('click', displaySettings);
	$closeSettings.on('click', displaySettings);
	$closeProjects.on('click', updateSelector);
	$projectImageHero.on('click', handleCameraControls)

	function handleCameraControls() {
		$(".appOverlay [class*='iconButton']:not(.shutterButton)").toggle();
		$(".projectTitle__container").toggle();
	}


	function updateSelector(event) {
		$trigger = $(event.target);

		$(".projectListSelector").toggleClass("active");
		$(".projectList").toggleClass("active");
	}

	function handleCondenseOptions(event) {
		var timeoutVal = 600;

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
		// $(".iconButton.settings").toggleClass("show");
		// $(".iconButton.share").toggleClass("show");
		$(".appOverlay .projectTitle__container").toggleClass("purple");
		$(".iconButton.camera").toggleClass("purple");
		$(".cameraModifiers .iconButton").toggleClass("show");
		$(".textButton.settings").toggleClass("show");
		$(".alphaSlider").toggleClass("show");
	}

	function displaySettings(event) {
		$settings.toggleClass("active");
		$(".settingsMenu").toggleClass('active');
		$(".projectOptions .settings").toggleClass('show');
	}


});