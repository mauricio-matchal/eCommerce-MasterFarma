/*Tem que fazer outro filtro para a página de resultados que vai usar as rotas de buscar por nome e categoria e 
e buscar por nome e preço ou só a rota de buscar por nome, categoria e preço (acho que dá para reaproveitar essa e adpatar, mas vcs que sabem)*/
import { useEffect, useState } from "react";
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
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    handleFilterChange();
  }, [category, price]);

  const handleFilterChange = async () => {
    const params: any = {};
    if (category) params.categoria = category;
    if (price) params.intervalo = price;

    let url = `http://localhost:3000/produtos/categoria-preco/`;
    const queryParams: string[] = [];

    if (category) queryParams.push(`categoria=${params.categoria}`);
    if (price) queryParams.push(`intervalo=${params.intervalo}`);

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    console.log(url);

    try {
      const response = await axios.get<Produto[]>(url);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos pela categoria e preço:", error);
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.id);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.id);
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
            id="Medicamentos"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="checkbox">Medicamentos</label>
        </div>
        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="Suplementos"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="suplementos">Suplementos</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="Higiene"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="higiene">Higiene</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="Beleza"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="beleza">Beleza</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="Bebes"
            onChange={handleCategoryChange} // chama a função de filtrar por categoria
          />
          <label htmlFor="bebes">Bebês</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="categoria"
            id="Perfumaria"
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
