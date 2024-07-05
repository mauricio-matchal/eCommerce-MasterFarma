import { ProductCardP } from "@/components/product-card-portrait";
import Image from "next/image";
import { NavBar } from "@/components/navbar";
import ProductPage from "@/pages/product-page";
import { ProductManagePage } from "@/pages/product-manage";

export default function Home() {
  return (
    <ProductManagePage />
    // <div className="home">
    //   <p>HOME</p>
    // </div>
  );
}
