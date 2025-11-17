import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "~/ROOT/WRITEUPS", // This looks like a terminal path
    enableSPA: true, // Instant page loads (No lag)
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "stag-nant.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fira Code", // The font hackers use
        body: "Fira Code",   // Monospace everything
        code: "Fira Code",
      },
      colors: {
        lightMode: { // We force dark mode, but set this just in case
          light: "#0d1117",
          lightgray: "#21262d",
          gray: "#8b949e",
          darkgray: "#c9d1d9",
          dark: "#58a6ff",
          secondary: "#2ea043",
          tertiary: "#238636",
          highlight: "rgba(46, 160, 67, 0.15)",
        },
        darkMode: {
          light: "#000000",        // Pure Void Black
          lightgray: "#00FF41",    // Matrix Green borders
          gray: "#808080",         // Muted Text
          darkgray: "#FFFFFF",     // Main Text
          dark: "#00FF41",         // Headings (Neon Green)
          secondary: "#00FF41",    // Links (Neon Green)
          tertiary: "#003B00",     // Hover effects (Dark Green)
          highlight: "rgba(0, 255, 65, 0.2)", // Highlighting
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "dracula", // Best syntax highlighting for code blocks
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
