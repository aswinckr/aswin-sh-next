export const trimKeywordFromString = (string, keyword) => {
  const index = string.indexOf(keyword);
  if (index === -1) {
    return string;
  }
  return string.substring(index + keyword.length);
};

export const replaceAllDashesWithSpacesAndMakeFirstLetterUppercase = (
  string
) => {
  return string.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
};
