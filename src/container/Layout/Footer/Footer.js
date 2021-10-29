import React from "react";
import Logo from "components/UI/Logo/Logo";
import Footers from "components/Footer/Footer";
import FooterMenu from "./FooterMenu";
import mainLogo from "assets/images/classiestatelogo.png";

const Footer = () => {
  return (
    <Footers
      logo={
        <div>
          <img style={{ width: "100px" }} src={mainLogo} alt="Logo"></img>
          {/* <Logo withLink linkTo="/" src={mainLogo} /> */}
        </div>
      }
      menu={<FooterMenu />}
      copyright={<div>`Copyright @{new Date().getFullYear()} Kriston Pal`</div>}
    />
  );
};

export default Footer;
