import styles from './Contact.module.css';

const Contact = ({contactTitle,  contactValue}) => (
    <li>
        <a className={styles.link} rel="noreferrer" href={contactValue} target='_blank'>{contactTitle[0].toUpperCase() + contactTitle.slice(1)}</a>
    </li>
)

export default Contact;