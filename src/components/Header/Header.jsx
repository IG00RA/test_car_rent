import {
  HeaderLinkStyled,
  HeaderListStyled,
  HeaderStyled,
  HeaderWrapStyled,
} from './Header.styled';

function Header() {
  return (
    <HeaderStyled>
      <HeaderWrapStyled>
        <HeaderLinkStyled to="/">Drive Star</HeaderLinkStyled>
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
