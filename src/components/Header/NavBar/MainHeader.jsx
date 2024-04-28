import logo from "../NavBar/logo22.png"
import AvatarImg from "../NavBar/image-avatar.png";
import CartIcon from "../../Icons/CartIcon";
import MenuIcon from "../../Icons/MenuIcon";
import CloseIcon from "../../Icons/CloseIcon";
import { useState } from "react";


const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden font-bold md:flex md:flex-row md:gap-4 md:mr-auto md:static md:p-0 md:h-auto")

    const handleOpenMenu = () => {
        setNavClass("absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");
    };
    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:flex md:flex-row md:gap-4 md:mr-auto md:static md:p-0 md:h-auto")
    };

    return (
        <header className="flex container px-4
        mx-auto items-center gap-4 bg-gray-200 py-8">
            <button className="md:hidden" onClick={handleOpenMenu} >
                <MenuIcon />
            </button>
        <img 
        src={logo} 
        alt="Logo GarzaLance"
        className="mr-auto mb-1 h-5 md:mr-0" 
        />
        <nav className={navClass}>
            <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                <CloseIcon />
            </button>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImg} alt=""
          className="w-10" />
        </div>
    </header> 
    );
};

export default MainHeader;