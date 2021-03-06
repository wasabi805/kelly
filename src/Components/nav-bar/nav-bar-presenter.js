import React from "react";
import trdLogo from "../../assets/images/brazil-parkour-trans.png";

const NavBarPresenter = props => {
  return (
    <nav id={"nav-bar"}>
      <img src={trdLogo} alt={""} style={{maxWidth: '5vw'}}/>

      <ul className="links">
        <li>
          <a href=""> Home</a>
        </li>
        <li>
          <a href=""> About</a>
        </li>
        <li>
          <a href=""> Products</a>
        </li>
        <li>
          <a href=""> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarPresenter;
