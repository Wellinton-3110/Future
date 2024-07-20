import "../index.css";
import "../css/page1.css";
import { useState, useEffect } from "react";

import future01 from "../img/future01.png";

export function Page1() {
  const [numb1, setNumb1] = useState(1);
  const [especialidade, setEspecialidade] = useState(1);
  const [colaboradores, setColaboradores] = useState(100);
  const [contratos, setContratos] = useState(500);
  const [sedes, setSedes] = useState(0);
  const [paises, setPaises] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumb1((prevNumb1) => {
        if (prevNumb1 >= 10) {
          clearInterval(interval);
          return prevNumb1;
        }
        return prevNumb1 + 1;
      });
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEspecialidade((prevEspecialidade) => {
        if (prevEspecialidade >= 54) {
          clearInterval(interval);
          return prevEspecialidade;
        }
        return prevEspecialidade + 1;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColaboradores((prevColaboradores) => {
        if (prevColaboradores >= 1000) {
          clearInterval(interval);
          return prevColaboradores;
        }
        return prevColaboradores + 100;
      });
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setContratos((prevContratos) => {
        if (prevContratos >= 3350) {
          clearInterval(interval);
          return prevContratos;
        }
        return prevContratos + 50;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSedes((prevSedes) => {
        if (prevSedes >= 4) {
          clearInterval(interval);
          return prevSedes;
        }
        return prevSedes + 1;
      });
    }, 700);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaises((prevPaises) => {
        if (prevPaises >= 25) {
          clearInterval(interval);
          return prevPaises;
        }
        return prevPaises + 1;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Body1 h-[100vh] w-[100vw] relative">
      <div className="imgNumb1 absolute w-[300px] h-[300px] top-[-10%] left-[13%] --responsive--> md:w-[180px] md:h-[180px] md:top-[1] md:left-[10%]">
        <img src={future01} alt="imagem número 1" />
      </div>
      <div className="Number1 w-[75vw] h-[60vh] m-auto relative top-[55%] translate-y-[-50%] border border-white border-l-0 border-r-0 --responsive--> md:w-[85vw] ">
        <div className="TextBody2 relative w-[200px] h-[20px] top-[-10%] left-[100%] translate-x-[-100%] sm:left-[50%] sm:translate-x-[-50%] sm:justify-center flex items-center justify-end ">
          <h1 className=" text-[white] font-bold text-[15px] lg:text-[15px] md:text-[12px] sm:text-[9px]">
            FUTURO EM NÚMEROS
          </h1>
        </div>
        <div className="Subsidiárias absolute left-[20%] top-[10%] max-w-[120px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-bold md:text-[45px] sm:text-[30px]">
            {numb1}
          </div>
          <h2 className="text-[21px] font-normal md:text-[20px] sm:text-[18px]">
            Subsidiárias e Escritórios Regionais
          </h2>
        </div>

        <div className="Subsidiárias absolute left-[15%] top-[60%] max-w-[120px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-bold md:text-[45px] sm:text-[30px]">
            {especialidade}
          </div>
          <h2 className="text-[21px] font-normal md:text-[20px] sm:text-[18px]">
            Especialidades Técnicas
          </h2>
        </div>

        <div className="Colaboradores absolute left-[35%] top-[55%] max-w-[180px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{colaboradores}
          </div>
          <h2 className="text-[21px] font-normal md:text-[20px] sm:text-[18px]">
            Colaboradores
          </h2>
        </div>

        <div className="Contratos absolute left-[55%] top-[13%] max-w-[290px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{contratos}
          </div>
          <h2 className="text-[21px] font-normal md:text-[20px] sm:text-[18px]">
            Contratos Executados
          </h2>
        </div>

        <div className="Sedes absolute left-[65%] top-[60%] max-w-[290px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{sedes}
          </div>
          <h2 className="text-[21px] font-normal md:text-[20px] sm:text-[18px]">
            Sedes Operacionais
          </h2>
        </div>

        <div className="Paises absolute left-[88%] top-[30%] max-w-[240px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{paises}
          </div>
          <h2 className="text-[21px] font-normal md:text-[20px] sm:text-[18px]">
            Países onde já atuamos
          </h2>
        </div>
      </div>
    </div>
  );
}
