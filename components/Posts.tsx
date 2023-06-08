import { useState } from "react";
import { Text } from "../pages/[id]";
import styles from "../styles/index.module.css";
import { trimKeywordFromString } from "../utils/string";
import Link from "next/link";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface Posts {
  posts: any;
  limit?: number;
  postType?: string;
}

const displayOnlyFirstNPosts = (posts, limit) => {
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
};

export default function Posts(posts: Posts): JSX.Element {
  const postType = posts.postType;
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
              <div
                className={postType == "project" ? styles.projectContainer : ""}
              >
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
