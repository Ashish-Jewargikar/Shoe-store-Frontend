import React, { useEffect,useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { BsCart, BsController } from "react-icons/Bs";
import { IoMdHeartEmpty } from "react-icons/Io";
import { VscChromeClose } from "react-icons/Vsc";
import { BiMenuAltRight } from "react-icons/Bi";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () =>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("-translate-y-[80px]");
      }else{
        setShow("shadow-sm");
      }
    }else{
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll",controlNavbar);
    return ()=>{
      window.removeEventListener("scroll",controlNavbar);
    };
  },[lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center ">
        <Link href="/">
        <div className="flex items-center cursor-pointer">
      <Image
        alt="logo"
        src="/logo.svg"
        width={60} 
        height={40} 
        className="md:w-[60px] md:h-[40px]" 
      />
      <span className="ml-2 text-black text-[14px] md:text-[20px] uppercase  font-medium drop-shadow">Shoe Store</span>
    </div>
        </Link>
        <Menu showCatMenu={showCatMenu} 
        setShowCatMenu={setShowCatMenu} 
        />
        {mobileMenu && (
          <MenuMobile  
          showCatMenu={showCatMenu} 
          setShowCatMenu={setShowCatMenu} 
          setMobileMenu={setMobileMenu}
 />
        )}

       
        <div className="flex items-center gap-2 text-black">
          {/*heart
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[20px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-6 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px[5px]">
              50
            </div>
          </div>*/}

          {/*bscart*/}

          <Link href="/cart">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
            <BsCart className="text-[20px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-6 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px[5px]">
              5
            </div>
          </div> 
          </Link>

          <div className="w-8 md:w-18 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[24px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
