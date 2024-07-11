"use client"

import style from "./ofertas.module.css";
import Image from "next/image";
import Hidratante from "../../public/hidratante.svg";
import Traco from "../../public/traco.svg";
import Rolagem from "../../components/indicadorNav/rolagemO";
import { useState, useEffect } from "react";
import axios from "axios";

interface OfertasProps {
  tituloSecao: string;
}

export interface ListaProdutos {
  nome: string;
  preco_ant: number;
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
              <h2>{item.nome}</h2>
            </div>
            <div className={style.precoOriginal}>
              <p>R${item.preco_ant?.toFixed(2)}</p>
              <Image className={style.traco} src={Traco} alt="traço" />
            </div>
            <div className={style.desconto}>
              <h1>R${item.preco_atual?.toFixed(2)}</h1>
            </div>
            <div className={style.parcela}>
              <p>ou 3x de {(item.preco_atual / 3).toFixed(2)}</p>
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
