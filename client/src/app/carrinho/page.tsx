import styles from "./carrinho.module.css";
import Image from "next/image";
import CarrinhoV from "../../../public/carrinhoVazio.svg";
import Vistos from "../../../components/ofertas/ofertas";
import Outros from "../../../components/maisVendidos/vendidos"
import CarrinhoCheio from "../../../components/carrinhoCheio/carrinhoCheio";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Carrinho(){
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => { //função para listar produtos do carrinho
        const fetchCarrinho = async () => {
            try {
                const response = await axios.get('http://localhost:3000/carrinho');
                setCarrinho(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos do carrinho:', error);
            }
        };

        fetchCarrinho();
    }, []);

    //usar um carrinho.length === 0 para verificar se o carrinho está vazio pode ser uma opção para ver se o carrinho está vazio
    return(
        <>
            <div className={styles.carrinho}>
    <           div className={styles.titulo}>
                    <Image className={styles.img} src={CarrinhoV} alt="carrinhoVazio" priority />
                    <h1>Seu carrinho está vazio</h1>
                </div>

            </div>

            <Vistos tituloSecao="Vistos recentemente"/>

            <Outros tituloSecao="Você também pode gostar"/>

        </>
        
    )
}