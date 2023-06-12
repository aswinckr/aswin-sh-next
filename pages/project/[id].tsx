import { fetchInitialData } from "../../lib/fetchdata";
import { listOfAllProjects } from "../../utils/array";
import Ideas from "../../components/Ideas";
import styles from "../../styles/index.module.css";
import Button from "../../components/Button";
import { useContext } from "react";
import AppContext from "../../context/Appcontext";

export default function Project({ posts, projectId }) {
  const context = useContext(AppContext);

  return (
    <main className={styles.container}>
      <Ideas posts={posts} filter={projectId} />
      <div className="mt-4">
        <Button href={context.prevPath}>← Go back</Button>
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const database = await fetchInitialData();

  const listOfAllProjectsWithTheirIds = listOfAllProjects(database);

  const paths = listOfAllProjectsWithTheirIds.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const projectId = params.id;

  const database = await fetchInitialData();

  return {
    props: {
      posts: database,
      projectId,
    },
    revalidate: 1,
  };
};
