const {
  FuseBox,
  SVGPlugin,
  CSSPlugin,
  BabelPlugin,
} = require('fuse-box');

const fuse = new FuseBox({
  homeDir: 'app/',
  sourcemaps: true,
  outFile: './public/build/bundle.js',
  plugins: [
    SVGPlugin(),
    CSSPlugin(),
    BabelPlugin(),
  ]
});

fuse.devServer(
  '>index.jsx',
  { root: 'public' }
);
