module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("./src/style/");
    eleventyConfig.addPassthroughCopy("./src/scripts/");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("./src/.well-known");
    eleventyConfig.addPassthroughCopy("./src/media");
    eleventyConfig.addPassthroughCopy('src/private/media/');
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy({ 'src/ai.txt': '/ai.txt' });
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            ouput: '_site'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}