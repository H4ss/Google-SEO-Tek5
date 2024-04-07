module.exports = {
    siteMetadata: {
      title: `Elenfaloth Carpet Company`,
      description: `Elenfaloth Carpet Company is a family owned and operated business that has been serving the greater Los Angeles area for over 30 years. We specialize in carpet cleaning, repair, and installation.
      We also offer a wide variety of flooring options including hardwood, laminate, and tile. 
      Our team of experts is dedicated to providing the highest quality service at an affordable price. 
      Contact us today for a free estimate!`,
      author: `@gatsbyjs`,
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `blog`,
            path: `${__dirname}/src/blog`,
          },
        },
        `gatsby-transformer-remark`,
      ],
    
  };
  