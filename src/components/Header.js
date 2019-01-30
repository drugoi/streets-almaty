import React from "react";

import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 70px;
  background: #2980b9;
  line-height: 70px;

  @media screen and (max-width: 425px) {
    line-height: 1.2;
    padding: 20px 0;
  }
`;

const HeaderTitle = styled.h1`
  padding: 0 20px;
  color: #fff;
  font-size: 1.25rem;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Старые &mdash; Новые названия улиц Алматы</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
