'use client';
import { useState } from "react";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import { Navigation } from "./Components";

const renderComponent = (component: string) => {
  const Components = require(`./Components/`);
  const Component = Components[component];
  return Component ? <Component /> : null;
};

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("General");
  return (
    <div className="dd-content">
      <Navigation onChange={(setting) => setActiveComponent(setting)} />
      <Header />
      <Main>
        {renderComponent(activeComponent)}
      </Main>
    </div>
  );
}