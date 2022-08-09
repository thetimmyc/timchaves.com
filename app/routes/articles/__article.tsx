import type { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import { ArticleHeader } from '~/components/ArticleHeader'
import type { Article } from '~/types'
import { loadArticle, getArticleSlug } from '~/utils/articles'

type LoaderData = Article

export const loader: LoaderFunction = async ({ request }) => {
  const slug = getArticleSlug(request.url)

  return loadArticle(slug)
}

const __Article = () => {
  const data = useLoaderData<LoaderData>()
  return (
    <Grid>
      <GridMainBody>
        <ArticleHeader article={data} />
        <div className="article">
          <Outlet />
        </div>
      </GridMainBody>
    </Grid>
  )
}

export default __Article
