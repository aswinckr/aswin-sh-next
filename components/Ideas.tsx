import { Text } from "../pages/[id]";
import styles from "../styles/index.module.css";
import { trimKeywordFromString } from "../utils/string";
import Link from "next/link";
import {
  listOnlyFirstNPosts,
  postsFilteredByPostType,
  postsFilteredByProjectId,
} from "../utils/array";

interface Posts {
  posts: any;
  limit?: number;
  filter?: string;
}

const postSummaryIfValueExists = (post) => {
  if (post.properties.Summary && post.properties.Summary.rich_text[0]) {
    return post.properties.Summary.rich_text[0].plain_text;
  }
  return "";
};

export default function Ideas(posts: Posts): JSX.Element {
  const postType = "idea";

  const postsAfterLimitsIfAny = listOnlyFirstNPosts(
    postsFilteredByProjectId(
      postsFilteredByPostType(posts, postType),
      posts.filter
    ),
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

                <p className={styles.postSummary}>
                  {postSummaryIfValueExists(post)}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
