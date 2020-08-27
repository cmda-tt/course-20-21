module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('style')
	eleventyConfig.addPassthroughCopy("img");
	return {
		dir: {
			input: "pages"
		},
		passthroughFileCopy: true
	}
}