import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { getDatabaseWithFilter } from "../lib/notion";
import { Text } from "./[id]";
import IntroShort from "../components/IntroShort";
import Posts from "../components/Posts";
import ButtonTags from "../components/ButtonTags";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;
const stringForFilteringTopics = "project-topic: ";

export default function Projects({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Projects</h1>
        <ButtonTags
          posts={posts}
          setFilteredPosts={setFilteredPosts}
          filterKeyword={stringForFilteringTopics}
        />
        <Posts posts={filteredPosts} />
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
