import Head from "next/head";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import i18nConfig from "../next-i18next.config";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Languages POC</title>
        <meta name="description" content="Generated by Next Languages POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{t("hello")}</h1>
      <div>Current language is {router.locale}</div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Link href="/products/1">
        <a>Prouduct 1</a>
      </Link>
      <br />
      <Link href="/" locale={router.locale === "en" ? "fr" : "en"}>
        <a>Change language</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nConfig)),
    },
  };
}
