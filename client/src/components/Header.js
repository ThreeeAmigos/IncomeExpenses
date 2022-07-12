import React from "react";
import RegisterPurpose from "./RegisterPurpose";
import RegisterIncome from "./RegisterIncome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 10vh;
  border-bottom: 0.5vh solid black;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2vh;
`;

const HeaderItem = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  width: fit-content;
`;

const Header = () => {
  return (
    <MainHeader>
      <HeaderItem>Element one</HeaderItem>
      <HeaderItem>Element two</HeaderItem>
    </MainHeader>
  );
};

export default Header;
