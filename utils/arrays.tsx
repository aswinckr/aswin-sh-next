export const filterPostsByTags = (posts, filters = []) => {
  const filteredPosts = posts.filter((post) => {
    const postTags = post.properties.Tags.multi_select.map((tag) => tag.name);
    return filters.every((tag) => postTags.includes(tag));
  });
  return filteredPosts;
};

export const getArrayThatContainsString = (array, string) => {
  return array.filter((item) => item.includes(string));
};

export const trimStringFromAllValuesInArray = (array, string) => {
  return array.map((item) => item.replace(string, ""));
};
