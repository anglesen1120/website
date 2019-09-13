module.exports = {
  siteMetadata: {
    title: `Adrian Pietrzak | Software Developer`,
    description: `Adrian Pietrzak is a Full Stack JavaScript Developer who focuses on programming graphical user interfaces and scalable web applications.`,
    author: `@pietrzakadrian`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
