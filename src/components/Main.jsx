import React from "react";
import styled from "styled-components";

const PrimaryColor = "#90be3e";
const TertiaryColor = "#18191a";
const White = "whitesmoke";

const Background = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1550' height='1000' preserveAspectRatio='none' viewBox='0 0 1550 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1142%26quot%3b)' fill='none'%3e%3crect width='1550' height='1000' x='0' y='0' fill='rgba(24%2c 25%2c 26%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c551.594C104.337%2c552.655%2c206.763%2c514.064%2c289.574%2c450.585C368.709%2c389.924%2c406.328%2c295.111%2c450.928%2c205.932C497.192%2c113.427%2c547.784%2c23.42%2c554.813%2c-79.77C562.989%2c-199.807%2c572.215%2c-336.631%2c494.119%2c-428.156C415.978%2c-519.734%2c278.204%2c-523.242%2c159.468%2c-543.098C53.01%2c-560.901%2c-52.819%2c-562.553%2c-157.726%2c-537.164C-266.817%2c-510.762%2c-383.423%2c-480.72%2c-455.115%2c-394.36C-526.353%2c-308.546%2c-531.927%2c-188.824%2c-539.284%2c-77.537C-546.178%2c26.742%2c-541.796%2c132.573%2c-496.166%2c226.592C-451.15%2c319.347%2c-372.061%2c388.242%2c-285.814%2c444.736C-198.971%2c501.62%2c-103.81%2c550.539%2c0%2c551.594' fill='%23101011'%3e%3c/path%3e%3cpath d='M1550 1744.441C1691.962 1739.781 1840.359 1712.191 1948.561 1620.174 2051.87 1532.318 2080.657 1390.02 2119.533 1260.097 2153.692 1145.935 2176.319 1030.332 2160.389 912.239 2144.358 793.395 2092.685 686.6700000000001 2028.516 585.363 1954.82 469.015 1890.114 329.375 1760.94 281.606 1630.273 233.284 1477.796 270.293 1355.133 336.34299999999996 1243.055 396.693 1206.718 534.249 1119.521 626.988 1027.1399999999999 725.241 872.702 768.821 828.653 896.2860000000001 782.976 1028.461 833.058 1173.813 885.792 1303.334 940.189 1436.94 1014.093 1567.096 1134.262 1646.9009999999998 1255.289 1727.2759999999998 1404.7930000000001 1749.2069999999999 1550 1744.441' fill='%23202223'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1142'%3e%3crect width='1550' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  height: 90vh;
  width: 100%;
  display: flex;
  background-size: cover;
  border-bottom: 5px solid ${PrimaryColor};
  @media (min-width: 250px) and (max-width: 950px) {
    flex-direction: column;
    height: auto;
  }
`;
const Mascotte = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  height: 80%;
  justify-content: center;
  @media (min-width: 250px) and (max-width: 950px) {
    width: 100%;
  }
`;
const Image = styled.img`
  object-fit: none;
  @media (min-width: 250px) and (max-width: 950px) {
    object-fit: contain;
    width: 50%;
  }
`;
const Introduction = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80%;
  font-family: "Fredoka One", sans-serif;
  color: whitesmoke;
  @media (min-width: 250px) and (max-width: 950px) {
    margin: 0 20px 20px 20px;
  }
`;
const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 10%;
    color : ${PrimaryColor};
`;
const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    font-size: 30px;
    font-family: 'Quicksand', sans-serif;
    text-align: justify;
    font-weight: 600;
    color: ${White};
`;

const Span = styled.span`
    display: flex;
    color: ${PrimaryColor};
`
const Button = styled.a`
    display: flex;
    padding: 25px;
    text-decoration: none;
    border: 2px solid ${White};
    margin-top: 25px;
    color: ${White};
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    &:hover{
        background: ${PrimaryColor};
        color: ${TertiaryColor};
        border: 2px solid ${PrimaryColor};
    }
`

export const Main = () => {
  return (
    <Background>
      <Mascotte>
        <Image src="https://devengine.net/img/mascotte.png" />
      </Mascotte>
      <Introduction>
        <Title>Développeur | Intégrateur Web.</Title>
        <Presentation>
            De la conception de la maquette à la réalisation et à l'intégration de celle-ci, <Span>Je crée des sites à votre image.</Span>
        </Presentation>
        <Button href="https://calendly.com/gringed/premier-entretien" target="_blank">Réserver un entretien</Button>
      </Introduction>
    </Background>
  );
};
