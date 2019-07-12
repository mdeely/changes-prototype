$( document ).ready(function() {

	var $projectListSelector = $(".projectListSelector");
	var $cameraOptions = $(".cameraOptions");
	var $settings = $(".iconButton.settings");


	$projectListSelector.on('click', updateSelector);
	$cameraOptions.on('click', condenseOptions);
	$settings.on('click', displaySettings);


	function updateSelector(event) {
		$trigger = $(event.target);
		console.log($trigger);

		$(".projectListSelector").toggleClass("active");
		$(".projectList").toggleClass("active");
	}

	function condenseOptions(event) {
		$cameraOptions.toggleClass("active");
		$(".photoOverlay").toggleClass("listMode");
		$(".shutterButton").toggleClass("active");
		$(".iconButton.settings").toggleClass("show");
		$(".iconButton.share").toggleClass("show");
	}

	function displaySettings(event) {
		$settings.toggleClass("active");
		$(".settingsMenu").toggleClass('active');
	}


});