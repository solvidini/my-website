export const required = (value: string): boolean => value.trim() !== ''

interface LengthConfig {
   min: number
   max: number
}

export const length = (config: LengthConfig) => (value: string): boolean => {
	const { min, max } = config
	let isValid = true

	if (min) {
		isValid = isValid && value.trim().length >= min
	}

	if (max) {
		isValid = isValid && value.trim().length <= max
	}

	return isValid
}

export const email = (value: string): boolean => {
	const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+?/
	const isValid = regex.test(value)

	return isValid
}
