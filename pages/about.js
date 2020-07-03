import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  margin: 2rem;
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #0872a1;
  }

  a {
    color: #4c4f5a;
    text-decoration-line: underline;
    text-decoration-color: #0872a1;
    text-decoration-thickness: 3px;
  }
`

const About = () => (
  <Container>
    <Head>
      <title>About | Dock90</title>
    </Head>
    <Header />
    <Body>
      <Intro>
        <h3>What I Do</h3>
        <h1>I create <span>effective strategies</span>, <span>seamless interactions</span>, and <span>modern platforms</span> to help your business grow <Link href='/better-not-bigger'><a>better</a></Link>, instead of bigger.</h1>
      </Intro>
    </Body>
    <Footer />
  </Container>
)

export default About
