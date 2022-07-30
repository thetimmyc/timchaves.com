import type { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import { ArticleHeader } from '~/components/ArticleHeader'
import * as fs from 'fs'
import matter from 'gray-matter'
import type { MetaFunction } from '@remix-run/node'
import type { Article } from '~/types'

type LoaderData = Article

export const meta: MetaFunction = () => {
  return {
    title: 'Something cool',
    description: 'This becomes the nice preview on search results.',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const slug = /[^/]*$/.exec(request.url)?.[0] ?? '/'

  const mdWithData = fs.readFileSync(
    `./app/routes/articles/__article/${slug}.mdx`,
    'utf-8'
  )

  const { data: frontMatter } = matter(mdWithData)

  const article = {
    frontMatter: frontMatter,
    slug: slug,
  }

  return article
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
