import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: red;
`;
