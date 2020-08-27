module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('style')
	return {
		passthroughFileCopy: true
	}
}