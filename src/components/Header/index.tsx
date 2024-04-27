import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Timer">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
