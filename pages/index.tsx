import Head from "next/head";
import Link from "next/link";
// import { getDatabase, getDatabaseWithFilter } from "../lib/notion";
import { fetchInitialData } from "../lib/fetchdata";
import { Text } from "./[id]";
import IntroShort from "../components/IntroShort";
import Button from "../components/Button";
import Ideas from "../components/Ideas";
import Writing from "../components/Writing";
import Projects from "../components/Projects";
import styles from "../styles/index.module.css";
import { useContext } from "react";
import AppContext from "../context/Appcontext";
import { getNumberOfPostsWhereTagsContainsValue } from "../utils/array";

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
        <div className={styles.newsletter}>
          <div className={styles.newsletterWrapper}>
            <h2>🍻 Join my Weekly Idea Blast</h2>
            <p>
              Every week I send a newsletter with my latest writing and things
              I've been thinking about. Sign up below to be added to the list.
            </p>
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
  const database = await fetchInitialData();

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
