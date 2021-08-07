module.exports = {
  siteMetadata: {
    siteUrl: "https://provsalt.me",
    title: "xmrvsbeast",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id this is public anyways
        trackingId: `G-YYQSFWPZET`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
