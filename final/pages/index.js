import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "../comps/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title> NINGA list | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        {/* <Navbar /> */}
        <h1>home page</h1>
        {/* <Footer /> */}
      </div>
    </>
  );
}
