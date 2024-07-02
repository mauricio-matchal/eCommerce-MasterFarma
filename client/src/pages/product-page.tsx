import { NavBar } from "@/components/navbar";
import { ProductCardP } from "@/components/product-card-portrait";
import CarmedProduct from "../assets/carmed-product.png";
import LogoCopy from "@/assets/logo.large";
import { ProductCardL } from "@/components/product-card-landscape";
import { ProductInfoDisplay } from "@/components/product-info-display";

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
      <footer className="w-full mt-[72px]">
        <div className="h-[40px] bg-anil-950"></div>
        <section className="bg-anil-900 flex flex-col items-center gap-8 py-16">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-6">
              <p className="text-xl">
                <span className="text-2xl font-extrabold">Atendimento</span>
                <br />
                Perguntas frequentes
                <br />
                Aviso de privacidade
                <br />
                Política de entrega
              </p>
            </div>
            <div className="flex flex-col mr-12">
              <p className="text-xl">
                <span className="text-2xl">Institucional</span>
                <br />
                Nossa história
                <br />
                Nossas Lojas
                <br />
                Trabalhe conosco
              </p>
            </div>
            <LogoCopy />
          </div>
          <p>Copyright © 2024</p>
        </section>
      </footer>
    </div>
  );
}
