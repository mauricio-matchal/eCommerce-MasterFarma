import { ProductCardP } from "@/components/product-card-portrait";
import Image from "next/image";
import Cabecalho from "@/components/cabecalho/cabecalho";
import { NavBar } from "@/components/navbar";
import ProductPage from "@/pages/product-page";

export default function Home() {
  return (
    <div className="">
      <ProductPage />
    </div>
  );
}
