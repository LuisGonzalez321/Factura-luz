const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withCSS(
  withSass(
    withImages(
      withReactSvg({
        include: path.resolve(__dirname, "src/assets/svg"),
        webpack(config, options) {
          return config;
        },
      })
    ))
  );