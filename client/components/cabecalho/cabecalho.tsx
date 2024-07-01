import Image from 'next/image';
import Logo from "../../public/Logo.svg";
import styles from "./cabecalho.module.css";

export default function Cabecalho(){
    return(
        <div className="cabecalho">
            <div className="logo">
                <Image className={styles.logo} src={Logo} alt="Logo" priority />
            </div>
        </div>
    )
}