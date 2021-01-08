import styled from "styled-components";

interface IRow {
  justifyContent: string;
}

interface IProfileImage {
  source: string;
}

interface IContainer {
  show: boolean;
}

const Row = styled.div<IRow>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  margin-top: 4vh;
  flex-wrap: wrap;
`;

const TextField = styled.input.attrs({ placeholder: "Digimon name" })`
  height: 5vh;
  width: 144px;
  border: none;
  outline: none;
  border-bottom: 2px solid #008ec7;
  text-transform: capitalize;
`;

const Button = styled.button`
  background-color: #008ec7;
  font-weight: 900;
  height: 5vh;
  outline: none;
  padding: 5px;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  opacity: 0.8;
  transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1023px) {
    opacity: 1;
  }
`;

const ProfileImage = styled.div<IProfileImage>`
  height: 14vh;
  width: 14vh;
  background-image: url(${(props) => props.source});
  background-size: cover;
  border-radius: 4px;
`;

const CardContainer = styled.div`
  padding: 3vh 3vh 3vh 3vh;
  margin-bottom: 3vh;
  background-color: #008ec7;
  box-shadow: 0px 0px 7px 0px rgba(0, 142, 199, 1);
  border-radius: 2px;
  height: 78vh;
  width: 425px;
  @media (max-width: 425px) {
    width: 85vw;
  }
`;

const ProfileName = styled.h1`
  color: white;
  text-align: center;
  font-size: 4.5vh;
`;

const Describe = styled.p`
  color: white;
  font-size: 2.7vh;
  letter-spacing: 1px;
  font-weight: 400;
`;

const EvoltutionTitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 2.5vh;
`;

const EvoltuionImages = styled.div<IProfileImage>`
  height: 9vh;
  width: 9vh;
  background-image: url(${(props) => props.source});
  background-size: cover;
  border-radius: 4px;
  margin-left: 0.3vw;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    height: 10vh;
    width: 10vh;
  }
`;

const EvolutionContainer = styled.div<IContainer>`
  width: 50%;
  transition: all 0.3s;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
`;

const DescribeContainer = styled.div<IContainer>`
  width: 100%;
  position: fixed;
  transition: all 0.3s;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  width: 425px;
  @media (max-width: 425px) {
    width: 85vw;
  }
  padding-right: 3vw;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TabButton = styled.button`
  background-color: white;
  color: #008ec7;
  border: 2px solid transparent;
  outline: none;
  height: 5vh;
  padding: 5px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  font-weight: 900;
  transition: all 0.3s;
  :hover {
    background-color: #008ec7;
    color: white;
  }
`;

export {
  Row,
  TextField,
  Button,
  ProfileImage,
  CardContainer,
  ProfileName,
  Describe,
  EvolutionContainer,
  TabContainer,
  TabButton,
  DescribeContainer,
  EvoltutionTitle,
  EvoltuionImages,
};
