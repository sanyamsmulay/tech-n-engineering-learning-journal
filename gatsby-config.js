module.exports = {
  siteMetadata: {
    title: `Sanyam's tech learning journal`,
    siteUrl: 'https://gatsby-theme-replica.vercel.app',
    siteName: `Sanyam's tech learning journal`,
    description: 'All my learnings in technology and engineering curated here. Covers all my varied interests. Except for life and philosophical topics, which has a dedicated journal of its own.',
    author: 'Author - Sanyam Mulay',
    bio: 'This is bio',
    location: 'Earth',
    email: 'sanyamsmulay@gmail.com',
    link: 'https://hiitea.io',
    avatar:
      'https://avatars.githubusercontent.com/u/5830695?v=4',
    status: {
      emoji: '🔨',
      text: 'Worlds are built one strike at a time',
      isBusy: true,
    },
    gcse: '',
    footerList: [
      {
        text: 'Home',
        link: '/',
      },
      // TODO: personalize
      // {
      //   text: 'Github',
      //   link: 'https://github.com/sabrinaluo',
      // },
      // {
      //   text: 'Stack Overflow',
      //   link: 'https://stackoverflow.com/users/3821392/sabrina-luo',
      // },
    ],
    flagCounter: {
      url: 'https://info.flagcounter.com/mx4Y',
      image:
        '//s01.flagcounter.com/count/mx4Y/bg_FFFFFF/txt_000000/border_FFFFFF/columns_3/maxflags_9/viewers_3/labels_0/pageviews_1/flags_0/percent_0/',
    },
  },
  plugins: [
    // TODO: make optional 
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       'UA-52574938-2', // Google Analytics / GA
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       // optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //     },
    //   },
    // },
    // TODO: enable later
    // { // disabled for now
    //   resolve: `gatsby-plugin-disqus`,
    //   options: {
    //     shortname: `hiitea-tech`,
    //   },
    // },
    {
      // TODO: orchestrate a better workflow than this:
      // currently need to run yarn pack --> then run yarn add path to tar.gz
      // connect-deps is promising:  
      resolve: require.resolve(`./node_modules/gatsby-theme-replica`),
      options: {
        contentPath: 'content',
      },
    },
  ],
};
