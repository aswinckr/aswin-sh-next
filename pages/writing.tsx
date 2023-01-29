import Head from "next/head";
import Link from "next/link";
import { getDatabaseWithFilter } from "../lib/notion";
import { Text } from "./[id]";
import ButtonTags from "../components/ButtonTags";
import Posts from "../components/Posts";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Writing({ posts }) {
  return (
    <div>
      <Head>
        <title>All Writing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="mb-24 pt-24">Writing Archive</h1>
        <ButtonTags />
        <Posts posts={posts} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const filter = {
    property: "Tags",
    multi_select: {
      contains: "writing",
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
