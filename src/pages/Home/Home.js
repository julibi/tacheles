import React from 'react';
import Fade from 'react-reveal/Fade';
import PageWrapper from '../../lib/PageWrapper/PageWrapper';
import TextContainer from '../../lib/TextContainer/TextContainer';

import style from './Home.css';

const Home = () => (
  <PageWrapper className={ style.root } pageTitle="HAUS">
    <TextContainer  
      firstTitle="First Title of TextContainer"
      secondTitle="Second Title of TextContainer"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      author="Maxime Musterfrau"
    />
    <Fade bottom>
      <TextContainer
        firstTitle="First Title of TextContainer"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        author="John Doe"
      />
    </Fade>
  </PageWrapper>
);

export default Home;
