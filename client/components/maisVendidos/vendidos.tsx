"use client";

import style from "./vendidos.module.css";
import Image from "next/image";
import ProdutoImage from "../../public/hidratante.svg";
import Traco from "../../public/traco.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface VendidosProps {
  tituloSecao: string;
}

export interface ListaProdutos {
  nome: string;
  preco_ant: number;
  preco_atual: number;
  codigo: number;
  categoria: string;
}

export default function Vendidos({ tituloSecao }: VendidosProps) {
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
    <div className={style.maisVendidos}>
      <div className={style.titulo}>
        <h1>{tituloSecao}</h1>
      </div>

      <div className={style.componente}>
        {itens.slice(0, 2).map((item) => (
          <div key={item.codigo} className={style.produto}>
            <Image className={style.imagem} src={ProdutoImage} alt="Produto" />

            <div className={style.informacoes}>
            <div className={style.tituloP}>
              <Link className={style.link} href="/produto">
                <h2 className={style.tit}>{item.nome}</h2>
              </Link>
            </div>
              <div className={style.precoOriginal}>
                <p>R$R${formatFloatWithComma(item.preco_ant)}</p>
                <Image className={style.traco} src={Traco} alt="Traço" />
              </div>
              <div className={style.desconto}>
                <h1>R$R${formatFloatWithComma(item.preco_atual)}</h1>
              </div>
              <div className={style.parcela}>
                <p>ou 3x de {formatFloatWithComma(item.preco_atual/3)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
