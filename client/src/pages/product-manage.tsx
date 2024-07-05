import { Filter } from "@/components/filter";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { ProductCardP } from "@/components/product-card-portrait";

export function ProductManagePage() {
  return (
    <div className="w-screen flex flex-col items-center bg-anil-50">
      <NavBar />
      <h1 className="mt-[72px] text-[60px] font-extrabold text-anil-950">
        Gestão dos produtos
      </h1>
      <button className="bg-anil-950 py-4 max-w-[845px] w-full mt-6 mx-4 rounded-[30px] text-white text-[60px] font-extrabold h-[105px] justify-center leading-[73px]">
        Adicionar produto
      </button>
      <main className="grid grid-cols-4 gap-6 mt-6">
        <Filter />
      </main>
      <Footer />
    </div>
  );
}
