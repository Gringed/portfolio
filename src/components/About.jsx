import React from 'react'
import styled from 'styled-components'

const PrimaryColor = '#90be3e'
const SecondaryColor = '#4e4f50'
const TertiaryColor = '#18191a'
const White = 'whitesmoke'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 5px solid ${SecondaryColor};
`
const Title = styled.h1`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  color: ${White};
  text-transform: uppercase;
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 250px) and (max-width: 950px) {
    flex-direction: column;
    height: auto;
  }
`

const Info = styled.div`
  padding: 20px;
  font-size: 25px;
  color: ${White};
  width: 50%;
  display: flex;
  text-align: justify;
  flex-direction: column;
  @media (min-width: 250px) and (max-width: 950px) {
    width: 90%;
    padding: 0;
  }
`

const Paragraphe = styled.p`
  font-size: 25px;
  color: ${White};
  width: 100%;
  display: flex;
  text-align: justify;
  @media (min-width: 250px) and (max-width: 950px) {
    font-size: 20px;
  }
`

const Divider = styled.hr`
  width: 90%;
  border-top: 1px solid ${TertiaryColor};
  border-left: 35px solid ${PrimaryColor};
  border-right: 35px solid ${SecondaryColor};
  border-bottom: 1px solid ${TertiaryColor};
  @media (min-width: 250px) and (max-width: 950px) {
    width: 75%;
  }
`

const Image = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  display: flex;
  padding: 30px;
  @media (min-width: 250px) and (max-width: 950px) {
    width: 50%;
    height: 50%;
  }
`

const Important = styled.span`
  display: contents;
  color: ${PrimaryColor};
`

export const About = () => {
  return (
    <Container id='About'>
      <Title>Qui suis-je ?</Title>
      <Section>
        <Info>
          <Paragraphe>
            Passionné par l'univers informatique, le{' '}
            <Important>design</Important> et le <Important>code</Important>, je
            prends toujours ce plaisir de créer quelque chose à partir d'une
            idée.
          </Paragraphe>
          <Divider />
          <Paragraphe>
            Je propose une solution adaptée à vos besoins en plus de l'aspect
            visuel, en prenant en compte les{' '}
            <Important>besoins de votre entreprise</Important>.
          </Paragraphe>
          <Divider />
          <Paragraphe>
            Pour chaque projet, je m’engage à respecter un design et une façon
            de faire unique.
          </Paragraphe>
          <Divider />
          <Paragraphe>
            Je suis accessoirement axé Front-end (tout simplement par mon
            attrait au visuel) mais je ne suis pas fermé à de l'intégration
            Back-end.
          </Paragraphe>
        </Info>
        <Image src="portfolio/img/leaf.svg" />
      </Section>
    </Container>
  )
}
