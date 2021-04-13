const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");
const withImages = require("next-images");

// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   webpack(config, options) {
//     return config;
//   },
// });
  
module.exports = withMdxEnhanced(
  withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
  }),
  {
    layoutPath: "src/layouts",
    defaultLayout: true,
    rehypePlugins: [rehypePrism],
  }
)({
  pageExtensions: ["mdx", "tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
