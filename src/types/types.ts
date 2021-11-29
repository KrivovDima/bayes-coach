import React from "react";

export type HeaderContentNavLinkType = {
  id: number;
  text: string;
  route: string;
};

export type TabType = {
  id: number;
  text: string;
  renderContent: () => React.ReactNode;
};
