import style from "@/components/filter/filter.module.css";

export function Filter() {
  return (
    <div className={style.container}>
      <div className={style.background}>
        <h3 className={style.title}>Filtrar por categoria</h3>
        <div>
          <input
            type="checkbox"
            className={style.checkbox}
            name="medicamentos"
            id="medicamentos"
          />
          <label htmlFor="checkbox">Medicamentos</label>
        </div>
        <div>
          <input
            type="checkbox"
            className={style.checkbox}
            name="suplementos"
            id="suplementos"
          />
          <label htmlFor="suplementos">Suplementos</label>
        </div>

        <div>
          <input
            type="checkbox"
            className={style.checkbox}
            name="higiene"
            id="higiene"
          />
          <label htmlFor="higiene">Higiene</label>
        </div>

        <div>
          <input
            type="checkbox"
            className={style.checkbox}
            name="beleza"
            id="beleza"
          />
          <label htmlFor="beleza">Beleza</label>
        </div>

        <div>
          <input
            type="checkbox"
            className={style.checkbox}
            name="bebes"
            id="bebes"
          />
          <label htmlFor="bebes">Bebês</label>
        </div>

        <div>
          <input
            type="checkbox"
            className={style.checkbox}
            name="perfumaria"
            id="perfumaria"
          />
          <label htmlFor="perfumaria">Perfumaria</label>
        </div>

        <h3 className={style.title}>Filtrar por preço</h3>
        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="ate50"
          />
          <label htmlFor="ate50">Até R$50,00</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="ate100"
          />
          <label htmlFor="ate100">Até R$100,00</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="ate200"
          />
          <label htmlFor="ate200">Até R$200,00</label>
        </div>

        <div>
          <input
            type="radio"
            className={style.checkbox}
            name="price"
            id="acima200"
          />
          <label htmlFor="acima200">Acima de R$200,00</label>
        </div>

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
