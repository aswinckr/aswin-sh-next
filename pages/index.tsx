import Head from "next/head";
import Link from "next/link";
import { getDatabase, getDatabaseWithFilter } from "../lib/notion";
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
          <Posts posts={posts} />
          <Button href="/writing" type="secondary">
            See writing archive →
          </Button>
        </div>
        <div className={styles.newsletter}>
          <div className={styles.newsletterWrapper}>
            <h2>🍻 Weekly brew by Ash</h2>
            <p>Fresh insights and updtes delivered directly into your inbox</p>
            <iframe
              src="https://embeds.beehiiv.com/6cb40e0e-448f-40f0-938f-186b8f78b542?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              style={{
                margin: "0",
                borderRadius: "4px",
                width: "100%",
                backgroundColor: "transparent",
              }}
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const filter = {
    property: "Tags",
    multi_select: {
      contains: "featured",
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
