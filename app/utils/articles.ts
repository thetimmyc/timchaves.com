import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

async function loadArticles() {
  let files = fs.readdirSync("./app/routes/articles/__article");
  files = files.filter((file) => file.split(".")[1] === "mdx");

  // Read each file and extract front matter
  const articles = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(
        path.join("./app/routes/articles/__article", file),
        "utf-8"
      );

      const { data: frontMatter } = matter(mdWithData);

      // Debug logging to identify problematic articles
      if (!frontMatter?.meta?.datePublished) {
        console.error(`Missing datePublished in article: ${file}`);
        console.error(
          "Front matter content:",
          JSON.stringify(frontMatter, null, 2)
        );
      }

      const article = {
        frontMatter: frontMatter,
        slug: file.split(".")[0],
      };

      return article;
    })
  );

  articles.sort((a, b) => {
    return a.frontMatter.meta.datePublished < b.frontMatter.meta.datePublished
      ? 1
      : -1;
  });
  console.log(articles[0].frontMatter.meta.datePublished);

  return articles;
}

async function loadArticle(slug: string) {
  const mdWithData = fs.readFileSync(
    `./app/routes/articles/__article/${slug}.mdx`,
    "utf-8"
  );

  const { data: frontMatter } = matter(mdWithData);

  const article = {
    frontMatter: frontMatter,
    slug: slug,
  };
  return article;
}

function getArticlePathItems(requestUrl: string) {
  const pathItems = new URL(requestUrl).pathname.match(/[^\/]+/g);
  return pathItems || [];
}

function getArticleSlug(requestUrl: string) {
  const pathItems = getArticlePathItems(requestUrl);
  return pathItems.length === 2 ? pathItems[1] : "";
}

export { loadArticles, loadArticle, getArticlePathItems, getArticleSlug };
