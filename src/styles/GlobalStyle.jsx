import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "SUIT";
    src: url("../assets/fonts/SUIT-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url("../assets/fonts/SUIT-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url("../assets/fonts/SUIT-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url("../assets/fonts/SUIT-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url("../assets/fonts/SUIT-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url("../assets/fonts/SUIT-ExtraBold.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }
    

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  min-height: 100%;
}

body {
  font-family: "SUIT";
  background: #111;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
`;

export default GlobalStyle;
