import { Text } from "../pages/[id]";
import styles from "../styles/index.module.css";
import Link from "next/link";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface PostsWithLimit {
  posts: (PageObjectResponse | PartialPageObjectResponse)[];
  limit?: number;
  filter?: string[];
}

const displayOnlyFirstNPosts = (posts, limit) => {
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
};

const filterPostsByTags = (posts, filterTags = []) => {
  const filteredPosts = posts.filter((post) => {
    const postTags = post.properties.Tags.multi_select.map((tag) => tag.name);
    return filterTags.every((tag) => postTags.includes(tag));
  });
  return filteredPosts;
};

export default function Posts({
  postsWithLimit,
}: {
  postsWithLimit: PostsWithLimit;
}): JSX.Element {
  const filteredPosts = filterPostsByTags(
    postsWithLimit.posts,
    postsWithLimit.filter
  );

  const postsAfterFilteringAndLimits = displayOnlyFirstNPosts(
    filteredPosts,
    postsWithLimit.limit
  );

  return (
    <>
      <ol className={styles.posts}>
        {postsAfterFilteringAndLimits.map((post) => {
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
              <Link href={`/${post.id}`}>Read post →</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
