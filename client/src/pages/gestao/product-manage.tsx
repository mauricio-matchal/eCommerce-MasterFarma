"use client";
import { Filter } from "@/components/filter/filter";
import CarmedProduct from "@/assets/carmed-product.png";
import { ProductCardP } from "@/components/product card portrait/product-card-portrait";
import { useState } from "react";
import { InputImageLarge } from "@/components/input image large/input-image-large";
import { InputImage } from "@/components/input image/input-image";
import style from "@/pages/gestao/manage.module.css";

export function ProductManagePage() {
  const [createIsVisible, setCreateIsVisible] = useState(false);

  function toggleCreateVisibility() {
    setCreateIsVisible(!createIsVisible);
  }

  function handleSubmit() {
    // implementar rota de criação de produto
  }

  function manageDelete() {
    console.log("Deletado");
  }

  function manageEdit() {
    console.log("Editado");
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Gestão dos produtos</h1>
      {createIsVisible ? (
        <div className={style.modalcontainer}>
          <div className={style.center}>
            <h2 className={style.title}>Criar Produto</h2>

            {/* Inputs pequeno e grande */}
            <div className={style.layout}>
              <section className={style.inputssmall}>
                <InputImage />
                <InputImage />
                <InputImage />
                <InputImage />
              </section>
              <InputImageLarge />

              {/* Formulário para adição de Produto */}
              <section className={style.formcontainer}>
                {/* Nome */}
                <label className={style.label} htmlFor="nomeDoProduto">
                  Nome do Produto
                </label>
                <textarea
                  name="nomeDoProduto"
                  id="nomeDoProduto"
                  className={style.textarea}
                  placeholder="Nome do produto"
                ></textarea>

                {/* Preços e Código */}
                <div className={style.textinput}>
                  <div>
                    <label className={style.label} htmlFor="precoAntigo">
                      Preço antigo
                    </label>
                    <input
                      type="text"
                      id="precoAntigo"
                      placeholder="R$0,00"
                      className={style.textinput}
                    />
                  </div>
                  <div>
                    <label className={style.label} htmlFor="precoAtual">
                      Preço atual
                    </label>
                    <input
                      type="text"
                      id="precoAtual"
                      placeholder="R$0,00"
                      className={style.textinput}
                    />
                  </div>
                  <div>
                    <label className={style.label} htmlFor="codigo">
                      Código
                    </label>
                    <input
                      type="text"
                      id="codigo"
                      placeholder="00000000"
                      className={style.textinput}
                    />
                  </div>
                </div>

                {/* Categorias */}

                <div>
                  <h3 className={style.label}>Categoria</h3>
                  <label htmlFor=""></label>
                  <div className={style.category}>
                    <input
                      type="radio"
                      name="categoria"
                      id="meds"
                      className={style.adjustmargin}
                    />
                    <label htmlFor="meds" className={style.modalcategory}>
                      Medicamentos
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="suplementos"
                      className={style.adjustmargin}
                    />
                    <label htmlFor="suplementos" className="font-medium">
                      Suplementos
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="higiene"
                      className={style.adjustmargin}
                    />
                    <label htmlFor="higiene" className="font-medium">
                      Higiene
                    </label>
                  </div>
                  <div className={style.category}>
                    <input
                      type="radio"
                      name="categoria"
                      id="beleza"
                      className={style.adjustmargin}
                    />
                    <label htmlFor="beleza" className="font-medium">
                      Beleza
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="bebes"
                      className={style.adjustmargin}
                    />
                    <label htmlFor="bebes" className="font-medium">
                      Bebês
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="perfumaria"
                      className={style.adjustmargin}
                    />
                    <label htmlFor="perfumaria" className="font-medium">
                      Perfumaria
                    </label>
                  </div>
                </div>

                {/* Botões */}
                <div className={style.marginTopRem}>
                  <button
                    onClick={toggleCreateVisibility}
                    className={style.cancel}
                  >
                    Cancelar
                  </button>
                  <button onClick={handleSubmit} className={style.submit}>
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
          className={style.createproduct}
        >
          Adicionar produto
        </button>
      )}

      {/* Grid de Produtos e Filtro */}
      <main className={style.grid}>
        <Filter />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
          editable={true}
          manageDelete={manageDelete}
          manageEdit={manageEdit}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
          editable={true}
          manageDelete={manageDelete}
          manageEdit={manageEdit}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
          editable={true}
          manageDelete={manageDelete}
          manageEdit={manageEdit}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
          editable={true}
          manageDelete={manageDelete}
          manageEdit={manageEdit}
        />
        <ProductCardP
          image={CarmedProduct}
          title={"Hidratante Labial Carmed Barbie 65 Pink 10g"}
          oldPrice={49.99}
          price={29.99}
          installment={9.99}
          editable={true}
          manageDelete={manageDelete}
          manageEdit={manageEdit}
        />
      </main>
    </div>
  );
}
