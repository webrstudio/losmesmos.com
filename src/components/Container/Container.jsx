import styles from './styles.module.css'

export const Container = ({children, backgroundPurple})=>{
    return (
        <section className={`${styles.containerWrapper} ${!backgroundPurple ? '' : styles.backgroundPurple}`}>
            {children}
        </section>
    )
}