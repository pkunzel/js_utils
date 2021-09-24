/**
 * @description Applies the CPF mask to a string. 000.000.000-00
 * @param {String} unformatedValue An unformated string containing the full or partial CPF
 * @returns The formatted CPF
 */
const maskCPF = (unformatedValue) => {
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
const maskCNPJ = (unformatedValue) => {
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
const maskPhone = (unformatedValue) => {
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
const maskCEP = (unformatedValue) => {
	return unformatedValue.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

// 00/00/0000
const maskDate = (value) => {
	return value
		.replace(/\D/g, "")
		.replace(/(\d{2})(\d)/, "$1/$2")
		.replace(/(\d{2})(\d)/, "$1/$2")
		.replace(/(\d{4})(\d)/, "$1");
};

// Aceita apenas que letras sejam digitadas
const maskOnlyLetters = (value) => {
	return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// Aceita apenas números
const maskOnlyNumbers = (value) => {
	return value.replace(/\D/g, "");
};
