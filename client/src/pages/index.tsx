import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
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
import IDigimon from "../interfaces/IDigimon";

export default function Home() {
  const [describeShow, setDescribeShow] = useState(true);
  const [evolutionsShow, setEvolutionsShow] = useState(false);
  const [digimon, setDigimon] = useState<IDigimon | undefined>();
  const [data, setData] = useState<IDigimon[]>([]);
  const textFieldRef = useRef<HTMLInputElement>(null);

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/digimons");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
      <Row justifyContent="center">
        <TextField ref={textFieldRef} list="digimons" />
        <Button
          onClick={() => {
            setDigimon(
              data.find((value) => value.name === textFieldRef.current?.value)
            );
          }}
        >
          Search
        </Button>
        <datalist id="digimons">
          {data &&
            data.map((value, index) => {
              return <option key={index} value={value.name} />;
            })}
        </datalist>
      </Row>
      {digimon && (
        <>
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
                <ProfileImage
                  source={`http://localhost:3001/images/${digimon?.name.toLowerCase()}.jpg`}
                />
              </Row>
              <ProfileName>{digimon?.name}</ProfileName>
              <DescribeContainer show={describeShow}>
                <Row justifyContent="center">
                  <Describe textTransform="capitalize">
                    <b>Stage: </b> {digimon?.stage}
                  </Describe>
                </Row>
                <Row justifyContent="space-between">
                  <Describe textTransform="capitalize">
                    <b>Type: </b>
                    {digimon?.type}
                  </Describe>
                  <Describe textTransform="capitalize">
                    <b>Attribute: </b>
                    {digimon?.attribute}
                  </Describe>
                </Row>
                <Row justifyContent="space-between">
                  <Describe textTransform="capitalize">
                    <b>Memory: </b>
                    {digimon?.memory}
                  </Describe>
                  <Describe textTransform="capitalize">
                    <b>Equip Slots: </b>
                    {digimon?.equipSlot}
                  </Describe>
                </Row>
                <Row justifyContent="flex-start">
                  <Describe textTransform="none">
                    <b>Support Skill: </b>
                    <i>{digimon?.supSkillName}</i> <br />
                    {digimon?.supSkillDescribe}
                  </Describe>
                </Row>
                <Row justifyContent="flex-start">
                  <Describe textTransform="none">
                    <b>Requires: </b>
                    {digimon?.requirements}
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
      )}
    </>
  );
}
