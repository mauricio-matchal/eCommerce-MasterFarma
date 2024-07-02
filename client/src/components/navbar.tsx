import CartPlus from "@/assets/icons/cart.plus";
import Person from "@/assets/icons/person";
import Search from "@/assets/icons/search";
import Logo from "@/assets/logo";

export function NavBar() {
  return (
    <nav className="w-screen flex flex-row justify-between px-[108px] bg-anil-950 h-[122px] items-center">
      <Logo />
      <div className="flex flex-row items-center justify-between bg-anil-50 px-6 py-[13px] rounded-full w-[600px] gap-4">
        <input
          type="search"
          placeholder="O que você deseja?"
          className="bg-[transparent] outline-none w-full text-xl font-extrabold text-anil-950"
        />
        <Search />
      </div>
      <div className="flex flex-row gap-6">
        <button className="flex flex-col items-center">
          <Person />
          <span className="text-anil-50 text-xl font-extrabold">Entrar</span>
        </button>
        <button className="flex flex-col items-center">
          <CartPlus />
          <span className="text-anil-50 text-xl font-extrabold">R$0,00</span>
        </button>
      </div>
    </nav>
  );
}
