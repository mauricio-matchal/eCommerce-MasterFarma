export function Filter() {
  return (
    <div className="h-[500px] flex flex-col px-4 py-7 bg-anil-950 rounded-[30px] text-white font-medium text-xl">
      <h3 className="text-2xl font-extrabold">Filtrar por categoria</h3>
      <div>
        <input
          type="checkbox"
          className="mr-2"
          name="medicamentos"
          id="medicamentos"
        />
        <label htmlFor="checkbox">Medicamentos</label>
      </div>
      <div>
        <input
          type="checkbox"
          className="mr-2"
          name="suplementos"
          id="suplementos"
        />
        <label htmlFor="suplementos">Suplementos</label>
      </div>

      <div>
        <input type="checkbox" className="mr-2" name="higiene" id="higiene" />
        <label htmlFor="higiene">Higiene</label>
      </div>

      <div>
        <input type="checkbox" className="mr-2" name="beleza" id="beleza" />
        <label htmlFor="beleza">Beleza</label>
      </div>

      <div>
        <input type="checkbox" className="mr-2" name="bebes" id="bebes" />
        <label htmlFor="bebes">Bebês</label>
      </div>

      <div>
        <input
          type="checkbox"
          className="mr-2"
          name="perfumaria"
          id="perfumaria"
        />
        <label htmlFor="perfumaria">Perfumaria</label>
      </div>

      <h3 className="text-2xl font-extrabold mt-2">Filtrar por preço</h3>
      <div>
        <input type="radio" className="mr-2" name="price" id="ate50" />
        <label htmlFor="ate50">Até R$50,00</label>
      </div>

      <div>
        <input type="radio" className="mr-2" name="price" id="ate100" />
        <label htmlFor="ate100">Até R$100,00</label>
      </div>

      <div>
        <input type="radio" className="mr-2" name="price" id="ate200" />
        <label htmlFor="ate200">Até R$200,00</label>
      </div>

      <div>
        <input type="radio" className="mr-2" name="price" id="acima200" />
        <label htmlFor="acima200">Acima de R$200,00</label>
      </div>

      <h3 className="text-2xl font-extrabold mt-2">Ordenar por</h3>
      <div>
        <input
          type="radio"
          className="mr-2"
          name="ordenar"
          id="relevancia"
          value="relevancia"
        />
        <label htmlFor="relevancia">Relevância</label>
      </div>

      <div>
        <input
          type="radio"
          className="mr-2"
          name="ordenar"
          id="preco"
          value="preco"
        />
        <label htmlFor="preco">Preço</label>
      </div>
    </div>
  );
}
