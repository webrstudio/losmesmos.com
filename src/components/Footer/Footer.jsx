import styles from './styles.module.css'

export const Footer = ()=>{
    return (
        <footer className={styles.footerWrapper}>
            <p>Desarrollado por <a href='https://webrstudio.com' target='_blank'>WEBRSTUDIO</a> para <a href='https://caobaideas.com/' target='_blank'>CAOBA MEDIA & MANAGMENT</a></p>
        </footer>
    )
}