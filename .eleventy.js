module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true,
    pathPrefix: "https://github.com/cmda-tt/course-20-21/",
    dir: {
      includes: "_includes",
      data: "_data",
      output: "docs"
    }
  }
}
