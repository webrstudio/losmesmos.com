import styles from './styles.module.css'

export const GridContainer = ({children})=>{
    return (
        <div className={`${styles.gridContainerWrapper} flexContainer`}>
            {children}
        </div>
    )
}