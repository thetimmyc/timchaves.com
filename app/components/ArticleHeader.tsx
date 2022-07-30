import { H1 } from './H1'
import { Img } from './Img'
import type { Article } from '~/types'
import dayjs from 'dayjs'

interface Props {
  article: Article
}

const ArticleHeader = ({ article }: Props) => {
  const datePublished = dayjs(article.frontMatter.meta.datePublished).format(
    'MMMM D, YYYY'
  )

  return (
    <div className="mb-10 sm:mb-12">
      <H1 className="text-center mb-4 sm:mb-6 px-8 xl:px-0">
        {article.frontMatter.meta.title}
      </H1>
      {article.frontMatter.meta.description ? (
        <p className="text-center text-base sm:text-xl text-foreground-2 dark:text-foreground-2-dark mb-3 sm:mb-6 px-10">
          {article.frontMatter.meta.description}
        </p>
      ) : null}
      <div className="flex items-center justify-center mb-2 sm:mb-3">
        <Img
          width={299}
          height={299}
          className="rounded-full h-10 w-10 mr-2"
          alt="Tim Chaves"
          src="https://timchaves.imgix.net/tim-chaves-jun-2022-round.png"
        />
        <div className="text-sm sm:text-base text-foreground-2 dark:text-foreground-2-dark">
          by Tim Chaves
        </div>
      </div>
      <div className="text-sm sm:text-base text-center text-foreground-3 dark:text-foreground-3-dark">
        {datePublished}
      </div>
    </div>
  )
}
export { ArticleHeader }
