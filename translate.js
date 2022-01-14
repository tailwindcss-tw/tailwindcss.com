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
    // {
    //   test: /\.mdx$/,
    //   loader: "./file-replacer",
    //   options: {
    //     base: "./translated",
    //     replacement: {
    //       "editor-setup.mdx": "editor-setup.mdx",
    //     },
    //   },
    // },
    // {
    //   test: /documentation\.js$/,
    //   loader: "./file-replacer",
    //   options: {
    //     replacement: {
    //       "documentation.js": "./translated/navs/documentation.js",
    //     },
    //   },
    // },
    {
      test: /samples[\/+\\+]\w*\.html$/,
      loader: "./file-replacer",
      options: {
        base: "./translated/samples",
        replacement: {
          "hero.html": "hero.html",
        },
      },
    },
    {
      test: /components[\/+\\+]\w*\.js$/,
      loader: "./file-replacer",
      options: {
        base: "./translated/components",
        replacement: {
          "Testimonials.js": "Testimonials.js",
          "Tabs.js": "Tabs.js",
        },
      },
    },
    {
      test: /components[\/+\\+]home[\/+\\+]\w*\.js$/,
      loader: "./file-replacer",
      options: {
        base: "./translated/components/home",
        replacement: {
          "Hero.js": "Hero.js",
          "ConstraintBased.js": "ConstraintBased.js",
        },
      },
    },
    {
      test: /pages[\/+\\+]index\.js$/,
      loader: "./file-replacer",
      options: {
        base: "./translated/pages",
        replacement: {
          "index.js": "index.js",
        },
      },
    },
  ];
};
