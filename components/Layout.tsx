import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import Scroll from "react-scroll-to-element";

type Props = { children: any };

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
