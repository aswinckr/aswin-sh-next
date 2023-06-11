import Head from "next/head";
import { fetchInitialData } from "../lib/fetchdata";
import IntroShort from "../components/IntroShort";
import Button from "../components/Button";
import Ideas from "../components/Ideas";
import Writing from "../components/Writing";
import Projects from "../components/Projects";
import styles from "../styles/index.module.css";
import { getNumberOfPostsWhereTagsContainsValue } from "../utils/array";
import Newsletter from "../components/Newsletter";

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
          <IntroShort
            ideas={getNumberOfPostsWhereTagsContainsValue(posts, "idea")}
          />
        </header>

        <div className="mb-16 mt-16">
          <h2 className={styles.heading}>Projects</h2>
          <Projects posts={posts} postType={"project"} />
          <Button href="/ideas" type="secondary">
            See idea archive →
          </Button>
        </div>

        <div className="mb-16 mt-32">
          <h2 className={styles.heading}>Latest Writing</h2>
          <Writing posts={posts} />
          <Button href="/writing" type="secondary">
            See writing archive →
          </Button>
        </div>

        <Newsletter />
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
