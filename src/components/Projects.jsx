import React from "react";
import styled from "styled-components";

const PrimaryColor = "#90be3e";
const SecondaryColor = "#4e4f50";
const TertiaryColor = "#18191a";
const White = "whitesmoke";

const Container = styled.div`
  color: ${White};
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 5px solid ${SecondaryColor};
`;
const Title = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Bloc = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 50px 0;
  flex-wrap: wrap;
  @media (min-width: 250px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Projet = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  @media (min-width: 250px) and (max-width: 768px) {
    width: 100%;
  }
`;
const ProjetHover = styled.a`
  text-decoration: none;
  color: ${White};
  padding: 10px;
  transition: all 0.2s ease-in;
  &:hover{
    opacity: 0.7;
  }
  &:hover>h1{
    color: ${PrimaryColor};
    transition: all 0.2s ease-in;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
const TitleProjet = styled.h1`
  font-family: "Fredoka One", sans-serif;
  font-size: 20px;
`;

const Description = styled.p`
  text-align: justify;
`;


export const Projects = () => {
  return (
    <Container id="Projects">
      <Title>Mes projets</Title>
      <Bloc>
        <Projet>
          <ProjetHover href="https://www.devengine.net/fr_FR" target="_blank">
            <Image src="portfolio/img/de.png" />
            <TitleProjet>Dev Engine</TitleProjet>
            <Description>
              Envie de fonder mon entreprise dans le développement web, j'ai moi
              même fais mon site avec l'aide d'un collaborateur pour un projet
              commun, je vous invite à aller le visiter.
            </Description>
          </ProjetHover>
        </Projet>
        <Projet>
          <ProjetHover href="https://www.auxcorbeauxdodin.fr" target="_blank">
            <Image src="portfolio/img/acdo.png" />
            <TitleProjet>Aux Corbeaux d'Odin</TitleProjet>
            <Description>
              Site vitrine d'un bar/taverne ayant pour activité le lancer de haches (si si, et c'est top pour se défouler). Technos utilisées pour celui ci : HTML | CSS | JS.
            </Description>
          </ProjetHover>
        </Projet>
        <Projet>
          <ProjetHover href="https://gringed.github.io/e-commerce_Project/" target="_blank">
            <Image src="portfolio/img/mooney.png" />
            <TitleProjet>Mooney</TitleProjet>
            <Description>
              Prototype de site e-commerce sous React, actuellement en phase de développement je rajouterais les technos utilisées par la suite.
            </Description>
          </ProjetHover>
        </Projet>
        <Projet>
          <ProjetHover href="https://gringed.github.io/ReseauSocialV2" target="_blank">
            <Image src="portfolio/img/se.png" />
            <TitleProjet>Social Engine (BETA)</TitleProjet>
            <Description>
              Un réseau social sous React avec comme autres technos : NodeJs | Express | Redux | MongoDB | Sass. (Repris du projet finale de ma formation)
            </Description>
          </ProjetHover>
        </Projet>
      </Bloc>
    </Container>
  );
};
