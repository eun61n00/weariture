function initMap() {
	var seoultech = { lat: 37.631827 ,lng: 127.077406 };
	var map = new google.maps.Map(
		document.getElementById('map'), {
		zoom: 17,
		center: seoultech
		});

	new google.maps.Marker({
		position: seoultech,
		map: map,
		// label: "서울과학기술대학교"
	});
}
