import { NavBar } from "@/components/navbar";
import { ProductCardP } from "@/components/product-card-portrait";
import CarmedProduct from "../assets/carmed-product.png";
import LogoCopy from "@/assets/logo.large";
import { ProductCardL } from "@/components/product-card-landscape";
import { ProductInfoDisplay } from "@/components/product-info-display";
import { Footer } from "@/components/footer";

export default function ProductPage() {
  return (
    <div className="w-screen flex flex-col items-center bg-anil-50">
      <NavBar />
      <div className="h-[72px]"></div>
      <ProductInfoDisplay
        image={CarmedProduct}
        title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
        oldPrice={49.99}
        price={29.99}
        installment={9.99}
        code={40028922}
      />
      <h1 className="text-6xl font-extrabold text-anil-950 mt-[72px]">
        Itens semelhantes
      </h1>
      <section className="flex flex-row gap-6 mt-6">
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
      </section>
      <h1 className="text-6xl font-extrabold text-anil-950 mt-[72px]">
        Outros Produtos
      </h1>
      <section className="flex flex-row gap-6 mt-6">
        <ProductCardL
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
        <ProductCardL
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
      </section>
      <Footer />
    </div>
  );
}