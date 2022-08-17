import type { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import { ArticleHeader } from '~/components/ArticleHeader'
import type { Article } from '~/types'
import { loadArticle, getArticleSlug } from '~/utils/articles'
import { EmailSubscribeBox } from '~/components/EmailSubscribeBox'
import { P } from '~/components/P'
import { Img } from '~/components/Img'

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
        <div className="border-t border-background-3 dark:border-background-3-dark mt-8 pt-8">
          <div className="flex items-center mb-4">
            <Img
              width={299}
              height={299}
              className="rounded-full h-10 w-10 mr-2"
              alt="Tim Chaves"
              src="https://timchaves.imgix.net/tim-chaves-jun-2022-round.png"
            />
            <h5 className="mb-0">About the author</h5>
          </div>
          <P size="small">
            I’m an entrepreneur currently exploring the worlds of faith,
            technology, and philosophy. I graduated from Brigham Young
            University in 2008 and Harvard Business School in 2015.
          </P>
          <P size="small">
            I co-host the&nbsp;
            <a
              target="_blank"
              href="https://podcasts.apple.com/us/podcast/faith-matters/id1307757928"
              rel="noreferrer"
            >
              Faith Matters podcast
            </a>
            &nbsp;and write a newsletter here on timchaves.com.
          </P>
        </div>
        <EmailSubscribeBox className="mb-8">
          <P size="small">
            If you liked this article, please consider subscribing to my
            newsletter; I'll send new articles to your email when I write them.
          </P>
          <P size="small">
            It's free, and I'll never share your email. You can unsubscribe any
            time.
          </P>
        </EmailSubscribeBox>
      </GridMainBody>
    </Grid>
  )
}

export default __Article
