/**
 * @classdesc Contains a list of ready to use static masking functions
 */
class ApplyMask {
	/**
	 * @description Applies the CPF mask to a string. 000.000.000-00
	 * @param {String} unformatedValue An unformated string containing the full or partial CPF
	 * @returns The formatted CPF
	 */
	static toCPF = (unformatedValue) => {
		return unformatedValue
			.replace(/\D/g, "")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d{1,2})/, "$1-$2")
			.replace(/(-\d{2})\d+?$/, "$1");
	};

	/**
	 * @description Applies the CNPJ mask to a string. 00.000.000/0000-00
	 * @param {String} unformatedValue An unformated string containing the full or partial CNPJ
	 * @returns The formatted CNPJ
	 */
	static toCNPJ = (unformatedValue) => {
		return unformatedValue
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1/$2")
			.replace(/(\d{4})(\d{1,2})/, "$1-$2")
			.replace(/(-\d{2})\d+?$/, "$1");
	};

	/**
	 * @description Applies the Phone mask to a string. (00)00000-0000
	 * @param {String} unformatedValue An unformated string containing the full or partial CPF
	 * @returns The formatted CPF
	 */
	static toPhone = (unformatedValue) => {
		return unformatedValue
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "($1) $2")
			.replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
	};

	/**
	 * @description Applies the Phone mask to a string. 00000-000
	 * @param {String} unformatedValue An unformated string containing the full or partial CPF
	 * @returns The formatted CPF
	 */
	static toCEP = (unformatedValue) => {
		return unformatedValue.replace(/\D/g, "")
							  .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
	};

	/**
	 * @description Applies the Phone mask to a string. DD/MM/YYYY
	 * @param {String} unformatedValue An unformated string containing the full or partial Date
	 * @returns The formatted Date
	 */
	static toDate = (unformatedValue) => {
		return unformatedValue
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "$1/$2")
			.replace(/(\d{2})(\d)/, "$1/$2")
			.replace(/(\d{4})(\d)/, "$1");
	};

	/**
	 * @description Filters out all but the letters
	 * @param {String} unformatedValue An unformated string
	 * @returns Only the letters contained in the unformatted string
	 */
	static charactersOnly = (unformatedValue) => {
		return unformatedValue.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
	};

	/**
	 * @description Filters out all but the numbers
	 * @param {String} unformatedValue An unformated string
	 * @returns Only the numbers contained in the unformatted string
	 */
	static numbersOnly = (unformatedValue) => {
		return unformatedValue.replace(/\D/g, "");
	};
}

class CustomMask {
	constructor() {
		const elementsToMask = Array.from(document.querySelectorAll("[data-custom-mask]"));

		elementsToMask.forEach((element) => {
			const customMaskType = element.getAttribute("data-custom-mask");
			this.#maskingActions[customMaskType](element);
		});
	}

	#maskingActions = {
		cpf: (element) => applyMaskingEvents(element, ApplyMask.toCPF),
		cnpj: (element) => applyMaskingEvents(element, ApplyMask.toCNPJ),
	};

	applyMaskingEvents(element, maskFunction) {
		const elementStringContainer = element.value ? "value" : "textcontent";
		setElementWithMask(elementStringContainer);
		element.addEventListener("change", setElementWithMask);
		element.addEventListener("keypress", setElementWithMask);

		function setElementWithMask(elementStringContainer) {
			element[elementStringContainer] = maskFunction(element[elementStringContainer]);
		}
	}
}