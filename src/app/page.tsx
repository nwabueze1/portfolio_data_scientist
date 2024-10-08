"use client";
import { About } from "@/components/home/About";
import { Layout, LayoutPropsRef } from "@/components/Layout";
import { sidebarData } from "@/data/sidebar";
import { useRef } from "react";
import { Hero } from "@/components";

export default function Home() {
  const ref = useRef<LayoutPropsRef>(null);

  return (
    <Layout ref={ref} sidebar={sidebarData}>
      <Hero
        onOpenSideBar={() => {
          ref?.current?.OnOpenSidebar();
        }}
      />
      <About />
    </Layout>
  );
}
