import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { loadArticle, getArticlePathItems } from '~/utils/articles'

// Weird but for articles, we have to set meta here. We can't do it in the __article.tsx layout route
// So because we want article data here, we have to load it. Originally, I tried loading the article here ONLY --
// not in the __article.tsx layout route -- and passing it via Outlet context. But without a loader function (I think),
// that made it so articles didn't always reload fresh from the server when you came from /articles. They just rendered
// completely on the client without recalling the LoaderFunction in this file. So the context (containing the article data)
// would be null, and everything broke. So it may not be totally optimal, but I'm loading article data here and in
// the layout route. Can't feel a real performance hit.

export const meta: MetaFunction = ({ data }) => {
  // If this file called on an article slug, an article has been loaded and passed to this MetaFunction. Otherwise, we don't have any loader data to set the meta
  if (data) {
    return {
      'og:title': data.article.frontMatter.meta.title,
      'og:image': data.article.frontMatter.meta.ogImageSrc,
      'og:url': data.requestUrl,
      'og:type': 'article',
      'og:description': data.article.frontMatter.meta.description,
    }
  } else {
    return {
      'og:title': 'Articles by Tim Chaves',
    }
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const pathItems = getArticlePathItems(request.url)

  if (pathItems.length !== 2 && pathItems[0] === 'articles') {
    return null
  } else {
    return {
      article: await loadArticle(pathItems[1]),
      requestUrl: request.url,
    }
  }
}

const Articles = () => {
  return <Outlet />
}

export default Articles
// This file is necessary but seems redundant to me. If this isn't here, then /articles route does not render /articles/index.tsx
