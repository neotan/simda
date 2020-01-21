import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

const createConfig = (input, output, additionalPlugins = []) => ({
  input,
  output: {
    file: output,
    format: "cjs"
  },
  plugins: [
    resolve({
      mainFields: ["main"]
    }),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      exclude: "node_modules/**"
    }),
    ...additionalPlugins
  ]
})

export default [
  createConfig("src/index.js", "lib/index.js"),
  createConfig("src/index.js", "lib/index.min.js", [uglify()])
]
