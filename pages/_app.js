import "../styles/index.scss";
import Head from "next/head";
import { Container } from "@material-ui/core";
import NavMenu from "../components/nav-menu";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Container maxWidth="lg">
        <NavMenu />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
}

export default MyApp;
