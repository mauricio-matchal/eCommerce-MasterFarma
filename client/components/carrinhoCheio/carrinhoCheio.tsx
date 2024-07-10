"use client";

import Image from "next/image";
import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import styles from "./carrinhoCheio.module.css";
import Produto from "../.././public/hidratante.svg";
import Traco from "../../public/traco.svg";
import Lixeira from "../../public/lixeira.svg";
import CarroCheio from "../../public/carrinhoCheio.svg";

export interface ItemCarrinho {
  nome: string;
  preco_ant: number;
  preco_atual: number;
  codigo: number;
  categoria: string;
  quantidade: number;
}

export default function CarrinhoCheio() {
  const [cep, setCep] = useState("");
  const [cupom, setCupom] = useState("");
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [itemAtual, setItemAtual] = useState<ItemCarrinho | null>(null);

  const informarCep = (event: ChangeEvent<HTMLInputElement>) => {
    const valorCep = event.target.value;
    setCep(valorCep);
  };

  const informarCupom = (event: ChangeEvent<HTMLInputElement>) => {
    const valorCupom = event.target.value;
    setCupom(valorCupom);
  };

  const fetchItemCarrinho = async () => {
    try {
      const response = await axios.get("http://localhost:3000/carrinho");
      console.log("Resposta da API:", response.data);
      if (Array.isArray(response.data)) {
        setItens(response.data);
      } else {
        setItens([]); // Garantir que seja um array vazio se a resposta não for um array
      }
    } catch (error) {
      console.error("Erro ao listar produto no carrinho:", error);
    }
  };

  const deletarItem = async (codigo: number) => {
    try {
      const response = await axios.delete(`http://localhost:3000/carrinho/${codigo}`);
      console.log("Resposta da API ao deletar item:", response.data);
      const itemRemovido = itens.filter((item) => item.codigo !== codigo);
      setItens(itemRemovido);
    } catch (error) {
      console.error("Erro ao retirar item:", error);
    }
  };

  const aumentarQuantidade = (codigo: number) => {
    const itensAtualizados = itens.map((item) => {
      if (item.codigo === codigo) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    setItens(itensAtualizados);
  };

  const diminuirQuantidade = (codigo: number) => {
    const itensAtualizados = itens
      .map((item) => {
        if (item.codigo === codigo) {
          const novaQuantidade = item.quantidade - 1;
          if (novaQuantidade <= 0) {
            return null;
          } else {
            return { ...item, quantidade: novaQuantidade };
          }
        }
        return item;
      })
      .filter(Boolean); // Filtra para remover itens nulos (quantidade <= 0)
    setItens(itensAtualizados as ItemCarrinho[]);
  };

  useEffect(() => {
    fetchItemCarrinho();
    const interval = setInterval(fetchItemCarrinho, 1000); // Busca a cada 1 segundo
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Estado de itens atualizado:", itens); // Verifique o estado
  }, [itens]);

  return (
    <div className={styles.carrinhoCheio}>
      <div className={styles.titulo}>
        <Image className={styles.img} src={CarroCheio} alt="carrinhoCheio" priority />
        <h1>Seu carrinho de compras</h1>
      </div>
      
      <div className={styles.elemento}>
        <div className={styles.produtoContainer}>
          {itens.map((item) => (
            <div key={item.codigo} className={styles.produto}>
              <Image className={styles.imagem} src={Produto} alt="hidratante" />

              <div className={styles.informacoes}>
                <div className={styles.tituloP}>
                  <h2>{item.nome}</h2>
                </div>

                <div className={styles.precoOriginal}>
                  <p>{item.preco_ant}</p>
                  <Image className={styles.traco} src={Traco} alt="traço" />
                </div>

                <div className={styles.desconto}>
                  <h1>{item.preco_atual}</h1>
                </div>

                <div className={styles.parcela}>
                  <p>ou 3x de {item.preco_atual / 3}</p>
                </div>
              </div>

              <div className={styles.total}>
                <div className={styles.quantidade}>
                  <button
                    type="submit"
                    onClick={() => diminuirQuantidade(item.codigo)}
                    className={styles.botaoDiminuir}
                  >
                    -
                  </button>
                  <div className={styles.quantProd}>
                    <p>{item.quantidade}</p>
                  </div>
                  <button
                    type="submit"
                    onClick={() => aumentarQuantidade(item.codigo)}
                    className={styles.botaoAumentar}
                  >
                    +
                  </button>
                </div>

                <div className={styles.valorTotal}>
                  <h2>Subtotal</h2>
                  <div className={styles.caixinha}>
                    <p>R$0,00</p>
                  </div>
                </div>
              </div>

              <div className={styles.lixeira}>
                <button
                  type="submit"
                  onClick={() => deletarItem(item.codigo)}
                  className={styles.botaoDelete}
                >
                  <Image className={styles.lixo} src={Lixeira} alt="lixo" />
                </button>
              </div>
            </div>
          ))}
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
                      value={cupom}
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
  );
}
