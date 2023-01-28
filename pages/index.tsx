import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id]";
import IntroShort from "../components/IntroShort";
import Button from "../components/Button";
import Posts from "../components/Posts";
import styles from "../styles/index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Aswin's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <IntroShort />
        </header>

        <div className="mb-16 mt-16">
          <h2 className={styles.heading}>
            First time here? You might like these 👇🏽
          </h2>
          <Posts postsWithLimit={{ posts, limit: 3 }} />
        </div>

        <div className="mb-16">
          <h2 className={styles.heading}>Latest Writing</h2>
          <Posts postsWithLimit={{ posts, limit: 3 }} />
          <Button
            buttonText={`See All ${posts.length} Essays →`}
            url="/writing"
            buttonType="secondary"
          />
        </div>
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
