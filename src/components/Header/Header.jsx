import {
  HeaderLinkStyled,
  HeaderListStyled,
  HeaderStyled,
  HeaderWrapStyled,
  LogoStyled,
} from './Header.styled';
import logo from '../../img/logo.webp';

function Header() {
  return (
    <HeaderStyled>
      <HeaderWrapStyled>
        <HeaderLinkStyled to="/">
          <LogoStyled src={logo} alt="Drive Star" />
        </HeaderLinkStyled>
      </HeaderWrapStyled>

      <nav>
        <HeaderListStyled>
          <li>
            <HeaderLinkStyled to="/">Home</HeaderLinkStyled>
          </li>
          <li>
            <HeaderLinkStyled to="/catalog">Catalog</HeaderLinkStyled>
          </li>
          <li>
            <HeaderLinkStyled to="/favorites">Favorites</HeaderLinkStyled>
          </li>
        </HeaderListStyled>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
