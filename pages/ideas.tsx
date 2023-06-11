import Head from "next/head";
import { useState } from "react";
import Idea from "../components/Ideas";
import ButtonTags from "../components/ButtonTags";
import { fetchInitialData } from "../lib/fetchdata";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;
const stringForFilteringTopics = "project-topic: ";

export default function Ideas({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  return (
    <div>
      <Head>
        <title>Ideas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.pageTitle}>🎧 Ideas</h1>
        <ButtonTags
          posts={posts}
          setFilteredPosts={setFilteredPosts}
          filterKeyword={stringForFilteringTopics}
        />
        <Idea posts={filteredPosts} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await fetchInitialData();

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
