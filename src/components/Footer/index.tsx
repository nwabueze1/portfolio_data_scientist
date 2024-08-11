import styles from "./footer.module.sass";
import { Container } from "@/components/Container";
import Link from "next/link";
import { footerData } from "@/data/footer";

export const Footer = () => {

  const renderLinks = () => footerData.map((data, index) =>
    <Link key={index} href={data.url} className={styles.footer__content__link}>
      {data.title}
    </Link>,
  );

  return <footer className={styles.footer}>
    <Container>
      <div className={styles.footer__content}>
        {renderLinks()}
      </div>
    </Container>
  </footer>;
};