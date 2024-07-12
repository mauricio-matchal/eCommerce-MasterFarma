/*Tem que fazer outro filtro para a página de resultados que vai usar as rotas de buscar por nome e categoria e 
e buscar por nome e preço ou só a rota de buscar por nome, categoria e preço (acho que dá para reaproveitar essa e adpatar, mas vcs que sabem)*/
import { useState } from "react";
import axios from "axios";
import style from "@/components/filter/filter.module.css";

//tipagem dos atributos para se fazer a filtragem
type Produto = {
  codigo: number;
  nome: string;
  preco_ant: number;
  preco_atual: number;
  categoria: string;
};

type FilterProps = {
  setFilteredProducts: (products: Produto[]) => void;
};

export function Filter({ setFilteredProducts }: FilterProps) {
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");

  /* configuração anterior para caso a atual fique complicada para implementar 
  //função de para filtrar por categoria integrando com o banco de dados
  const handleCategoryChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.name;
    setCategory(selectedCategory);

    try {
      const response = await axios.get<Produto[]>(
        `http://localhost:3000/produtos/categoria/${selectedCategory}`
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos pela categoria:", error);
    }
  };

  //função para filtrar por preço integrando com o banco de dados
  const handlePriceChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPrice = event.target.id;
    setPriceRange(selectedPrice);

    try {
      const response = await axios.get<Produto[]>(
        `http://localhost:3000/produtos/preco/${selectedPrice}`
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos pelo preço:", error);
    }
  };
*/

  // Função para filtrar produtos por categoria e preço
  const handleFilterChange = async () => {
    const params: any = {};
    if (category) params.categoria = category;
    if (priceRange) params.intervalo = priceRange;

    try {
      const response = await axios.get<Produto[]>(
        `http://localhost:3000/produtos/categoria-preco`,
        { params }
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos pela categoria e preço:", error);
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.name;
    setCategory(selectedCategory);
    handleFilterChange();
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPrice = event.target.id;
    setPriceRange(selectedPrice);
    handleFilterChange();
  };

  return (
    <div className={style.container}>
      <div className={style.background}>
        <h3 className={style.title}>Filtrar por categoria</h3>
        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="medicamentos"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="checkbox">Medicamentos</label>
        </div>
        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="suplementos"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="suplementos">Suplementos</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="higiene"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="higiene">Higiene</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="beleza"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="beleza">Beleza</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="bebes"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="bebes">Bebês</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="perfumaria"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="perfumaria">Perfumaria</label>
        </div>

        <h3 className={style.title}>Filtrar por preço</h3>
        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="ate-50" //modifiquei a identificação do id
            onChange={handlePriceChange} //chama a função de filtrar por preço
          />
          <label htmlFor="ate-50">Até R$50,00</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="ate-100" //modifiquei a identificação do id
            onChange={handlePriceChange} //chama a função de filtrar por preço
          />
          <label htmlFor="ate-100">Até R$100,00</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="ate-200" //modifiquei a identificação do id
            onChange={handlePriceChange} //chama a função de filtrar por preço
          />
          <label htmlFor="ate-200">Até R$200,00</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="acima-200" //modifiquei a identificação do id
            onChange={handlePriceChange} //chama a função de filtrar por preço
          />
          <label htmlFor="acima-200">Acima de R$200,00</label>
        </div>
        {/* tem que ver o que vai fazer aqui (se vai deixar sem funcionalidade ou se vai fazer algo ou então deletar essa parte)*/}
        <h3 className={style.title}>Ordenar por</h3>
        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="ordenar"
            id="relevancia"
            value="relevancia"
          />
          <label htmlFor="relevancia">Relevância</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="ordenar"
            id="preco"
            value="preco"
          />
          <label htmlFor="preco">Preço</label>
        </div>
      </div>
    </div>
  );
}
