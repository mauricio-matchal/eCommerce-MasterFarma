"use client";
import "@/app/page.module.css";
import { Filter } from "@/components/filter";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import CarmedProduct from "@/assets/carmed-product.png";
import { ProductCardP } from "@/components/product-card-portrait";
import { useState } from "react";
import { InputImageLarge } from "@/components/input-image-large";
import { InputImage } from "@/components/input-image";

export function ProductManagePage() {
  const [createIsVisible, setCreateIsVisible] = useState(true);

  function toggleCreateVisibility() {
    setCreateIsVisible(!createIsVisible);
  }

  function handleSubmit() {
    // implementar rota de criação de produto
  }

  return (
    <div className="w-screen flex flex-col items-center bg-anil-50">
      <NavBar />
      <h1 className="mt-[72px] text-[60px] font-extrabold text-anil-950">
        Gestão dos produtos
      </h1>
      {createIsVisible ? (
        <div className="w-[1224px] h-[733px] bg-anil-950 rounded-[30px] flex flex-col justify-center items-center mt-6">
          <div className="">
            <h2 className="font-extrabold text-4xl">Criar Produto</h2>

            {/* Inputs pequeno e grande */}
            <div className="flex flex-row gap-6 mt-3">
              <section className="flex flex-col gap-2">
                <InputImage />
                <InputImage />
                <InputImage />
                <InputImage />
              </section>
              <InputImageLarge />

              {/* Formulário para adição de Produto */}
              <section className="flex flex-col">
                {/* Nome */}
                <label
                  className="text-2xl font-extrabold mb-2"
                  htmlFor="nomeDoProduto"
                >
                  Nome do Produto
                </label>
                <input
                  type="text"
                  id="nomeDoProduto"
                  placeholder="Nome do produto"
                  className="bg-anil-50 outline-none rounded-[15px] w-[392px] h-[87px] pl-4 pb-10 text-anil-950 text-base font-bold mb-4"
                />

                {/* Preços e Código */}
                <div className="grid grid-cols-2 gap-6 gap-y-4 mb-4">
                  <div className="flex flex-col">
                    <label
                      className="text-2xl font-extrabold mb-2"
                      htmlFor="precoAntigo"
                    >
                      Preço antigo
                    </label>
                    <input
                      type="text"
                      id="precoAntigo"
                      placeholder="R$0,00"
                      className="bg-anil-50 outline-none rounded-[15px] w-[182px] h-[45px] pl-4 text-anil-950 text-base font-bold"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-2xl font-extrabold mb-2"
                      htmlFor="precoAtual"
                    >
                      Preço atual
                    </label>
                    <input
                      type="text"
                      id="precoAtual"
                      placeholder="R$0,00"
                      className="bg-anil-50 outline-none rounded-[15px] w-[182px] h-[45px] pl-4 text-anil-950 text-base font-bold"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-2xl font-extrabold mb-2"
                      htmlFor="codigo"
                    >
                      Código
                    </label>
                    <input
                      type="text"
                      id="codigo"
                      placeholder="00000000"
                      className="bg-anil-50 outline-none rounded-[15px] w-[182px] h-[45px] pl-4 text-anil-950 text-base font-bold"
                    />
                  </div>
                </div>

                {/* Botões */}
                <div>
                  <button
                    onClick={toggleCreateVisibility}
                    className="rounded-[15px] w-[192px] h-[69px] border-[1px] border-anil-600 mr-2 text-2xl font-extrabold"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="rounded-[15px] w-[192px] h-[69px] bg-anil-600 text-2xl font-extrabold"
                  >
                    Confirmar
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        // Botão que aciona o modal
        <button
          onClick={toggleCreateVisibility}
          className="bg-anil-950 py-4 max-w-[845px] w-full mt-6 mx-4 rounded-[30px] text-white text-[60px] font-extrabold h-[105px] justify-center leading-[73px]"
        >
          Adicionar produto
        </button>
      )}
      
      {/* Grid de Produtos e Filtro */}
      <main className="grid grid-cols-4 gap-6 mt-6">
        <Filter />
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
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
        />
      </main>
      <Footer />
    </div>
  );
}
