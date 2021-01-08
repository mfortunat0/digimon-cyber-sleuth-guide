import { createGlobalStyle } from "styled-components";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";

const Global = createGlobalStyle`
  html,
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
};

export default MyApp;
