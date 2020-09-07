module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true,
    pathPrefix: "/eleventy-base-blog/",
    dir: {
      includes: "_includes",
      data: "_data",
      output: "docs"
    }
  }
}
