export type FieldValidator = (value: string) => string | undefined

export const required: FieldValidator = (value) => {
	if (!value) return 'Field is required'
}

export const maxLengthCreator =
	(maxLength: number): FieldValidator =>
	(value) => {
		if (typeof value === 'string') {
			if (value.length > maxLength) return `Max length is ${maxLength} symbols`
		}
	}

export const minLengthCreator =
	(minLength: number): FieldValidator =>
	(value) => {
		if (value.length < minLength) return `Min length is ${minLength} symbols`
	}
