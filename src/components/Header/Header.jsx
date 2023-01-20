import styles from './Header.module.css';

export const Header = ({ title }) => {
    return (
        <div className={styles.header}>
            {title}
        </div>
    )
}