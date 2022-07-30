import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

async function loadArticles() {
  let files = fs.readdirSync('./app/routes/articles/__article')
  files = files.filter((file) => file.split('.')[1] === 'mdx')

  // Read each file and extract front matter
  const articles = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(
        path.join('./app/routes/articles/__article', file),
        'utf-8'
      )

      const { data: frontMatter } = matter(mdWithData)

      const article = {
        frontMatter: frontMatter,
        slug: file.split('.')[0],
      }

      // console.log(
      //   article.frontMatter.meta.title,
      //   article.frontMatter.meta.datePublished,
      //   typeof article.frontMatter.meta.datePublished
      // )

      // article.frontMatter.meta.datePublished += ' MST'
      // console.log(article)
      return article
    })
  )

  articles.sort((a, b) => {
    return a.frontMatter.meta.datePublished < b.frontMatter.meta.datePublished
      ? 1
      : -1
  })
  console.log(articles[0].frontMatter.meta.datePublished)

  return articles
}

export { loadArticles }
