export function Header2() {
  const handleLinkClick = (event) => {
    if (event.target !== event.currentTarget) {
      event.preventDefault();
    }
  };
  function showSobreNos() {
    const sobreNos = document.getElementById("sobreNos");
    sobreNos.classList.remove("hidden");
  }
  function hiddenSobreNos() {
    const sobreNos = document.getElementById("sobreNos");
    sobreNos.classList.add("hidden");
  }
  function showUnidadesNegocio() {
    const unidadesNegocio = document.getElementById("unidadesNegocio");
    unidadesNegocio.classList.remove("hidden");
  }
  function hiddenUnidadesNegocio() {
    const unidadesNegocio = document.getElementById("unidadesNegocio");
    unidadesNegocio.classList.add("hidden");
  }
  return (
    <div className=" absolute left-[25%] bottom-0 w-[67%] h-[35%] flex justify-around items-center">
      <a
        onClick={handleLinkClick}
        onMouseEnter={showSobreNos}
        onMouseLeave={hiddenSobreNos}
        href="https://www.future-motion.eu/pt/sobre-nos"
        target="_blank"
        className="relative text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light"
      >
        SOBRE NÓS
        <li
          id="sobreNos"
          className="hidden absolute w-[86vw] h-[77vh] z-30 p-[50px] top-[100%] flex flex-col left-[50vw] translate-x-[-80%] bg-white text-black/40 list-none"
        >
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            HISTÓRIA
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            VISÃO E MISSÃO
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            VALORES
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            LIDERANÇA
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            GOVERNANÇA
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            ÉTICA E COMPLIANCE
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            RESPONSABILIDADE SOCIAL CORPORATIVA
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            SUSTENTABILIDADE
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            CONTACTOS
          </i>
        </li>
      </a>

      <h2 className="text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light">
        CONCEITO ZENITE
      </h2>

      {/* -------------------UNIDADES DE NEGÓCIO{------------------- */}

      <h2
        onClick={handleLinkClick}
        onMouseEnter={showUnidadesNegocio}
        onMouseLeave={hiddenUnidadesNegocio}
        className="relative text-[12px] font-bold text-black/90  --responsive--> md:text-[9px] md:font-light"
      >
        UNIDADES DE NEGÓCIO
        <li
          id="unidadesNegocio"
          className="hidden absolute w-[86vw] h-[600px] z-30 p-[50px] top-[100%] flex flex-col left-[50vw] translate-x-[-95.5%] bg-white text-black/40 list-none"
        >
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            INFRAESTRUTURAS DE TRANSPORTES
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            SISTEMAS METRO-FERROVIÁRIOS
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            ENGENHARIA MARÍTIMO-PORTUÁRIA
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            ÁGUA, SANEAMENTO E RESÍDUOS
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            CIDADES E EDIFÍCIOS
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            SUSTENTABILIDADE E ENERGIA
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            REAL ESTATE
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            GESTÃO E SUPERVISÃO DA CONSTRUÇÃO
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            GEOLAB
          </i>
          <i className="text-[19px] h-[30px] font-normal ml-[20%] mb-[25px] hover:before:w-[80px] hover:before:h-[2.5px] hover:before:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black hover:before:block hover:before:relative hover:before:left-[-12%] hover:before:top-[50%]">
            INOVAÇÃO DIGITAL
          </i>
        </li>
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
