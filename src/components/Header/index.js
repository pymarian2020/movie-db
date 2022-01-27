import React from "react";
import { Link } from "react-router-dom";

import myLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={myLogo} alt="movie-db-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="TMDB-Logo" />
    </Content>
  </Wrapper>
);

export default Header;
