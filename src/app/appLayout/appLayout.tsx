import React, { ReactNode } from "react"

type AppLayoutProps = {
    children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
      <div>
        <header>test header</header>
        <main>{children}</main>
        <footer>test footer</footer>
      </div>
    );
  };

export default AppLayout;