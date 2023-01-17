import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  goToAboutMe,
  goToContact,
  goToHome,
  goToProjects,
} from "../functions/goTo";
import NavbarOption from "./UI/NavbarOption";

const none = { display: "none" };
const flex = { display: "flex" };

const Navbar = () => {
  const navOptions = useSelector((state: any) => state.lenguage.navbar);
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [display, setDisplay] = useState<any>(flex);

  useEffect(() => {
    window.addEventListener("resize", hamburgerShow);

    return () => {
      window.removeEventListener("resize", hamburgerShow);
    };
  }, []);

  const hamburgerShow = () => {
    console.log("teste");
    if (window.innerWidth >= 1000 && isClosed) {
      setDisplay(flex);
    } else {
      setDisplay(none);
      setIsClosed(true);
    }
  };

  const showHamburgerClickHandler = () => {
    if (isClosed) {
      setDisplay(flex);
      setIsClosed(false);
    } else {
      setDisplay(none);
      setIsClosed(true);
    }
  };

  return (
    <header>
      <div id="sideicon">
        <h1 id="nome">GABRIEL ROSA</h1>
        <a id="contact" className="buttonn">
          <h1 onClick={goToContact}>{navOptions.contact}</h1>
        </a>
        <div onClick={showHamburgerClickHandler} id="hamburger">
          <i className="material-icons">menu</i>
        </div>
      </div>
      <div id="options" style={display}>
        <NavbarOption onClick={goToHome} text={navOptions.home} />
        <NavbarOption onClick={goToProjects} text={navOptions.projects} />
        <NavbarOption onClick={goToAboutMe} text={navOptions.about} />
        <NavbarOption onClick={goToContact} text={navOptions.contact} />
      </div>
    </header>
  );
};

export default Navbar;
