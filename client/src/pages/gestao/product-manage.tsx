"use client";
import { Filter } from "@/components/filter/filter";
import CarmedProduct from "@/assets/carmed-product.png";
import { ProductCardP } from "@/components/product card portrait/product-card-portrait";
import { useEffect, useState } from "react";
import { InputImageLarge } from "@/components/input image large/input-image-large";
import { InputImage } from "@/components/input image/input-image";
import style from "@/pages/gestao/manage.module.css";
import axios from "axios";
import { StaticImageData } from "next/image";

//tipagem dos atributos para se fazer a filtragem
type Produto = {
  codigo: number;
  nome: string;
  preco_ant: number;
  preco_atual: number;
  categoria: string;
  // image: StaticImageData;
};

export function ProductManagePage() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]); //adiçao desse useState
  const [formData, setFormData] = useState({
    nome: "",
    preco_ant: "",
    preco_atual: "",
    codigo: "",
    categoria: "",
  });

  const [produtos, setProdutos] = useState<Produto[]>([]); //adição dessa linha

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function fetchProdutos() {
    //função de buscar todos os produtos
    try {
      const response = await axios.get<Produto[]>(
        "http://localhost:3000/produtos"
      ); //modificação dessa linha
      setProdutos(response.data);
      setFilteredProducts(response.data); //adiçao do setFiltered
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    //modificação do parâmetro
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  async function handleSubmit() {
    //função de criar produto
    try {
      const response = await axios.post(
        "http://localhost:3000/produtos",
        formData
      );
      console.log(response.data);
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: "",
        preco_ant: "",
        preco_atual: "",
        codigo: "",
        categoria: "",
      });
      // Ocultar o formulário de criação
      setModalIsVisible(false);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  }

  function toggleCreateVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  function manageCancel() {
    //quando a pessoa cancela o form é apagado
    setFormData({
      nome: "",
      preco_ant: "",
      preco_atual: "",
      codigo: "",
      categoria: "",
    });
    toggleCreateVisibility();
  }

  async function manageDelete(codigo: number) {
    //vai precisar modificar essa propriedade no card portrait
    try {
      await axios.delete(`http://localhost:3000/produtos/${codigo}`);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  }

  async function manageEdit(codigo: number, updatedData: Partial<Produto>) {
    //vai precisar modificar essa propriedade no card protrait
    try {
      await axios.put(`http://localhost:3000/produtos/${codigo}`, updatedData);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao editar produto:", error);
    }
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Gestão dos produtos</h1>
      {modalIsVisible ? (
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
                <label className={style.label} htmlFor="nome">
                  Nome do Produto
                </label>
                <textarea
                  name="nome"
                  id="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
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
                      value={formData.preco_ant}
                      onChange={handleInputChange}
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
                      value={formData.preco_atual}
                      onChange={handleInputChange}
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
                      value={formData.codigo}
                      onChange={handleInputChange}
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
                      value="Medicamentos"
                      checked={formData.categoria === "Medicamentos"}
                      onChange={handleInputChange}
                      className={style.adjustmargin}
                    />
                    <label
                      htmlFor="medicamentos"
                      className={style.modalcategory}
                    >
                      Medicamentos
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="suplementos"
                      value="Suplementos"
                      checked={formData.categoria === "Suplementos"}
                      onChange={handleInputChange}
                      className={style.adjustmargin}
                    />
                    <label htmlFor="suplementos" className="font-medium">
                      Suplementos
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="higiene"
                      value="Higiene"
                      checked={formData.categoria === "Higiene"}
                      onChange={handleInputChange}
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
                      value="Beleza"
                      checked={formData.categoria === "Beleza"}
                      onChange={handleInputChange}
                      className={style.adjustmargin}
                    />
                    <label htmlFor="beleza" className="font-medium">
                      Beleza
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="bebes"
                      value="Bebês"
                      checked={formData.categoria === "Bebês"}
                      onChange={handleInputChange}
                      className={style.adjustmargin}
                    />
                    <label htmlFor="bebes" className="font-medium">
                      Bebês
                    </label>
                    <input
                      type="radio"
                      name="categoria"
                      id="perfumaria"
                      value="Perfumaria"
                      checked={formData.categoria === "Perfumaria"}
                      onChange={handleInputChange}
                      className={style.adjustmargin}
                    />
                    <label htmlFor="perfumaria" className="font-medium">
                      Perfumaria
                    </label>
                  </div>
                </div>

                {/* Botões */}
                <div className={style.marginTopRem}>
                  <button onClick={manageCancel} className={style.cancel}>
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
      {/* Grid de Produtos e Filtro */}{" "}
      {/* modificar o grid para retornar os produtos conforme o banco de dados */}
      <main className={style.grid}>
        <Filter setFilteredProducts={setFilteredProducts} /> {/* modificação */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCardP
              key={product.codigo}
              image={CarmedProduct} // Adjust according to your image attribute
              title={product.nome}
              oldPrice={product.preco_ant}
              price={product.preco_atual}
              installment={Math.ceil((product.preco_atual / 3) * 100) / 100} // Example calculation for installment
              editable={true}
              manageDelete={() => manageDelete(product.codigo)}
              // manageEdit={() => manageEdit(product.codigo)}
              // discutir como vai funcionar essa parte
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </main>
    </div>
  );
}
