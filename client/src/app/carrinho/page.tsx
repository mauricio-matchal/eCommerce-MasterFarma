"use client"
import { useState, useEffect} from 'react';
import styles from "./carrinho.module.css";
import Image from "next/image";
import CarrinhoV from "../../../public/carrinhoVazio.svg";
import Vistos from "../../../components/ofertas/ofertas";
import Outros from "../../../components/maisVendidos/vendidos"
import CarrinhoCheio from "../../../components/carrinhoCheio/carrinhoCheio";

export default function Carrinho(){
    const [itensCar,setItensCar] = useState([]);

    useEffect(() =>{

        const fetchItensCar = async () => {
            try{
                const retorno = await fetch('http://localhost:3000/carrinho');
                if (retorno.ok){
                    const data = await retorno.json();
                    setItensCar(data);
                }
                else{
                    console.error('Erro ao buscar itens do carrinho');
                }
            } catch(error){
                console.error('Erro de rede:', error);
            } 
            
        };

        fetchItensCar();
    }, []);

    return(
        <>
            {itensCar.length === 0 ? (
                <div className={styles.carrinho}>
                   <div className={styles.titulo}>
                        <Image className={styles.img} src={CarrinhoV} alt="carrinhoVazio" priority />
                        <h1>Seu carrinho está vazio</h1>
                    </div>
            
                </div>

            ) : (
                <CarrinhoCheio/>
            )}


            <Vistos tituloSecao="Vistos recentemente"/>

            <Outros tituloSecao="Você também pode gostar"/>

        </>
        
    )
}