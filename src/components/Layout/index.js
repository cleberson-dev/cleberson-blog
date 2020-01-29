import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

import defaultTheme from "../../utils/theme";
import { Container } from "./styles";



export default ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Header />
    <Container children={children} />
    <Footer />
  </ThemeProvider>
);