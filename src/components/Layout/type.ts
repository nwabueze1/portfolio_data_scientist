import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  sidebar: {
    title: string;
    links: { title: string; url: string }[];
  };
};

export type LayoutPropsRef = {
  OnOpenSidebar: () => void;
};
