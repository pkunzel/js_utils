function cpfValidation(value) {
	if (!value) return false

	// Aceita receber o valor como string, número ou array com todos os dígitos
	const validTypes =
		typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)

	// Elimina valores com formato inválido
	if (!validTypes) return false

	// Guarda todos os dígitos em um array
	const numbers = value.toString().match(/\d/g).map(Number)

	// Valida quantidade de dígitos
	if (numbers.length !== 11) return false

	// Elimina valores inválidos com todos os dígitos repetidos
	const items = [...new Set(numbers)]
	if (items.length === 1) return false

	// Separa número base do dígito verificador
	const base = numbers.slice(0, 9)
	const digits = numbers.slice(9)

	// Cálculo base
	const calc = (n, i, x) => n * (x - i)

	// Utilitário de soma
	const sum = (r, n) => r + n

	// Cálculo de dígito verificador
	const digit = (n) => {
		const rest = n % numbers.length
		return rest < 2 ? 0 : numbers.length - rest
	}

	// Cálculo sobre o número base
	const calc0 = base.map((n, i) => calc(n, i, numbers.length - 1)).reduce(sum, 0)
	// 1o. dígito verificador
	const digit0 = digit(calc0)

	// Valida 1o. digito verificador
	if (digit0 !== digits[0]) return false

	// Cálculo sobre o número base + 1o. dígito verificador
	const calc1 = base
		.concat(digit0)
		.map((n, i) => calc(n, i, numbers.length))
		.reduce(sum, 0)
	// 2o. dígito verificador
	const digit1 = digit(calc1)

	// Valida 2o. dígito verificador
	return digit1 === digits[1]
}

function cnpjValidation(value) {
	if (!value) return false

	// Aceita receber o valor como string, número ou array com todos os dígitos
	const isString = typeof value === 'string'
	const validTypes = isString || Number.isInteger(value) || Array.isArray(value)

	// Elimina valor em formato inválido
	if (!validTypes) return false

	// Filtro inicial para entradas do tipo string
	if (isString) {
		// Limita ao máximo de 18 caracteres, para CNPJ formatado
		if (value.length > 18) return false

		// Teste Regex para veificar se é uma string apenas dígitos válida
		const digitsOnly = /^\d{14}$/.test(value)
		// Teste Regex para verificar se é uma string formatada válida
		const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value)

		// Se o formato é válido, usa um truque para seguir o fluxo da validação
		if (digitsOnly || validFormat) true
		// Se não, retorna inválido
		else return false
	}

	// Guarda um array com todos os dígitos do valor
	const match = value.toString().match(/\d/g)
	const numbers = Array.isArray(match) ? match.map(Number) : []

	// Valida a quantidade de dígitos
	if (numbers.length !== 14) return false

	// Elimina inválidos com todos os dígitos iguais
	const items = [...new Set(numbers)]
	if (items.length === 1) return false

	// Cálculo validador
	const calc = (x) => {
		const slice = numbers.slice(0, x)
		let factor = x - 7
		let sum = 0

		for (let i = x; i >= 1; i--) {
			const n = slice[x - i]
			sum += n * factor--
			if (factor < 2) factor = 9
		}

		const result = 11 - (sum % 11)

		return result > 9 ? 0 : result
	}

	// Separa os 2 últimos dígitos de verificadores
	const digits = numbers.slice(12)

	// Valida 1o. dígito verificador
	const digit0 = calc(12)
	if (digit0 !== digits[0]) return false

	// Valida 2o. dígito verificador
	const digit1 = calc(13)
	return digit1 === digits[1]
}