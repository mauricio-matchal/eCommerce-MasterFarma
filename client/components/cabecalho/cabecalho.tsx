'use client'

import Image from 'next/image';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import CarmedProduct from "@/assets/carmed-product.png";
import Logo from "../../public/Logo.svg";
import Lupa from "../../public/lupa.svg";
import Login from "../../public/login.svg";
import Carrinho from "../../public/carrinho.svg";
import Link from 'next/link';
import styles from "./cabecalho.module.css";
import axios from 'axios';
import { useRouter } from 'next/navigation'; //hook que usado na linha 18 e na função ir para o carrinho
import { Filter } from '@/components/filter/filter';
import { ProductCardP } from '@/components/product card portrait/product-card-portrait';

type Produto = {
    codigo: number;
    nome: string;
    preco_ant: number;
    preco_atual: number;
    categoria: string;
    // image: StaticImageData;
  };

export default function Cabecalho() {
    const [pesquisa, setPesquisa] = useState('');
    const [resultados, setResultados] = useState<Produto[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]); //adiçao desse useState
    
    const router = useRouter();

    const barraPesquisa = (event: ChangeEvent<HTMLInputElement>) => {
        const valorPesquisa = event.target.value;
        setPesquisa(valorPesquisa);
    };

    const buscarProdutos = async (event: FormEvent<HTMLFormElement>) => { //função de busca de produtos por nome
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/produtos/nome/${pesquisa}`);
            setResultados(response.data.produtos || []);
            setFilteredProducts(response.data); //adiçao do setFiltered
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    const irParaCarrinho = () => { //função para levar o usuário ao carrinho(talvez não precise dele mas deixei pra caso seja util, se não pode apagar!)
        router.push('/carrinho');
    };

    return (
        <> 
        <div className={styles.cabecalho}>
            <div className={styles.topo}>
                <Link className={styles.txt} href='/'>
                    <div className={styles.logo}>
                        <Image className={styles.img} src={Logo} alt="Logo" priority />
                        <p><strong>Master</strong>Farma</p>
                    </div>
                </Link>
                
                <div className={styles.components}>
                    <div className={styles.login}>
                        <Image className={styles.imgLogin} src={Login} alt="Login" priority />
                        <Link className={styles.link} href="/gestao">
                            <button type="submit" className={styles.botaoLogin}>Entrar</button>
                        </Link>
                    </div>
                    
                    <Link className={styles.txt} href='/carrinho'>
                        <div className={styles.carrinho}>
                            <button type="submit" className={styles.botaoCarrinho} >
                                <Image className={styles.imgCarrinho} src={Carrinho} alt="Carrinho" priority />
                            </button>
                            <p>R$0,00</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/*fazer com que a função de busca redirecione para a página de resultados e gerar o resultado dessa busca na página de resultados (um map talvez pode ajudar ) */}
            <div className={styles.barraPesquisa}> 
                <form className={styles.formPesquisa} onSubmit={buscarProdutos}>
                    <input
                        type="text"
                        value={pesquisa}
                        onChange={barraPesquisa}
                        placeholder="O que você deseja?"
                        className={styles.inputPesquisa}
                    />
                    <button type="submit" className={styles.botao}>
                        <Image className={styles.lupa} src={Lupa} alt="Lupa" priority />
                    </button>
                </form>
            </div>
        </div>
        {pesquisa ? (
            <div className={styles.paginaPesquisa}>
                <h1>Exibindo resultados para: {pesquisa}</h1>
                <main className={styles.grid}>
                    <Filter setFilteredProducts={setFilteredProducts} /> {/* modificação */}
                    {filteredProducts.length > 0 ? (
                        <p>No products available.</p>
                        // filteredProducts.map((product) => (
                        //     <ProductCardP
                        //     key={product.codigo}
                        //     image={CarmedProduct} // Adjust according to your image attribute
                        //     title={product.nome}
                        //     oldPrice={product.preco_ant}
                        //     price={product.preco_atual}
                        //     installment={Math.ceil((product.preco_atual / 3) * 100) / 100} // Example calculation for installment
                        //     // discutir como vai funcionar essa parte
                        //     />
                        // ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </main>
            </div>
        ) : ""}
        </>
    );
}
