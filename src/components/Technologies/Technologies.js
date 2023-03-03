import React from 'react';
import { DiFirebase, DiMongodb, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies as a frontend developer. 
      Working as a react devepoper gives me the opportunity to work with
      Redux toolkit, Figma, Next js and material UI.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Redux toolkit, Next js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiMongodb size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node js and Mongodb database
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma/Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
