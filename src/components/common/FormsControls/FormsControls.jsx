import styles from './FormsControls.module.css';

export const formField = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error;

	return (
		<div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
			<div>
				<props.element {...input} {...props} />
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

