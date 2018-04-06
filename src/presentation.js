// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Introducción a git y  GitHub
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Rafael Alejandro Castillo López
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            ¿Qué es Git y por qué quiero aprenderlo?
          </Heading>
          <List>
            <ListItem>
              Una herramienta para mantener un control de los cambios que
              realizas a un proyecto.
            </ListItem>
            <ListItem>
              Puedes trabajar en varios aspectos de un proyecto personal
              aisladamente e integrar tus cambios, nunca perdiendo versiones
              viejas.
            </ListItem>
            <ListItem>
              O puedes integrar las contribuciones de varios integrantes
              de un equipo de trabajo facilmente.
            </ListItem>
            <ListItem>
              En breve, git hace que manejar varias versiones de un proyecto,
              ya sea individual o colaborativo, no sea un dolor de cabeza.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Primero lo primero
          </Heading>
          <List>

          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
