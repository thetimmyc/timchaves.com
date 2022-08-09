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
      ogImageSrc: string
    }
  }
  slug: string
}

export { Article }
