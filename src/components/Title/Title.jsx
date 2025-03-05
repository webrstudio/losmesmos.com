import styles from "./styles.module.css";
export const Title = ({ title }) => {
  return <h2 className={styles.titleWrapper}>{title}</h2>;
};
