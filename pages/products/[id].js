import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <h1>Welcome to Nextjs Languages POC</h1>
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
      <Link href="/products/1" locale={router.locale === "en" ? "fr" : "en"}>
        <a>Change language</a>
      </Link>
    </div>
  );
}
