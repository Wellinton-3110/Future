import "../css/page2.css";
import zenitePage2 from "../img/zenitePage2.png";
import zenitePage2BG from "../img/zenitePage2BG.jpg";

export function Page2() {
  return (
    <div className="flex flex-col relative">
      <div className="Page2 w-[100vw] h-[90vh] bg-slate-100 relative">
        <img
          src={zenitePage2}
          alt="Imagem Página 2"
          className="absolute top-[10%] left-[67%] w-[320px] h-[230px] ---responsive--> md:w-[200px] md:h-[130px]"
        />

        <div className="absolute left-[53%] top-[54%] translate-x-[-70%] translate-y-[-50%] z-10 w-[65%] h-[65%] p-5 flex flex-col text-left bg-white ---responsive-->">
          <h1 className="mt-[10px] text-[45px] text-[#41BDBA] font-serif ml-[30px] mb-[30px] ---responsive--> md:text-[35px] sm:text-[20px]">
            CONCEITO FUTURE
          </h1>

          <span className="w-[110px] h-[2px] bg-gradient-to-r from-[#286993] to-[#41BDBA] ml-[30px] mb-[30px] ---responsive--> md:w-[90px] md:h-[1px] md:mb-[20px] sm:w-[70px]"></span>
          <p className="ml-[30px] text-[18px] text-[#696969] ---responsive--> md:text-[14px] sm:text-[10px]">
            O conceito FUTURE surge para reinventar a forma de gerir e praticar
            o negócio Engenharia e para a posicionar no nível mais elevado da
            cadeia de valor. Olhar e gerir a engenharia como um negócio, mas com
            a responsabilidade de contribuir para um mundo melhor. A ENGENHARIA
            PARA ALÉM DA TÉCNICA, que traduz a visão do Grupo FUTURE sobre o
            papel da Engenharia como motor de desenvolvimento dos investimentos
            dos clientes, da origem à sua estruturação, dominando todo o
            processo e contribuindo para o sucesso do negócio em todas as suas
            fases de implementação.
          </p>
        </div>
      </div>
      <div className="w-[100vw] h-[100vh]">
        <img src={zenitePage2BG} alt="" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
