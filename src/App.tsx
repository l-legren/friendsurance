import React from "react";
import { Header } from "./components/Header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { FriendsuranceForm } from "./components/Form";

const theme = {
    colors: {
        primary: "#3399FF",
        primaryDarker: "#2b7ccd",
        primaryText: "#003566",
        secondary: "#fb8500",
        error: "#dc3545",
        errorDarker: "#6F1635",
    },
    fonts: {
        primary: "Roboto, sans-serif",
        secondary: "Helvetica, sans-serif",
    },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    box-sizing: border-box;
    margin: 0;
  }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <FriendsuranceForm />
        </ThemeProvider>
    );
}

export default App;
