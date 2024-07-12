import Image from "next/image";
import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import styles from "./carrinhoCheio.module.css";
import Produto from "../../public/hidratante.svg";
import Traco from "../../public/traco.svg";
import Lixeira from "../../public/lixeira.svg";
import CarroCheio from "../../public/carrinhoCheio.svg";


export interface ItemCarrinho {
  quantidade: number;
  product: number;
  produto: {
    nome: string;
    preco_ant: number;
    preco_atual: number;
    codigo: number;
    categoria: string;
  };
}

interface CarrinhoCheioProps {
  item: ItemCarrinho[];
}

export default function CarrinhoCheio({ item }: CarrinhoCheioProps) {
  const [cep, setCep] = useState("");
  const [cupom, setCupom] = useState("");
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [frete, setFrete] = useState(0.00);

  const informarCep = (event: ChangeEvent<HTMLInputElement>) => {
    const valorCep = event.target.value;
    setCep(valorCep);
  };

  const informarCupom = (event: ChangeEvent<HTMLInputElement>) => {
    const valorCupom = event.target.value;
    setCupom(valorCupom);
  };

  async function fetchItemCarrinho() {
    try {
      const response = await axios.get("http://localhost:3000/carrinho");
      console.log("API Response:", response.data);
      
      // Check if the response is an array
      if (Array.isArray(response.data)) {
        setItens(response.data);
      } else {
        console.error("API response is not an array:", response.data);
        setItens([]);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos no carrinho:", error);
      setItens([]);
    }
  }

  async function deletarItem(codigo: number) {
    try {
      await axios.delete(`http://localhost:3000/carrinho/${codigo}`);
      fetchItemCarrinho();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  }

  async function editarQuant(codigo: number, novaQuantidade: number) {
    try{
      await axios.put(`http://localhost:3000/carrinho/${codigo}`, {quantidade: novaQuantidade});
      fetchItemCarrinho();
    } catch (error){
      console.error("Erro ao editar quantidade do produto:", error);
    }
  }

  const aumentarQuant = (item: ItemCarrinho) =>{
    const novaQuantidade = item.quantidade + 1;
    editarQuant(item.product, novaQuantidade);
  }

  const diminuirQuant = (item: ItemCarrinho) =>{
    if(item.quantidade > 1){
      const novaQuantidade = item.quantidade - 1;
      editarQuant(item.product, novaQuantidade);
    }
  };

  const calcularSubtotal = () => {
    return itens.reduce((acc, item) => acc + item.produto.preco_atual * item.quantidade, 0).toFixed(2);
  };

  const calcularTotal = () => {
    const subtotal = parseFloat(calcularSubtotal());
    return (subtotal + frete).toFixed(2);
  };

  useEffect(() => {
    fetchItemCarrinho();
  }, []);

  return (
    <div className={styles.carrinhoCheio}>
      <div className={styles.titulo}>
        <Image className={styles.img} src={CarroCheio} alt="carrinhoCheio" priority />
        <h1>Seu carrinho de compras</h1>
      </div>

      <div className={styles.elemento}>
  <div className={styles.produtoContainer} style={{ display: 'flex', flexDirection: 'row' }}>
    {itens.map((item) => (
      <div key={item.product} className={styles.produto}>
        <Image className={styles.imagem} src={Produto} alt="hidratante" />

        <div className={styles.informacoes}>
          <div className={styles.tituloP}>
            <h2>{item.produto.nome}</h2>
          </div>

          <div className={styles.precoOriginal}>
            <p>R${item.produto.preco_ant}</p>
            <Image className={styles.traco} src={Traco} alt="traço" />
          </div>

          <div className={styles.desconto}>
            <h1>R${item.produto.preco_atual}</h1>
          </div>

          <div className={styles.parcela}>
            <p>ou 3x de R${(item.produto.preco_atual / 3).toFixed(2)}</p>
          </div>
        </div>

        <div className={styles.total}>
          <div className={styles.quantidade}>
            <button
              type="button"
              className={styles.botaoDiminuir}
              onClick={() => diminuirQuant(item)}
            >-</button>
            <div className={styles.quantProd}>
              <p>{item.quantidade}</p>
            </div>

            
            <button
              type="button"
              className={styles.botaoAumentar}
              onClick={() => aumentarQuant(item)}
            >+</button>
          </div>

          <div className={styles.valorTotal}>
            <h2>Subtotal</h2>
            <div className={styles.caixinha}>
              <p>R${(item.produto.preco_atual * item.quantidade).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className={styles.lixeira}>
          <button
            type="button"
            onClick={() => deletarItem(item.product)}
            className={styles.botaoDelete}
          >
            <Image className={styles.lixo} src={Lixeira} alt="lixo" />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Renderização condicional da div 'calculo' */}
        {itens.length > 0 && (
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
                  <p className={styles.boldText}>R${calcularSubtotal()}</p>
                </div>

                <div className={styles.valorCe}>
                  <p className={styles.text}>Entrega</p>
                  <p className={styles.boldText}>R${frete.toFixed(2)}</p>
                </div>
              </div>

              <div className={styles.divisao}></div>

              <div className={styles.totalPedido}>
                <div className={styles.totalAPagar}>
                  <p className={styles.text}>Total</p>
                  <p className={styles.boldText}>R${calcularTotal()}</p>
                </div>

                <div className={styles.botoesCompra}>
                  <button type="submit" className={styles.botaoContinuar}>Continuar comprando</button>
                  <button type="submit" className={styles.botaoFinalizar}>Finalizar compra</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
