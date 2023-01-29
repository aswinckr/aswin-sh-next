import Head from "next/head";
import Link from "next/link";
import { getDatabaseWithFilter } from "../lib/notion";
import { Text } from "./[id]";
import IntroShort from "../components/IntroShort";
import Posts from "../components/Posts";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Projects({ posts }) {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="mb-24 pt-24">Projects</h1>
        <Posts posts={posts} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const filter = {
    property: "Tags",
    multi_select: {
      contains: "project",
    },
  };

  const database = await getDatabaseWithFilter(databaseId, filter);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
