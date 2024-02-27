module.exports = () => {
  return {
    plugins: [
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  };
};
