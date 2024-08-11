"use client";

import { Layout, LayoutPropsRef } from "@/components/Layout";
import { sidebarData } from "@/data/sidebar";
import { useRef } from "react";

export default function Page() {
  const ref = useRef<LayoutPropsRef>(null);

  return (
    <Layout ref={ref} sidebar={sidebarData}>
      <button onClick={ref?.current?.OnOpenSidebar}>Open</button>
    </Layout>
  );
}
