import styles from "./carrinho.module.css";
import Image from "next/image";
import CarrinhoV from "../../../public/carrinhoVazio.svg";
import Vistos from "../../../components/vistos/vistos";

export default function Carrinho(){
    return(
        <div className={styles.carrinho}>
<           div className={styles.titulo}>
                <Image className={styles.img} src={CarrinhoV} alt="carrinhoVazio" priority />
                <h1>Seu carrinho está vazio</h1>
            </div>

            <Vistos/>

        </div>
        
    )
}