"use client";
import style from "./ofertas.module.css";
import Image from "next/image";
import Hidratante from "../../public/hidratante.svg";
import Traco from "../../public/traco.svg";
import Rolagem from "../../components/indicadorNav/rolagemO";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface OfertasProps {
  tituloSecao: string;
}

export interface ListaProdutos {
  nome: string;
  preco_ant?: number; // opcional, se necessário
  preco_atual: number;
  codigo: number;
  categoria: string;
}

export default function Ofertas({ tituloSecao }: OfertasProps) {
  const [itens, setItens] = useState<ListaProdutos[]>([]);

  async function fetchListaProdutos() {
    try {
      const response = await axios.get<ListaProdutos[]>("http://localhost:3000/produtos");
      console.log("API Response:", response.data);

      if (Array.isArray(response.data)) {
        setItens(response.data);
      } else {
        console.error("A resposta da API não é um array:", response.data);
        setItens([]);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
      setItens([]);
    }
  }

  useEffect(() => {
    fetchListaProdutos();
    const interval = setInterval(fetchListaProdutos, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatFloatWithComma(number: number) {
    return number.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  return (
    <div className={style.ofertas}>
      <div className={style.titOferta}>
        <h1>{tituloSecao}</h1>
      </div>

      <div className={style.componente}>
        {itens.map((item) => (
          <div key={item.codigo} className={style.produto}>
            <Image className={style.imagem} src={Hidratante} alt="hidratante" />
            <div className={style.titulo}>
              <Link className={style.link} href="/produto/product-page">
                <h2 className={style.tit}>{item.nome}</h2>
              </Link>
            </div>
            <div className={style.precoOriginal}>
              {item.preco_ant && (
                <>
                  <p>R${formatFloatWithComma(item.preco_ant)}</p>
                  <Image className={style.traco} src={Traco} alt="traço" />
                </>
              )}
            </div>
            <div className={style.desconto}>
              <h1>R${formatFloatWithComma(item.preco_atual)}</h1>
            </div>
            <div className={style.parcela}>
              <p>ou 3x de {formatFloatWithComma(item.preco_atual/3)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={style.rolagem}>
        <Rolagem />
      </div>
    </div>
  );
}
