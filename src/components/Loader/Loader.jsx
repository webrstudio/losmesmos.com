import styles from './styles.module.css'

export const Loader = ({fullScreen})=>{
    return (
        <section
            className={`${styles.loaderWrapper} ${!fullScreen ? '' : styles.loaderWrapperFullScreen}`}
        >
            <div className={styles.loaderSpinner}>
                <img src='/assets/images/logo.png' />
            </div>
        </section>
    )
}