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
  const [editModalIsVisible, setEditModalIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    preco_ant: "",
    preco_atual: "",
    codigo: "",
    categoria: "",
  });
  // const [editFormData, setEditFormData] = useState({
  //   nome: "",
  //   preco_ant: "",
  //   preco_atual: "",
  //   categoria: "",
  // });

  const [produtos, setProdutos] = useState<Produto[]>([]); //adição dessa linha
  const [isEditing, setIsEditing] = useState(false);
  const [editCodigo, setEditCodigo] = useState<number | null>(null);

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
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/produtos", {
        nome: formData.nome,
        preco_ant: formData.preco_ant,
        preco_atual: formData.preco_atual,
        codigo: formData.codigo,
        categoria: formData.categoria,
      });
      console.log(response.data);
      setFormData({
        nome: "",
        preco_ant: "",
        preco_atual: "",
        codigo: "",
        categoria: "",
      });
      setModalIsVisible(false);
      fetchProdutos();
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
    setModalIsVisible(false);
    setEditModalIsVisible(false);
    setIsEditing(false);
    setEditCodigo(null);
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

  async function handleEditSubmit() {
    //vai precisar modificar essa propriedade no card protrait
    console.log(formData);
    console.log(editCodigo);
    // console.log(editFormData);
    try {
      const response = await axios.put(
        `http://localhost:3000/produtos/${editCodigo}`,
        {
          nome: formData.nome,
          preco_ant: formData.preco_ant,
          preco_atual: formData.preco_atual,
          categoria: formData.categoria,
        }
      );
      console.log(response);
      setEditModalIsVisible(false);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao editar produto:", error);
    }
  }

  function handleEdit(product: Produto) {
    setFormData({
      nome: product.nome,
      preco_ant: product.preco_ant.toString(),
      preco_atual: product.preco_atual.toString(),
      codigo: product.codigo.toString(),
      categoria: product.categoria,
    });
    // const { codigo, ...newEditFormData } = formData;
    // setEditFormData(newEditFormData);

    setEditCodigo(product.codigo);
    setIsEditing(true);
    setEditModalIsVisible(true);
  }

  // essa função permite que o campo de preços apenas aceite numeros e nao letras
  // event: React.KeyboardEvent<HTMLInputElement>) {
  //   const charCode = event.which ? event.which : event.keyCode;
  //   if (charCode !== 46 && (charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //   }
  // }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Gestão dos produtos</h1>
      {editModalIsVisible || modalIsVisible ? (
        <div className={style.modalcontainer}>
          <div className={style.center}>
            <h2 className={style.title}>
              {isEditing ? "Editar Produto" : "Criar Produto"}
            </h2>

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
                      id="preco_ant"
                      placeholder="R$0,00"
                      value={formData.preco_ant}
                      onChange={handleInputChange}
                      className={style.textinput}
                      inputMode="numeric"
                      pattern="[0-9.]*"
                    />
                  </div>
                  <div>
                    <label className={style.label} htmlFor="precoAtual">
                      Preço atual
                    </label>
                    <input
                      type="text"
                      id="preco_atual"
                      placeholder="R$0,00"
                      value={formData.preco_atual}
                      onChange={handleInputChange}
                      className={style.textinput}
                      inputMode="numeric"
                      pattern="[0-9.]*"
                    />
                  </div>
                  {editModalIsVisible ? (
                    <></>
                  ) : (
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
                        maxLength={8}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                    </div>
                  )}
                </div>

                {/* Categorias */}

                <div>
                  <h3 className={style.label}>Categoria</h3>
                  <label htmlFor=""></label>
                  <div className={style.category}>
                    <input
                      type="radio"
                      name="categoria"
                      id="categoria"
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
                      id="categoria"
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
                      id="categoria"
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
                      id="categoria"
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
                      id="categoria"
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
                      id="categoria"
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
                  {editModalIsVisible ? (
                    <button onClick={handleEditSubmit} className={style.submit}>
                      Confirmar
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className={style.submit}>
                      Confirmar
                    </button>
                  )}
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
              manageEdit={() => handleEdit(product)}
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
