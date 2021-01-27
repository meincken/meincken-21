import React, { useState, useRef } from "react";
import styled from "styled-components";
import { color } from "../../shared/styles";
import Logo from "../../components/Global/Logo";
import Nav from "./Navigation";
import Burger from "./Burger";
import { useOnClickOutside } from "./Hooks";

const GlobalHeader = styled.header`
  background-color: ${color.darkest};
  border-bottom: 1px solid ${color.primary};
  padding: 1rem 0;
  position: fixed;
  text-align: center;
  width: 100vw;
  z-index: 1;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 96rem;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <GlobalHeader>
        <Container>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Logo />
          <Nav open={open} setOpen={setOpen} id={menuId} />
        </Container>
      </GlobalHeader>
    </>
  );
};

export default Navbar;
