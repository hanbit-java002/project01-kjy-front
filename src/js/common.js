define([
	"bootstrap",
], function() {
	$("#search").on("click", function() {
		showBookingLayer();
	});
	$("#iconn").on("click", function() {   <!-- x표나 화면클릭시 사라짐-->
		hideBookingLayer();
	});
	function showBookingLayer() {
		$(".search-search").show();
		$("#nav").hide();
		$(".fa-search").hide();
	}
	function hideBookingLayer() {
		$("#nav").show();
		$(".fa-search").show();
		$(".search-search").hide();
	}
});
