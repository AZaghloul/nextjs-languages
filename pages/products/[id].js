import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useTranslation } from "next-i18next";

export default function Product() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <h1>{t("hello")}</h1>
      <div>Current language is {router.locale}</div>

      <h2>Product No {id}</h2>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/products/1" locale={router.locale === "en" ? "fr" : "en"}>
        <a>Change language</a>
      </Link>
    </div>
  );
}
