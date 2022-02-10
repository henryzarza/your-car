import styled from "styled-components";
import tw from "twin.macro";

import Logo from "../Logo";
import NavItems from "./navItems";

const NavbarContainer = styled.nav`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `};
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Logo />
      </div>
      <NavItems />
    </NavbarContainer>
  );
}

export default Navbar;
