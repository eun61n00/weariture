function getUserColor() {
	let user_color = document.getElementById("user_color_input").value;
	return user_color;
}

document.getElementById("color_change").onclick = function () {

	let user_color = getUserColor();

	// alert(user_color());

};
