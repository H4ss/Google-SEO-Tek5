module.exports = {
  siteMetadata: {
    title: `Elenfaloth Fantasys`,
    description: `Dans les vastes étendues du désert, où le sable danse sous le soleil brûlant et où les étoiles illuminent la nuit avec une clarté inégalée, une famille de bédouins, les Al-Nadir, a su transformer une plante mystérieuse, l'Elenfaloth, en une industrie prospère. L'histoire de cette famille est celle de traditions ancestrales, de secrets bien gardés et d'une résilience remarquable face aux défis du temps. 
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
