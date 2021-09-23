/**
 * @description Generates formated CPF string
 * @param {String} unformatedValue the unformated CPF
 * @returns A string with 000.000.000-00 formating
 */
function getFormatedCPF(unformatedValue) {
    const onlyDigits = unformatedValue.toString().replace(/[^\d]/g, "").substring(0, 11);

    if (onlyDigits.length > 9) return onlyDigits.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
    if (onlyDigits.length > 6) return onlyDigits.replace(/(\d{3})(\d{3})/, "$1.$2.");
    if (onlyDigits.length > 3) return onlyDigits.replace(/(\d{3})/, "$1.");

    return onlyDigits;
}

/**
 * @description Generates formated CNPJ string
 * @param {String} unformatedValue the unformated CNPJ
 * @returns A string with 00.000.000/0000-00 formating
 */
function getFormatedCNPJ(unformatedValue) {
	const onlyDigits = unformatedValue.toString().replace(/[^\d]/g, "").substring(0, 14);

	if (onlyDigits.length > 12) return onlyDigits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4-");
	if (onlyDigits.length > 8) return onlyDigits.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3/");
	if (onlyDigits.length > 5) return onlyDigits.replace(/(\d{2})(\d{3})/, "$1.$2.");
	if (onlyDigits.length > 2) return onlyDigits.replace(/(\d{2})/, "$1.");

	return onlyDigits;
}


// function getFormatedCPF(unformatedValue) {
// 	const regexCode = /^(\d{3})(\d{1,3})?(\d{1,3})?(\d{1,2})?.*/;
// 	const onlyDigits = unformatedValue.toString().replace(/[^\d]/g, "");

// 	return onlyDigits.replace(regexCode, (_, firstSlice, secondSlice, thirdSlice, fourthSlice) =>
// 		fourthSlice
// 			? `${firstSlice}.${secondSlice}.${thirdSlice}-${fourthSlice}`
// 			: thirdSlice
// 			? `${firstSlice}.${secondSlice}.${thirdSlice}`
// 			: secondSlice
// 			? `${firstSlice}.${secondSlice}`
// 			: firstSlice
// 	);
// }
