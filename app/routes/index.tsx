import type { LoaderFunction } from '@remix-run/node'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { Link, useLoaderData } from '@remix-run/react'
import { EmailSubscribeBox } from '~/components/EmailSubscribeBox'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import { H1 } from '~/components/H1'
import { ArticleHeader } from '~/components/ArticleHeader'
import { loadArticles } from '~/utils/articles'

import type { Article } from '~/types'
type Articles = { articles: Article[] }
type LoaderData = Articles

export let loader: LoaderFunction = async ({ request }) => {
  const articles = await loadArticles()

  return { articles }
}

export default function Index() {
  let data = useLoaderData<LoaderData>()

  return (
    <div>
      <Grid>
        <GridMainBody>
          <H1 className="px-8 xl:px-0 text-center">
            Hi, there — I’m Tim.
            <br />
            <br />
            I’m an entrepreneur, podcast host, and non-profit board member.
          </H1>
          <EmailSubscribeBox id="subscribe" className="mt-12 mb-12" />
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
    </div>
  )
}
