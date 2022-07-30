import type { LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { ArticleHeader } from '~/components/ArticleHeader'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'

import type { Article } from '~/types'
import { loadArticles } from '~/utils/articles'

type Articles = { articles: Article[] }
type LoaderData = Articles

export let loader: LoaderFunction = async ({ request }) => {
  const articles = await loadArticles()

  return { articles }
}

export default function Index() {
  let data = useLoaderData<LoaderData>()

  return (
    <Grid>
      <GridMainBody>
        {data.articles.map((article: Article, index: number) => (
          <div
            key={index}
            className="mb-10 sm:mb-12 border-b border-background-3 last:border-0 dark:border-background-3-dark"
          >
            <Link prefetch="intent" to={`articles/${article.slug}`}>
              <ArticleHeader article={article} />
            </Link>
          </div>
        ))}
      </GridMainBody>
    </Grid>
  )
}
