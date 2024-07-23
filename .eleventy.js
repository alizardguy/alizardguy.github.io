module.exports = function(eleventyConfig) {
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