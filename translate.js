module.exports = () => {
  return [
    {
      test: /Header\.js$/,
      loader: "string-replace-loader",
      options: {
        search: "Components",
        replace: "元件",
      },
    },
    {
      test: /\.mdx$/,
      loader: "./tester",
      options: {
        replacement: {
          "editor-setup.mdx": "./zh/editor-setup.mdx",
        },
      },
    },
  ];
};
