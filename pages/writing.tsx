import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id]";
import IntroShort from "../components/IntroShort";
import Posts from "../components/Posts";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Writing({ posts }) {
  return (
    <div>
      <Head>
        <title>All Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="mb-24 pt-24">Writing Archive</h1>
        <Posts posts={posts} limit={5} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
