"use client";

import { Layout, LayoutPropsRef } from "@/components/Layout";
import { sidebarData } from "@/data/sidebar";
import { useRef } from "react";
import { Projects } from "@/components/projects";
import { Hero } from "@/components";

export default function Page() {
  const ref = useRef<LayoutPropsRef>(null);

  return (
    <Layout ref={ref} sidebar={sidebarData}>
      <Hero
        hasContent={false}
        onOpenSideBar={() => {
          ref.current?.OnOpenSidebar();
        }}
      />
      <Projects />
    </Layout>
  );
}
