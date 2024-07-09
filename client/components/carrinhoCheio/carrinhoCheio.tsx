"use client"

import Image from "next/image";
import { useState, ChangeEvent } from 'react';
import styles from "./carrinhoCheio.module.css";
import Produto from "../.././public/hidratante.svg"
import Traco from "../../public/traco.svg";
import Lixeira from "../../public/lixeira.svg";
import CarroCheio from "../../public/carrinhoCheio.svg";

export default function CarrinhoCheio(){

    const [cep, setCep] = useState('');
    const [cupom, setCupom] = useState('');

    const informarCep = (event: ChangeEvent<HTMLInputElement>) => {
        const valorCep = event.target.value;
        setCep(valorCep);
    };

    const informarCupom = (event: ChangeEvent<HTMLInputElement>) => {
        const valorCupom = event.target.value;
        setCep(valorCupom);
    };

    return(
        <div className={styles.carrinhoCheio}>

            <div className={styles.titulo}>
                <Image className={styles.img} src={CarroCheio} alt="carrinhoCheio" priority />
                <h1>Seu carrinho de compras</h1>
            </div>

            <div className={styles.elemento}>
                <div className={styles.produto}>
                    <Image className={styles.imagem} src={Produto} alt="hidratante" />

                    <div className={styles.informacoes}>
                        <div className={styles.tituloP}>
                            <h2>Hidratante Labial <br /> Carmed Barbie 65 <br /> Pink 10g</h2>
                        </div>

                        <div className={styles.precoOriginal}>
                            <p>R$49,90</p>
                            <Image className={styles.traco} src={Traco} alt="traço" />
                        </div>

                        <div className={styles.desconto}>
                            <h1>R$ 29,90</h1>
                        </div>

                        <div className={styles.parcela}>
                            <p>ou 3x de 9,99</p>
                        </div>
                    </div>

                    <div className={styles.total}>
                        <div className={styles.quantidade}>
                            <button type="submit" className={styles.botaoDiminuir}>-</button>
                            <div className={styles.quantProd}>
                                <p>01</p>
                            </div>
                            <button type="submit" className={styles.botaoAumentar}>+</button>
                        </div>

                        <div className={styles.valorTotal}>
                            <h2>Subtotal</h2>
                            <div className={styles.caixinha}>
                                <p>R$0,00</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.lixeira}>
                        <Image className={styles.lixo} src={Lixeira} alt="lixo" />
                    </div>
                </div>

                <div className={styles.calculo}>

                    <div className={styles.cepCupom}>
                            
                            <div className={styles.formCep}>
                                <p>Calcule o valor do frete</p>

                                <div className={styles.campoDados}>
                                    <form className={styles.formInformar}>
                                        <input
                                            type="text"
                                            value={cep}
                                            onChange={informarCep}
                                            placeholder="Digite seu CEP"
                                            className={styles.input}
                                        />
                                    </form>
                                        <button type="submit" className={styles.botaoOK}>Ok</button>
                                </div>
                                    

                                <div className={styles.formCupom}>
                                    <p>Cupom do desconto</p>

                                    <div className={styles.campoDados}>
                                        <form className={styles.formInformar}>
                                            <input
                                                type="text"
                                                value={cep}
                                                onChange={informarCupom}
                                                placeholder="Digite seu Cupom"
                                                className={styles.input}
                                            />
                                        </form>
                                        <button type="submit" className={styles.botaoOK}>Ok</button>
                                    </div>
                                </div>
        
                            </div>

                            <div className={styles.divisao}></div>

                            <div className={styles.resumo}>
                                <p>Resumo do pedido</p>
                                <div className={styles.subT}>
                                    <p className={styles.text}>Subtotal</p>
                                    <p className={styles.boldText}>R$0,00</p>
                                </div>

                                <div className={styles.valorCe}>
                                    <p className={styles.text}>Entrega</p>
                                    <p className={styles.boldText}>R$0,00</p>
                                </div>
                            </div>

                            <div className={styles.divisao}></div>

                            <div className={styles.totalPedido}>
                                <div className={styles.totalAPagar}>
                                    <p className={styles.text}>Total</p>
                                    <p className={styles.boldText}>R$0,00</p>
                                </div>

                                <div className={styles.botoesCompra}>
                                    <button type="submit" className={styles.botaoContinuar}>Continuar comprando</button>
                                    <button type="submit" className={styles.botaoFinalizar}>Finalizar compra</button>
                                </div>
                            </div>

                    </div>


                </div>
            </div>

        </div>
    )
}