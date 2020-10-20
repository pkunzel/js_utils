/**
 * @description Sets the textContent of all valid elmements in an Arrray
 * @param {Array} list a list with HTMLElements
 * @param {string} textContent The text to be set
 */
function setText(list, textContent) {
	list.forEach((element) => {
		if (element.textContent != undefined) {
			element.textContent = textContent;
		}
	});
}

/**
 * @description Sets the value of all valid elmements in an Arrray
 * @param {Array} list a list with HTMLElements
 * @param {string} aValue The text to be set
 */
function setValue(list, aValue) {
	list.forEach((element) => {
		if (element.value != undefined) {
			element.value = aValue;
		}
	});
}

/**
 * @description Sets the HTML content inside of all valid elmements in an Arrray
 * @param {Array} list a list with HTMLElements
 * @param {string} innerHTML The HTML cotent as a string
 */
function setHTML(list, innerHTML) {
	list.forEach((element) => {
		if (element.innerHTML != undefined) {
			element.innerHTML = innerHTML;
		}
	});
}

/**
 * @description Adds a class or list of classes to a multiple elements in an Array
 * @param {Array} list a list with HTMLElements
 * @param {string|Array} innerHTML a single class in a string or a list of classes
 */
function addClasses(list, classList) {
	list.forEach((element) => {
		element.classList.add(classList);
	});
}

/**
 * @description Removes a class or list of classes from multiple elements in an Array
 * @param {Array} list a list with HTMLElements
 * @param {string|Array} innerHTML a single class in a string or a list of classes
 */
function removeClasses(list, classList) {
	list.forEach((element) => {
		element.classList.remove(classList);
	});
}

/**
 * @description Toggles a class or list of classes in each element from an Array
 * @param {Array} list a list with HTMLElements
 * @param {string|Array} innerHTML a single class in a string or a list of classes
 */
function toggleClasses(list, classList) {
	list.forEach((element) => {
		element.classList.toggle(classList);
	});
}

/**
 * @description Checkes if to Arrays are the equivalent in size, values and order
 * @param {Array} listA First Array
 * @param {Array} listB Second Array
 * @returns True if they are equal, otherwise False
 */
function areEqual(listA, listB) {
	if (listA.length != listB.length) {
		return false;
	} else {
		for (let index = 0; index < listA.length; index++) {
			if (listA[index] != listB[index]) {
				return false;
			}
		}
		return true;
	}
}
