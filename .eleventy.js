module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('style')
	eleventyConfig.addPassthroughCopy("img");
	return {
		passthroughFileCopy: true
	}
}