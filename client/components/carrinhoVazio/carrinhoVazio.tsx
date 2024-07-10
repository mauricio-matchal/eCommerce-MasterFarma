import styles from "./carrinhoVazio.module.css";
import Image from "next/image";
import CarrinhoV from "../../public/carrinhoVazio.svg";

export default function CarrinhoVazio(){
    return(
        <div className={styles.carrinho}>
          <div className={styles.titulo}>
            <Image className={styles.img} src={CarrinhoV} alt="carrinhoVazio" priority />
            <h1>Seu carrinho está vazio</h1>
          </div>
        </div>
    )
}