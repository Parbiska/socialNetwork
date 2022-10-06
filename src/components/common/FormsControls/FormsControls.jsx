import styles from './FormsControls.module.css';

export const formField = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
  
    return (
      <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
        <div>
          <props.element {...input} {...props} />
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
    )
  }