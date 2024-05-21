import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import { useState } from "react";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0",
  );

  const handleOpenMenu = () => {
    setNavClass(
      " z-10 absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0",
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0",
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakes}
          alt="Logo sneakers"
          className="mb-1 mr-auto h-5 md:mr-0"
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader name={"Collections"} />
          <NavLinkHeader name={"Men"} />
          <NavLinkHeader name={"Women"} />
          <NavLinkHeader name={"About"} />
          <NavLinkHeader name={"Contact"} />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-400 md:block"></span>
    </>
  );
};
export default MainHeader;
