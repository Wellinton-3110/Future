import "../css/footer.css";
import zeniteLogoFooter from "../img/zeniteLogoFooter.png";
import { Map } from "../components/Map";
import { useState, useEffect } from "react";
import { MapModal } from "./MapModal";
import { CgCloseR } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export function Footer() {
  const [largura, setLargura] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const largura = () => {
      const largura = window.innerWidth;
      console.log("largura", largura);
      return setLargura(largura);
    };
    window.addEventListener("resize", largura);
    return () => window.removeEventListener("resize", largura);
  }, []);

  function openModal() {
    const modal = document.getElementById("Modal");
    modal.classList.remove("hidden");
  }

  function closeModal() {
    const modal = document.getElementById("Modal");
    modal.classList.add("hidden");
  }

  return (
    <div className="Footer w-[100vw] h-[95vh] flex flex-col items-center relative">
      {/* --------------------Modal-------------------- */}
      <div
        id="Modal"
        className="Modal h-[100vh] w-[100vw] fixed top-0 left-0 z-20 bg-black/80 hidden --responsive-->"
      >
        <MapModal />

        <button onClick={closeModal} className="absolute z-20 right-10 top-10">
          <CgCloseR className="w-[30px] h-[30px] text-[white]" />
        </button>
      </div>
      <div className="w-[80vw] h-[80vh] m-auto p-5 relative top-[5%] bg-gradient-to-r from-[#286993] to-[#41BDBA] md:w-[90vw]">
        <section className="footBody flex">
          {/* --------------logo---------------- */}
          <div className="w-[250px] h-[300px] absolute z-10 left-[4vw]">
            <img
              src={zeniteLogoFooter}
              alt="logomarca rodapé"
              className="h-[100px] w-[210px] --absolute--> md:absolute md:w-[200px] md:h-[70px] md:left-[50vw] md:translate-x-[-100%]"
            />
          </div>

          {/* ---------------Sede------------- */}
          <div className="Main-Sede flex flex-col w-[350px] h-[355px] text-white text-center font-medium absolute z-10 left-[22vw] top-[3vh] --responsive--> md:flex md:h-[155px] md:w-[90vw] md:left-0 md:top-[10vh]">
            <h1 className="whiteLine flex items-center mb-[70px] md:mb-[20px]">
              SEDE DO GRUPO ZENITE
            </h1>
            <h2 className="text-left text-[15px] font-light mb-2 md:text-[11px] md:mb-1 ----> tall:mb-0">
              Alameda Fernão Lopes, nº 16 – 11º Piso
            </h2>
            <h2 className="text-left text-[15px] font-light mb-2 md:text-[11px] md:mb-1 ----> tall:mb-0">
              1495-190 Algés,
            </h2>
            <h2 className="text-left text-[15px] font-light mb-5 md:text-[11px] md:mb-1 ----> tall:mb-0">
              Lisboa, Portugal
            </h2>

            <div className="flex absolute left-[15%] top-[60%] w-[210px] h-[30px]">
              <div className="absolute top-[15%] w-[100px] cursor-pointer h-[28px] flex mr-[10px] items-center justify-center bg-white rounded-full text-[14px] text-[#41BDBA] font-mono --responsive--> tall:text-[12px] tall:w-[80px] tall:h-[25px]">
                <h3>CONTATOS</h3>
              </div>

              <div
                onClick={openModal}
                className="absolute top-[15%] left-[50%] w-[100px] cursor-pointer h-[28px] flex items-center justify-center bg-white rounded-full text-[14px] text-[#41BDBA] font-mono --responsive--> tall:text-[12px] tall:w-[80px] tall:h-[25px]"
              >
                <h3>VER NO MAPA</h3>
              </div>
            </div>

            <div className="w-[280px] h-[170px] absolute z-10 left-[0vw] bottom-[-5%] --responsive--> md:hidden">
              <Map />
            </div>
          </div>
          {/* ---------------Links rapidos-------------- */}
          <div className="Links flex flex-col w-[350px] h-[355px] text-white text-center font-medium absolute z-10 left-[45vw] top-[3vh] md:hidden">
            <h1 className="Sede whiteLine flex items-center mb-[70px]">
              LINKS RÁPIDOS
            </h1>
            <h2 className="text-left  text-[13px] cursor-pointer font-light mb-5">
              CONTACTOS
            </h2>
            <h2 className="text-left text-[13px] cursor-pointer font-light mb-5">
              SOBRE NÓS
            </h2>
            <h2 className="text-left text-[13px] cursor-pointer font-light mb-5">
              LIDERANÇA
            </h2>
            <h2 className="text-left text-[13px] cursor-pointer font-light mb-5">
              MANIFESTO FUTURE
            </h2>
          </div>

          {/* -------------------Siga-nos------------------- */}
          <div className="Siganos flex flex-col w-[350px] h-[355px] text-white text-center font-medium absolute z-10 left-[64vw] top-[1.5vh] --responsive--> md:w-[96%] md:h-[25vh] md:top-[30vh] md:left-[2vw]">
            <h1 className="whiteLine flex items-center mb-[35px] --responsive--> md:mb-[30px] tall:mt-3">
              SIGA-NOS
            </h1>

            <div className="text-left w-[350px] absolute top-[25%] items-center flex text-[13px] font-light mb-0  --responsive--> md:w-[86.5vw] md:top-[30%]">
              <div className="w-7 h-7 bg-white flex items-center justify-center rounded-[50%] mb-10">
                <FaLinkedinIn className="w-4 h-4 text-[#3EB3B5] " />
              </div>

              <div className="ml-5 text-[15px] mb-10 cursor-pointer">
                <h2>Linkedin</h2>
              </div>

              <h1 className="Newsletter flex items-center justify-left absolute top-[150%] text-[14px] font-bold --responsive--> md:w-[100%] md:top-[130%]">
                SUBSCREVER NEWSLETTER
              </h1>
            </div>

            <div className="text-left absolute top-[75%] text-[13px] cursor-pointer font-light mb-5 flex --responsive--> md:top-[120%]">
              <input
                type="email"
                placeholder="  email"
                className="Email w-[150px] h-[25px]"
              />
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center ml-5 --responsive--> md:hidden">
                <SiMinutemailer className="w-5 h-5 [color:#3EB3B5] cursor-auto " />
              </div>
              <button className="w-[100px] h-[28px] relative left-[1%] top-[-10px] flex ml-[15px] mb-[20px] items-center justify-center bg-white rounded-full text-[14px] text-[#41BDBA] font-mono hidden --responsive--> md:block tall:text-[12px] tall:w-[80px] tall:h-[20px] tall:mt-[10px]">
                <h3>SUBSCREVER</h3>
              </button>
            </div>
          </div>
          {/* -------------------------------------- */}

          <footer className=" w-[70vw] h-[15vh] absolute top-[100%] left-20 text-[13px] text-white font-light flex items-center justify-between border border-l-0 border-r-0 border-b-0 translate-y-[-100%] m-auto p-1 --responsive--> md:w-[85vw] md:h-[10vh] md:left-[3%] md:text-[10px] md:justify-around">
            <h3 className="cursor-pointer">TERMOS E CONDIÇÕES</h3>
            <h3 className="cursor-pointer">POLÍTICA DE COOKIES</h3>
            <h3 className="cursor-pointer">POLÍTICA DE PRIVACIDADE</h3>
            <h3 className="cursor-pointer">OPORTUNIDADES DE CARREIRA</h3>
          </footer>
        </section>
      </div>
      <h5 className="relative font-light text-[13px] --responsive--> md:text-[9px] md:mt-10 md:font-extralight">
        FUTURE © 2024 - TODOS OS DIREITOS RESERVADOS
      </h5>
    </div>
  );
}
