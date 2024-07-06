import styles from './rolagem.module.css';

export default function Rolagem(){
    return(
        <div className={styles.rolagem}>
            <div className={styles.bolinha1}></div>
            <div className={styles.bolinha2}></div>
            <div className={styles.bolinha3}></div>
            <div className={styles.bolinha4}></div>
            <div className={styles.bolinha5}></div>
        </div>
    )
}

