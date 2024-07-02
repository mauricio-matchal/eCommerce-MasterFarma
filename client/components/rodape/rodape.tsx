import styles from "./rodape.module.css";
import Logo from "../../public/Logo.svg";
import Image from 'next/image';

export default function Rodape(){
    return(
        <div className={styles.rodape}>
            <div className={styles.informacoes}>
                <div className={styles.atendimento}>
                     <p>Atendimento</p>

                    <ul className={styles.itens}>
                        <li>
                            <a href="">Perguntas frequentes</a>
                        </li>
            
                        <li>
                            <a href="">Aviso de privacidade</a>
                        </li>

                        <li>
                            <a href="">Política de entrega</a>
                        </li>
                    </ul> 
                </div>

                <div className={styles.institucional}>
                    <p>Institucional</p>

                    <ul className={styles.itens}>
                        <li>
                            <a href="">Nossa história</a>
                        </li>
            
                        <li>
                            <a href="">Nossas lojas</a>
                        </li>

                        <li>
                            <a href="">Trabalhe conosco</a>
                        </li>
                    </ul> 
                </div>

                <div className={styles.logo}>
                    <Image className={styles.img} src={Logo} alt="Logo" priority />
                    <p><strong>Master</strong>Farma</p>
                </div>
            </div>

            <div className={styles.copyright}>
               <p>Copyright © 2024</p> 
            </div>

        </div>
    )
}