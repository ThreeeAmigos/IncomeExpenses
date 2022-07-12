import React from "react";
import styled from "styled-components";

const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: 10vh;
  border-top: 0.5vh solid black;
  margin-top: 2vh;
  top: 50%;
`;

// This component is perhaps a bit redundant
const Developer = styled.div`
  height: fit-content;
  width: auto;
  display: flex;
  /* flex-direction: column; */
`;

const DevProfile = styled.a`
  margin-left: 4vw;
  margin-right: 4vw;
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
`;

const DevImage = styled.img`
  margin-top: 1vh;
  height: 8vh;
  width: auto;
  border-radius: 50%;
  margin-bottom: 0px;
`;

const Footer = () => {
  return (
    <MainFooter>
      <Developer>
        <DevProfile href="https://github.com/hanselkang">
          <DevImage src="https://avatars.githubusercontent.com/u/43307207?v=4" />
          {/* <p>Hansel</p> */}
        </DevProfile>
      </Developer>
      <Developer>
        <DevProfile href="https://github.com/Johnstoncam">
          <DevImage src="https://avatars.githubusercontent.com/u/72796586?v=4" />
          {/* <p>Cam</p> */}
        </DevProfile>
      </Developer>
      <Developer>
        <DevProfile href="https://github.com/J-Rozas">
          <DevImage src="https://avatars.githubusercontent.com/u/67562547?v=4" />
          {/* <p>Emilio</p> */}
        </DevProfile>
      </Developer>
    </MainFooter>
  );
};

export default Footer;
