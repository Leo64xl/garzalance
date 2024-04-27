import logo from "@/assets/images/logo22.png/";
import AvatarImg from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/Icons/MenuIcon";
import CartIcon from "@/components/Icons/CartIcon";


const MainHeader = () => {
    return (
        <header className="flex">
            <button className="md:hidden">
                <MenuIcon />
            </button>
        <img src={logo} alt="Logo GarzaLance"
        className="mr-auto md:mr-0" />
        <nav className="hidden md:block md:mr-auto">
          <a href="#">Colletions</a>
          <a href="#">Men</a>
          <a href="#">Woman</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImg} alt=""></img>
        </div>
    </header> 
    );
};

export default MainHeader;