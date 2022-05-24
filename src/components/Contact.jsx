import { Call, GitHub, LinkedIn, Mail } from "@mui/icons-material";
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
  border-bottom: 5px solid ${PrimaryColor};
`;
const Title = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Bloc = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 50px 0;
  flex-wrap: wrap;
`;
const Reseau = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
const Lien = styled.a`
  text-decoration: none;
  color: ${White};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${PrimaryColor};
  }
`;
const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const TitleRzo = styled.h1`
  font-family: "Fredoka One", sans-serif;
  font-size: 20px;
`;

export const Contact = () => {
  return (
    <Container id="Contact">
      <Title>Contactez moi</Title>
      <Bloc>
        <Reseau>
          <Lien
            href="https://www.linkedin.com/in/alexandre-guill%C3%B4me-5009ba169?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bcifh9I3FQOm6KqfUg4%2FP7w%3D%3D"
            target="_blank"
          >
            <Icon>
              <LinkedIn sx={{ fontSize: "5rem" }} />
            </Icon>
            <TitleRzo>Linkedin</TitleRzo>
          </Lien>
        </Reseau>
        <Reseau>
          <Lien href="mailto:contact@devengine.net" target="_blank">
            <Icon>
              <Mail sx={{ fontSize: "5rem" }}/>
            </Icon>
            <TitleRzo>Mail</TitleRzo>
          </Lien>
        </Reseau>
        <Reseau>
          <Lien href="https://github.com/Gringed" target="_blank">
            <Icon>
              <GitHub sx={{ fontSize: "5rem" }} />
            </Icon>
            <TitleRzo>GitHub</TitleRzo>
          </Lien>
        </Reseau>
        <Reseau>
          <Lien href="https://calendly.com/gringed/premier-entretien" target="_blank">
            <Icon>
              <Call sx={{ fontSize: "5rem" }} />
            </Icon>
            <TitleRzo>Entretien</TitleRzo>
          </Lien>
        </Reseau>
      </Bloc>
    </Container>
  );
};
