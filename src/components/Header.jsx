import futureLogoHeader from "../img/futureLogoHeader.png";
import { IoSearchOutline } from "react-icons/io5";
import "../index.css";
import { Idiomas } from "./Idiomas";

export function Header() {
  return (
    <>
      <div className="Header h-[23vh] w-[100vw] flex relative ">
        <div className="Logo absolute w-[18%] h-[100%] left-[7%] bg-white text-center">
          <img src={futureLogoHeader} className="w-[90%] h-[35%] mt-10" />
          <h1 className="text-[10px] text-[#3EB3B5] font-bold w-[88%] [letter-spacing:1px]">
            ENGENHARIA PARA ALÉM DA TÉCNICA
          </h1>
        </div>

        <div className="Search flex absolute right-[7%] w-[68%] h-[35%] border-b-[1px] border-slate-400">
          <IoSearchOutline className="absolute w-[20px] h-[20px] mt-3 text-[#696969]" />
          <li className="w-[40%] h-[100%] ml-[45%] flex justify-around list-none mt-3 ">
            <h1 className="w-[200px] h-[100%] font-bold text-[#696969] text-[13px]">
              FUTURE MOTION BRASIL
            </h1>
            <h1 className="w-[200px] h-[100%] font-bold text-[#696969] text-[13px]">
              FUTURE PROMAN
            </h1>
            <h1 className="w-[200px] h-[100%] font-bold text-[#696969] text-[13px]">
              FUTURE ASIA
            </h1>
          </li>
          <Idiomas />
        </div>
      </div>
    </>
  );
}
