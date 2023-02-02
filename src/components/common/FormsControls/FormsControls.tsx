import { FieldValidator } from '../../../utils/validators/validators'
import styles from './FormsControls.module.css'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'

type FormControlProps = {
	meta: WrappedFieldMetaProps
	children: React.ReactElement
}

const FormControl: React.FC<FormControlProps> = ({ meta: { touched, error }, children }) => {
	const hasError = touched && error
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>{children}</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
	const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
	const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}

export function createField<FormKeys extends string>(
	placeholder: string,
	name: FormKeys,
	validators: FieldValidator[],
	component: React.FC<WrappedFieldProps>,
	props = {},
	text = ''
) {
	let s = { display: 'inline-block', width: 'auto' }
	if (component === Textarea) {
		s = { ...s, width: '100%' }
	}
	return (
		<div style={s}>
			<Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />{' '}
			{text}
		</div>
	)
}
