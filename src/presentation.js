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
  Code
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
          <Heading size={6} textColor="secondary">
            ¿Qué es Git y por qué quiero aprenderlo?
          </Heading>
          <List>
            <ListItem>
              Una herramienta para rastrear los cambios en archivos.
            </ListItem>
            <ListItem>
              Puedes almacenar versiones de estos archivos en lugares remotos
              para facilitar el flujo de trabajo individual y colaborativo.
            </ListItem>
            <ListItem>
              En breve, git hace que manejar varias versiones de un proyecto,
              ya sea individual o colaborativo, no sea un dolor de cabeza.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Instalación
          </Heading>
          <List>
            <ListItem>
              En Debian y derivados (eg. Ubuntu): <Code>sudo apt install git</Code>
            </ListItem>
            <ListItem>
              En Fedora y derivados: <Code>sudo dnf install git</Code>
            </ListItem>
            <ListItem>
              En Windows o macOS, descargar de la pagina oficial: <Code>https://git-scm.com/downloads</Code>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Primero lo primero
          </Heading>
          <List>
            <ListItem>
              Git guarda un historial de tus archivos
            </ListItem>
            <ListItem>
              Hace copias de los archivos en ciertos puntos.
            </ListItem>
            <ListItem>
              Decides cuando se hace la copia creando una confirmación (commit)
            </ListItem>
            <ListItem>
              Puedes navegar entre commits
            </ListItem>
            <ListItem>
              Vas agregando los cambios que quiere confirmar a una zona de
              preparación (staging)
            </ListItem>
            <ListItem>
              Puedes sincronizar tu historial de commits con una copia
              remota del repositorio.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Comandos basicos
          </Heading>
          <Text textAlign="left">
            <Code>
              git init
            </Code> inicializa un repo nuevo.
          </Text>
          <Text textAlign="left">
            <Code> git add &lt;archivo(s)&gt
            </Code> agrega archivos al area de preparación.
          </Text>
          <Text textAlign="left">
            <Code>
              git status
            </Code> muestra el estado de los cambios no confirmados.
          </Text>
          <Text textAlign="left">
            <Code>
              git commit
            </Code> confirma los cambios agregados al area de preparación.
          </Text>
          <Text textAlign="left">
            <Code>
              git push
            </Code> sube commits nuevos a un repositorio remoto
          </Text>
          <Text textAlign="left">
            <Code>
              git pull
            </Code> obtiene y aplica commits nuevos de un repositorio remoto
          </Text>
          <Text textAlign="left">
            <Code>
              git clone
            </Code> copia un repositorio remoto a un directorio nuevo
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            ¿Qué es github y por qué lo quiero?
          </Heading>
          <List>
            <ListItem>
              Servicio para hospedar repositorios de git remotamente.
            </ListItem>
            <ListItem>
              Controlas quien puede modificar tus repositorios para facilitar
              la colaboración
            </ListItem>
            <ListItem>
              Expande git con otras funciones para facilitar flujos de
              trabajo comunes.
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
