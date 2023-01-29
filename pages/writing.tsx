import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { getDatabaseWithFilter } from "../lib/notion";
import { Text } from "./[id]";
import ButtonTags from "../components/ButtonTags";
import Posts from "../components/Posts";
import { filterPostsByTags } from "../utils/arrays";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;
const stringForFilteringTopics = "writing-topic: ";

export default function Writing({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <div>
      <Head>
        <title>All Writing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Writing Archive</h1>
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
