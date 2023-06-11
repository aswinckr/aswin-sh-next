import { Text } from "../pages/[id]";
import styles from "../styles/index.module.css";
import { trimKeywordFromString } from "../utils/string";
import Link from "next/link";

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

const postSummarIfValueExists = (post) => {
  if (post.properties.Summary && post.properties.Summary.rich_text[0]) {
    return post.properties.Summary.rich_text[0].plain_text;
  }
  return "";
};

export default function BlogPosts(posts: Posts): JSX.Element {
  const postType = "writing";

  const postsFilteredByPostType = posts.posts.filter((post) => {
    if (postType) {
      return post.properties.Tags.multi_select.some((tag) =>
        tag.name.includes(postType)
      );
    }
    return true;
  });

  const postsAfterLimitsIfAny = displayOnlyFirstNPosts(
    postsFilteredByPostType,
    posts.limit
  );

  return (
    <div>
      <ol className={styles.posts}>
        {postsAfterLimitsIfAny.map((post) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });

          return (
            <li key={post.id} className={styles.post}>
              <div>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                  {post.properties.Tags.multi_select.map((tag) => {
                    if (tag.name.includes("label: ")) {
                      return (
                        <span className={`${styles.label}`} key={tag.id}>
                          {trimKeywordFromString(tag.name, "label: ")}
                        </span>
                      );
                    }
                  })}
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <p className={styles.postSummary}>
                  {postSummarIfValueExists(post)}
                </p>

                <Link className="gradient" href={`/${post.id}`}>
                  Read post →
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
