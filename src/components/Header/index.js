import React from "react";
import { Link } from "gatsby";

import { HeaderContainer, HeaderTitle } from "./styles";

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderTitle>cleberson.jr</HeaderTitle>
    </Link>
  </HeaderContainer>
);

export default Header;
