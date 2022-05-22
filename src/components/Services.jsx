import React from 'react'
import styled from 'styled-components'

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
  border-bottom: 5px solid ${PrimaryColor};
`

const Title = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 100%;
    align-items: center;
`
const ListItem = styled.li`
    list-style: none;
    display: flex;
    margin: 50px 0;
    justify-content: space-around;
    align-items: center;
    width: 60%;
`
const Icon = styled.div`
    border: 2px solid ${PrimaryColor};
    padding: 10px;
    border-radius: 50%;
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-family: "Fredoka One", sans-serif;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: inherit;
`

const ItemTitle = styled.h1`
    display: flex;
    color: ${PrimaryColor};
    text-transform: uppercase;
`
const ItemText = styled.p`
    display: flex;
    font-size: 20px;
    width: 100%;
`

const Divider = styled.hr`
    height: 50px;
    border: 1px solid ${White};
`

export const Services = () => {
  return (
    <Container>
    <Title>Comment ça se passe ?</Title>
      <List>
        <ListItem>
          <Icon>1</Icon>
          <Item>
          <ItemTitle>Entretien</ItemTitle>
          <ItemText>On va discuter et établir les besoins de façon clair</ItemText>
          </Item>
        </ListItem>
        <Divider />
        <ListItem>
          <Icon>2</Icon>
          <Item>
          <ItemTitle>Analyse | Etudes</ItemTitle>
          <ItemText>Je vais analyser différentes façon de concevoir votre site, aussi bien en design qu'en développement.</ItemText>
          </Item>
        </ListItem>
        <Divider />
        <ListItem>
          <Icon>3</Icon>
          <Item>
          <ItemTitle>Design</ItemTitle>
          <ItemText>Je vais établir une première version de la maquette, si validée par vous on passe à la suite. Si non je retravaille celle-ci.</ItemText>
          </Item>
        </ListItem>
        <Divider />
        <ListItem>
          <Icon>4</Icon>
          <Item>
          <ItemTitle>Intégration</ItemTitle>
          <ItemText>J'intègre la maquette validée et votre site verra le jour !</ItemText>
          </Item>
        </ListItem>
      </List>
    </Container>
  )
}
