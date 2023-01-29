import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/index.module.css";
import {
  getArrayThatContainsString,
  trimStringFromAllValuesInArray,
} from "../utils/array";

interface ButtonTagsProps {
  posts: any;
  setFilteredPosts: (any) => void;
  filterKeyword?: string;
}

const createTagsFromPosts = (posts) => {
  const tags = posts.reduce((acc, post) => {
    return [
      ...acc,
      ...post.properties.Tags.multi_select.map((tag) => tag.name),
    ];
  }, []);

  return tags;
};

const getUniqueTags = (array) => {
  return array.reduce((acc, value) => {
    if (!acc.includes(value)) {
      return [...acc, value];
    }
    return acc;
  }, []);
};

const checkIfAtleastOneValueInArrayHasString = (array, string) => {
  return array.some((item) => item.includes(string));
};

const filterPostsByTagString = (posts, tagString) => {
  const filteredPosts = posts.filter((post) => {
    const postTags = post.properties.Tags.multi_select.map((tag) => tag.name);
    return checkIfAtleastOneValueInArrayHasString(postTags, tagString);
  });
  return filteredPosts;
};

const ButtonTags = (props: ButtonTagsProps) => {
  const [selected, setSelected] = React.useState("all");

  const { posts, setFilteredPosts, filterKeyword = "" } = props;

  useEffect(() => {
    if (selected === "all") {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = filterPostsByTagString(posts, selected);
      setFilteredPosts(filteredPosts);
    }
  }, [selected]);

  // 1. Separate tags from posts
  // 2. Get unique tags
  // 3. Get tags that contain the filter keyword
  // 4. Trim the filter keyword from the tags
  // 5. Map over the tags and create a button for each one

  const tagsToShow = trimStringFromAllValuesInArray(
    getArrayThatContainsString(
      getUniqueTags(createTagsFromPosts(posts)),
      filterKeyword
    ),
    filterKeyword
  );

  return (
    <div className={styles.tags}>
      <div className={`${selected === "all" ? styles.selected : ""}`}>
        <input
          type="radio"
          id={"all"}
          name="react-tips"
          value={"all"}
          checked={selected === "all"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor={"all"}>All</label>
      </div>
      {tagsToShow.map((tag) => {
        return (
          <div
            className={`${selected === tag ? styles.selected : ""}`}
            key={tag}
          >
            <input
              type="radio"
              id={tag}
              name="react-tips"
              value={tag}
              checked={selected === tag}
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            <label htmlFor={tag}>{tag}</label>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonTags;
