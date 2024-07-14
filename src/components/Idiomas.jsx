import { FaAngleDown } from "react-icons/fa6";

export function Idiomas() {
  return (
    <div>
      <span className="absolute w-[200px] border-l-[1px] h-[100%] ">
        <h1 className="w-[150px] flex h-[100%] absolute ml-5 mt-3 font-light text-[13px]">
          Português
          <FaAngleDown className="absolute w-[15px] h-[15px] mt-1 right-[40%]" />
        </h1>
      </span>
    </div>
  );
}
