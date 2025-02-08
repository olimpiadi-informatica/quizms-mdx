import type { CompileOptions } from "@mdx-js/mdx";
import mdxPlugin from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkMdxMathEnhancedPlugin from "remark-mdx-math-enhanced";
import remarkSmartypants from "remark-smartypants";
import type { PluggableList } from "unified";
import type { PluginOption } from "vite";

import recmaRemoveExports from "./recma-remove-exports";
import recmaVariants from "./recma-variants";
import rehypeFixWrap from "./rehype-fix-wrap";
import remarkAnswers from "./remark-answers";
import remarkHighlight from "./remark-highlight";
import remarkImages from "./remark-images";
import remarkProblemIds from "./remark-problem-ids";

const remarkPlugins: PluggableList = [
  remarkAnswers,
  remarkFrontmatter,
  remarkGfm,
  remarkHighlight,
  remarkMath,
  remarkMdxFrontmatter,
  remarkImages,
  [remarkMdxMathEnhancedPlugin, { component: "Equation" }],
  remarkProblemIds,
  [remarkSmartypants, { dashes: "oldschool" }],
];

const rehypePlugins: PluggableList = [rehypeFixWrap];

const recmaPlugins: PluggableList = [recmaRemoveExports, recmaVariants];

export default function mdx(options?: CompileOptions): PluginOption {
  return {
    enforce: "pre",
    ...mdxPlugin({
      remarkPlugins,
      rehypePlugins,
      recmaPlugins,
      providerImportSource: "virtual:quizms-mdx-components",
      format: "mdx",
      mdxExtensions: [".md", ".mdx"],
      ...options,
    }),
  };
}
