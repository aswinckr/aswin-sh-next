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

export const getProjectsInDatabase = (posts) => {
  const projects = posts.filter((post) => {
    return post.properties.Tags.multi_select.some((tag) =>
      tag.name.includes("project")
    );
  });
  return posts;
};

export const getNumberOfPostsWhereTagsContainsValue = (posts, value) => {
  return posts.filter((post) => {
    return post.properties.Tags.multi_select.some((tag) => {
      return tag.name.includes(value);
    });
  }).length;
};

export const listOfAllProjects = (posts) => {
  const arrayOfProjectNamesAndTheirIdsFromPosts = posts.map((post) => {
    return post.properties.Projects.multi_select.map((project) => {
      return { name: project.name, id: project.id };
    });
  });

  const mergeAllSubArraysIntoOneArray = (array) => {
    const mergedArray = array.reduce((acc, val) => acc.concat(val), []);
    return mergedArray;
  };

  const createNewArrayWhereIdIsUniqueAndCountIsAddedAsAProperty = (array) => {
    const newArray = [];
    array.forEach((item) => {
      if (!newArray.some((item2) => item2.id === item.id)) {
        newArray.push({ ...item, count: 1 });
      } else {
        newArray.forEach((item2) => {
          if (item2.id === item.id) {
            item2.count += 1;
          }
        });
      }
    });
    return newArray;
  };

  const listOfAllProjectsWithTheirIds =
    createNewArrayWhereIdIsUniqueAndCountIsAddedAsAProperty(
      mergeAllSubArraysIntoOneArray(arrayOfProjectNamesAndTheirIdsFromPosts)
    );

  return listOfAllProjectsWithTheirIds;
};

export const postsFilteredByPostType = (posts, postType) =>
  posts.posts.filter((post) => {
    if (postType) {
      return post.properties.Tags.multi_select.some((tag) =>
        tag.name.includes(postType)
      );
    }
    return true;
  });

export const listOnlyFirstNPosts = (posts, limit) => {
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
};

export const postsFilteredByProjectId = (posts, projectId = "") => {
  if (projectId !== "") {
    return posts.filter((post) => {
      return post.properties.Projects.multi_select.some(
        (project) => project.id === projectId
      );
    });
  }
  return posts;
};
