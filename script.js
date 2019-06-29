$( document ).ready(function() {

	var $projectListSelector = $(".projectListSelector");
	var $cameraOptions = $(".cameraOptions");


	$projectListSelector.on('click', updateSelector);
	$cameraOptions.on('click', condenseOptions);



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
	}


});