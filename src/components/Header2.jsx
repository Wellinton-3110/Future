export function Header2() {
  function stopPropagation(event) {
    event.stopPropagation();
  }
  function showSobreNos() {
    const sobreNos = document.getElementById("sobreNos");
    sobreNos.classList.remove("hidden");
  }
  function hiddenSobreNos() {
    const sobreNos = document.getElementById("sobreNos");
    sobreNos.classList.add("hidden");
  }
  return (
    <div className=" absolute left-[25%] bottom-0 w-[67%] h-[35%] flex justify-around items-center">
      <a
        onClick={stopPropagation}
        onMouseEnter={showSobreNos}
        onMouseLeave={hiddenSobreNos}
        href="https://www.future-motion.eu/pt/sobre-nos"
        target="_blank"
        className="relative text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light"
      >
        SOBRE NÓS
        <li
          id="sobreNos"
          className="hidden absolute w-[86vw] h-[77vh] z-30 p-[50px] top-[100%] flex flex-col text-black/40 left-[50vw] translate-x-[-80%] bg-white  list-none"
        >
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">HISTÓRIA</i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            VISÃO E MISSÃO
          </i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">VALORES</i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            LIDERANÇA
          </i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            GOVERNANÇA
          </i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            ÉTICA E COMPLIANCE
          </i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            RESPONSABILIDADE SOCIAL CORPORATIVA
          </i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            SUSTENTABILIDADE
          </i>
          <i className="text-[19px] font-normal ml-[20%] mb-[25px]">
            CONTACTOS
          </i>
        </li>
      </a>

      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        CONCEITO ZENITE
      </h2>
      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        UNIDADES DE NEGÓCIO
      </h2>
      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        COMPETÊNCIAS
      </h2>
      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        AGÊNCIA DE INVESTIMENTO E DESENVOLVIMENTO
      </h2>
      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        INOVAÇÃO E TECNOLOGIA
      </h2>
      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        MEDIA&INSIGHTS
      </h2>
    </div>
  );
}
