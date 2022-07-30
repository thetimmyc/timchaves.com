type ArticleMeta = {
  title: string
  datePublished: string
  description?: string
  modifiedDate?: string
  featuredImageSrc?: string
}

type ArticleFrontMatter = {
  headers?: {
    'Cache-Control'?: string
  }
  meta: {
    title: string
    description?: string
    datePublished: string
    modifiedDate?: string
    featuredImageSrc?: string
  }
}

type Article = {
  frontMatter: {
    headers: {
      'Cache-Control': string
    }
    meta: {
      title: string
      description: string
      datePublished: string
      featuredImageSrc: string
    }
  }
  slug: string
}

export { Article, ArticleMeta, ArticleFrontMatter }
