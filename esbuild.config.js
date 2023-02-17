#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["app.tsx"],
    bundle: true,
    outfile: "www/main.js",
    define:{'process.env.NODE_ENV': '\"development\"'}
  },
  { root: "www" }
);