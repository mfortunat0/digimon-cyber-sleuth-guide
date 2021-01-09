import {
  Row,
  Button,
  TextField,
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
} from "../styles/index";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [describeShow, setDescribeShow] = useState(true);
  const [evolutionsShow, setEvolutionsShow] = useState(false);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row justifyContent="center ">
        <TextField list="digimons" />
        <Button>Search</Button>
        <datalist id="digimons">
          <option value="Agumon" />
        </datalist>
      </Row>
      <Row justifyContent="center">
        <CardContainer>
          <TabContainer>
            <TabButton
              onClick={() => {
                setDescribeShow(true);
                setEvolutionsShow(false);
              }}
            >
              Describe
            </TabButton>
            <TabButton
              onClick={() => {
                setDescribeShow(false);
                setEvolutionsShow(true);
              }}
            >
              Evolutions
            </TabButton>
          </TabContainer>
          <Row justifyContent="center">
            <ProfileImage source="/digimons/agumon.jpg" />
          </Row>
          <ProfileName>Agumon</ProfileName>
          <DescribeContainer show={describeShow}>
            <Row justifyContent="center">
              <Describe>
                <b>Stage: </b> Roockie
              </Describe>
            </Row>
            <Row justifyContent="space-between">
              <Describe>
                <b>Type: </b>Vaccina
              </Describe>
              <Describe>
                <b>Attribute: </b>Fire
              </Describe>
            </Row>
            <Row justifyContent="space-between">
              <Describe>
                <b>Memory: </b>5
              </Describe>
              <Describe>
                <b>Equip Slots: </b>1
              </Describe>
            </Row>
            <Row justifyContent="flex-start">
              <Describe>
                <b>Support Skill: </b>
                <i>Dragons Roar</i> <br />
                Increases damage from Fire skills by 15%.
              </Describe>
            </Row>
            <Row justifyContent="flex-start">
              <Describe>
                <b>Requires: </b>ATK: 30, CAM: 10%
              </Describe>
            </Row>
          </DescribeContainer>
          <Row justifyContent="center">
            <EvolutionContainer show={evolutionsShow}>
              <EvoltutionTitle>Digivolves From</EvoltutionTitle>
              <Row justifyContent="center">
                <EvoltuionImages source="/digimons/greymon.jpg" />
                <EvoltuionImages source="/digimons/geogreymon.jpg" />
                <EvoltuionImages source="/digimons/meramon.jpg" />
                <EvoltuionImages source="/digimons/tyrannomon.jpg" />
              </Row>
            </EvolutionContainer>
            <EvolutionContainer show={evolutionsShow}>
              <EvoltutionTitle>Digivolves Into</EvoltutionTitle>
              <Row justifyContent="center">
                <EvoltuionImages source="/digimons/greymon.jpg" />
                <EvoltuionImages source="/digimons/geogreymon.jpg" />
                <EvoltuionImages source="/digimons/meramon.jpg" />
                <EvoltuionImages source="/digimons/tyrannomon.jpg" />
              </Row>
            </EvolutionContainer>
          </Row>
        </CardContainer>
      </Row>
    </>
  );
}
