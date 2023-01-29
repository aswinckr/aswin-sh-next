import { Text } from "../pages/[id]";
import styles from "../styles/index.module.css";
import Link from "next/link";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface Posts {
  posts: any;
  limit?: number;
}

const displayOnlyFirstNPosts = (posts, limit) => {
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
};

export default function Posts(posts: Posts): JSX.Element {
  const postsAfterLimitsIfAny = displayOnlyFirstNPosts(
    posts.posts,
    posts.limit
  );

  return (
    <>
      <ol className={styles.posts}>
        {postsAfterLimitsIfAny.map((post) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <li key={post.id} className={styles.post}>
              <h3 className={styles.postTitle}>
                <Link href={`/${post.id}`}>
                  <Text text={post.properties.Name.title} />
                </Link>
              </h3>

              <p className={styles.postDescription}>{date}</p>
              <Link className="gradient" href={`/${post.id}`}>
                Read post →
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
