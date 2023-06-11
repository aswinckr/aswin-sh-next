import styles from "../styles/index.module.css";
import Link from "next/link";
import { listOfAllProjects } from "../utils/array";

interface Posts {
  posts: any;
  limit?: number;
  postType?: string;
}

export default function Posts(posts: Posts) {
  const listOfAllProjectsWithTheirIds = listOfAllProjects(posts.posts);

  return (
    <>
      {listOfAllProjectsWithTheirIds.map((project) => {
        return (
          <Link href={`/project/${project.id}`} key={project.id}>
            <div className={styles.projectContainer}>
              <div className={styles.projectCount}>
                {project.count} ideas on
              </div>
              <h3 className={styles.projectTitle}>{project.name}</h3>
            </div>
          </Link>
        );
      })}
    </>
  );
}
