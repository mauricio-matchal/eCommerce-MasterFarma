'use client'

import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import Logo from "../../public/Logo.svg";
import Lupa from "../../public/lupa.svg";
import Login from "../../public/login.svg";
import Carrinho from "../../public/carrinho.svg";
import Link from 'next/link';
import styles from "./cabecalho.module.css";

export default function Cabecalho() {
    const [pesquisa, setPesquisa] = useState('');

    const barraPesquisa = (event: ChangeEvent<HTMLInputElement>) => {
        const valorPesquisa = event.target.value;
        setPesquisa(valorPesquisa);
    };

    return (
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
                        <button type="submit" className={styles.botaoLogin}>Entrar</button>
                    </div>
                    
                    <Link className={styles.txt} href='/carrinho'>
                        <div className={styles.carrinho}>
                            <button type="submit" className={styles.botaoCarrinho}>
                                <Image className={styles.imgCarrinho} src={Carrinho} alt="Carrinho" priority />
                            </button>
                            <p>R$0,00</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.barraPesquisa}>
                <form className={styles.formPesquisa}>
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
    );
}
