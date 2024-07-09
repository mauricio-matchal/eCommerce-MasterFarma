import styles from "./navbar.module.css";
import CartPlus from "@/assets/icons/cart.plus";
import Person from "@/assets/icons/person";
import Search from "@/assets/icons/search";
import Logo from "@/assets/logo";

export function NavBar() {
  return (
    <nav className="navBar">
      <Logo />
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-bg-anil-50 tw-px-6 tw-py-[13px] tw-rounded-full tw-w-[600px] tw-gap-4">
        <input
          type="search"
          placeholder="O que você deseja?"
          className="tw-bg-[transparent] tw-outline-none tw-w-full tw-text-xl tw-font-extrabold tw-text-anil-950"
        />
        <Search />
      </div>
      <div className="tw-flex tw-flex-row tw-gap-6">
        <button className="tw-flex tw-flex-col tw-items-center">
          <Person />
          <span className="tw-text-anil-50 tw-text-xl tw-font-extrabold">
            Entrar
          </span>
        </button>
        <button className="tw-flex tw-flex-col tw-items-center">
          <CartPlus />
          <span className="tw-text-anil-50 tw-text-xl tw-font-extrabold">
            R$0,00
          </span>
        </button>
      </div>
    </nav>
  );
}
