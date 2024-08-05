import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import zeniteImgMenu from "../img/zeniteLogo.png";

export function HeaderMenu() {
  function hideLogo() {
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    item2.classList.toggle("hidden");
    item3.classList.toggle("hidden");
  }
  return (
    <div className="relative w-[100vw] h-[15vh] flex">
      <div className="flex">
        <i
          id="item1"
          className="absolute left-[8%] top-[30%] flex items-center justify-center w-[40px] h-[50px]"
        >
          <IoMenu className="w-[35px] h-[50px] text-black/80" />
        </i>
        <i id="item2" className="">
          <img
            src={zeniteImgMenu}
            alt="zenite logomarca"
            className="absolute w-[300px] h-[160px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </i>
        <i className="absolute w-[40px] h-[40px] right-[10%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
          <IoSearchOutline onClick={hideLogo} className="w-[30px] h-[30px]" />
          <input
            id="item3"
            placeholder=" Pesquisar"
            type="text"
            className="absolute hidden w-[200px] h-[35px] left-[-230px] shadow-md rounded-md transition-all"
          />
        </i>
      </div>
    </div>
  );
}
