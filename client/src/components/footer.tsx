import LogoLarge from "@/assets/logo.large";

export function Footer() {
  return (
    <footer className="w-full mt-[72px]">
      <div className="h-[40px] bg-anil-950"></div>
      <section className="bg-anil-900 flex flex-col items-center gap-8 py-16">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-6">
            <p className="text-xl">
              <span className="text-2xl font-extrabold">Atendimento</span>
              <br />
              Perguntas frequentes
              <br />
              Aviso de privacidade
              <br />
              Política de entrega
            </p>
          </div>
          <div className="flex flex-col mr-12">
            <p className="text-xl">
              <span className="text-2xl">Institucional</span>
              <br />
              Nossa história
              <br />
              Nossas Lojas
              <br />
              Trabalhe conosco
            </p>
          </div>
          <LogoLarge />
        </div>
        <p>Copyright © 2024</p>
      </section>
    </footer>
  );
}
