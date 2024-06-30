import { ProductCardP } from "@/components/product-card-portrait";
import Image from "next/image";
import CarmedProduct from "../assets/carmed-product.png";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <ProductCardP
        image={CarmedProduct}
        title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
        oldPrice={49.9}
        price={29.9}
        installment={9.99}
      />
    </div>
  );
}
