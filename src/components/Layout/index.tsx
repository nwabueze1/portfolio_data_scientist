import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import Link from "next/link";
import clx from "classnames";
import { MdClose } from "react-icons/md";
import { LayoutProps } from "./type";
import styles from "./layout.module.sass";
import { Footer } from "@/components/Footer";

export type LayoutPropsRef = {
  OnOpenSidebar: () => void;
};

export const Layout = forwardRef<LayoutPropsRef, LayoutProps>(({ children, sidebar }, ref) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeUrl, setActiveUrl] = useState("/");
  const renderLinks = () =>
    sidebar.links.map((link, index) => (
      <li key={index}>
        <Link href={link.url} className={link.url === activeUrl ? styles.link__active : ""}>{link.title}</Link>
      </li>
    ));


  useImperativeHandle(ref, () => {
    return {
      OnOpenSidebar() {
        setOpen(true);
      },
    };
  });

  useEffect(() => {
    setActiveUrl(location.pathname);
    if (contentRef.current && typeof contentRef.current !== "undefined") {
      contentRef?.current?.addEventListener("scroll", () => {
        const element = document.getElementById("navbar");
        if (element) {
          const distanceFromTop = contentRef.current?.scrollTop;
          const isProjects = location.pathname === "/projects";
          element.style.background = distanceFromTop && distanceFromTop >= (isProjects ? 170 : 270) ? "black" : "";
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {
      });
    };
  }, []);

  return (
    <>
      <main className={styles.root}>
        <section className={clx(styles.sidebarContainer, open && styles.sidebarContainerMobile)}>
          <div className={styles.sidebarRoot}>
            <button className={styles.closeButton} onClick={() => setOpen(false)}>
              <MdClose />
            </button>
            <h3 className={styles.sidebarTitle}>{sidebar.title}</h3>
            <ul className={styles.navListContainer}>{renderLinks()}</ul>
          </div>
        </section>
        <section className={styles.content} ref={contentRef}>
          {children}
          <Footer></Footer>
        </section>
        <div
          className={clx(
            styles.sidebarContainer__overlay,
            open && styles.sidebarContainer__overlay__open,
          )}
          onClick={() => setOpen(false)}
        />
      </main>
    </>
  );
});
