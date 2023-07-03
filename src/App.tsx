import React from "react";
import { Header } from "./components/Header";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        error: "#dc3545",
    },
    fonts: {
        primary: "Arial, sans-serif",
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
        </ThemeProvider>
    );
}

export default App;
