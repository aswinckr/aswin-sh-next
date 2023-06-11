import Head from "next/head";
import { useState } from "react";
import ButtonTags from "../components/ButtonTags";
import Writing from "../components/Writing";
import styles from "../styles/index.module.css";
import { fetchInitialData } from "../lib/fetchdata";

export const databaseId = process.env.NOTION_DATABASE_ID;
const stringForFilteringTopics = "writing-topic: ";

export default function ({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <div>
      <Head>
        <title>All Writing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.pageTitle}>🦧 Writing Archive</h1>
        <ButtonTags
          posts={posts}
          setFilteredPosts={setFilteredPosts}
          filterKeyword={stringForFilteringTopics}
        />
        <Writing posts={filteredPosts} />
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
