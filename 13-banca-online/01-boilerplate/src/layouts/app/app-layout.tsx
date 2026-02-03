import * as React from "react";
import classes from "./app-layout.module.css";
import {
  FooterComponent,
  HeaderComponent,
  NavBarComponent,
} from "./components";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <NavBarComponent />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent />
    </>
  );
};
