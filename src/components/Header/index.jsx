import * as S from "./styles.js";

function Header() {
  return (
    <S.DivHeader>
      <S.Title>
        <a href="/">
          <img src="/img/logo.svg" alt="logo" />
        </a>
        <h1>Covid-19 tool: 10km</h1>
      </S.Title>
      <S.Linkedin>
        <span>Suivez-nous !</span>
        <a href="https://www.linkedin.com/company/follow-the-market/">
          <img src="/img/linkedin.svg" alt="linkedin logo" />
        </a>
      </S.Linkedin>
    </S.DivHeader>
  );
}

export default Header;
