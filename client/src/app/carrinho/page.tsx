"use client"

import Vistos from "../../../components/ofertas/ofertas";
import Outros from "../../../components/maisVendidos/vendidos";
import CarrinhoCheio from "../../../components/carrinhoCheio/carrinhoCheio";
import CarrinhoVazio from "../../../components/carrinhoVazio/carrinhoVazio";
import { useEffect, useState } from "react";
import axios from "axios";
import { ItemCarrinho } from "../../../components/carrinhoCheio/carrinhoCheio";

export default function Carrinho() {
  const [itensCar, setItensCar] = useState<ItemCarrinho[]>([]);

  async function fetchItensCar() {
    try {
      const response = await axios.get("http://localhost:3000/carrinho");
      console.log("API Response:", response.data);
      
      // Check if the response is an array
      if (Array.isArray(response.data)) {
        setItensCar(response.data);
      } else {
        console.error("API response is not an array:", response.data);
        setItensCar([]);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos no carrinho:", error);
      setItensCar([]);
    }
  }

  useEffect(() => {
    fetchItensCar();
    const interval = setInterval(fetchItensCar, 1000); // Busca a cada 1 segundos

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
  }, []);

  return (
    <>
      {itensCar.length !== 0 ? (
        <CarrinhoCheio item={itensCar} />
      ) : (
        <CarrinhoVazio/>
      )}

      <Vistos tituloSecao="Vistos recentemente" />
      <Outros tituloSecao="Você também pode gostar" />
    </>
  );
}
