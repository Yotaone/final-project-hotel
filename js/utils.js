window.onload = function () {

	var reservBut = $('.js-reservation');

	reservBut.click(function (e) {
		e.preventDefault();
		var name = e.currentTarget.offsetParent.children[0].innerText;
		window.location = 'reservation.html?hostageName=' + name;
	});

};