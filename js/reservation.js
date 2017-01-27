window.onload = function () {

	var selectReservation = $('.js-sel-reservation'),
		submit = $('.js-submitToStorage'),
		dataField = $('.js-get-data'),
		messageToClient = $('.js-error-message');

	if (getUrlParameter('hostageName')) {
		selectReservation.val(getUrlParameter('hostageName').toLowerCase());
	}

	submit.click(function (e) {
		e.preventDefault();
		var selectName = selectReservation.val();
		checkIfDataExist(selectName);
	});

	function checkIfDataExist(hostageName) {
		var retrievedObject = localStorage.getItem(hostageName);
		if (JSON.parse(retrievedObject)) {
			sortData(JSON.parse(retrievedObject));
		} else {
			addNewData(hostageName);
		}
	}

	function sortData(localSData) {
		$.each(localSData, function (index, value) {
			if (value === dataField.val()) {
				messageToClient.text('"' + selectReservation.val().toUpperCase() + '" на ' + dataField.val() +' зайнятий');
				return false;
			} else if ((dataField.val() !== value && localSData.length - 1 === index)) {
				editData();
			}
		});
	}

	function addNewData(hostageName) {
		var dateArray = [];
		dateArray.push(dataField.val());
		localStorage.setItem(hostageName, JSON.stringify(dateArray));
		messageToClient.text('Ви успішно зайняли котедж "'+ selectReservation.val().toUpperCase() + '" на ' + dataField.val());
	}

	function editData() {
		var selectName = selectReservation.val(),
			dateArray;
		var retrievedObject = localStorage.getItem(selectName);
		dateArray = JSON.parse(retrievedObject);
		dateArray.push(dataField.val());
		localStorage.setItem(selectName, JSON.stringify(dateArray));
		messageToClient.text('Ви успішно зайняли котедж "'+ selectReservation.val().toUpperCase() + '" на ' + dataField.val());
	}

	function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLletiables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLletiables.length; i++) {
			sParameterName = sURLletiables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	}

};