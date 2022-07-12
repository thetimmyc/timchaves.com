import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { Link, useLoaderData } from '@remix-run/react'

type Post = {
  frontMatter: {
    headers: {
      'Cache-Control': string
    }
    meta: {
      title: string
      description: string
    }
  }
  slug: string
}
type Posts = { posts: Post[] }
type LoaderData = Posts

export let loader: LoaderFunction = async ({ request }) => {
  // Read the pages/posts dir
  let files = fs.readdirSync('./app/routes/posts')

  // Get only the mdx files
  files = files.filter((file) => file.split('.')[1] === 'mdx')

  // Read each file and extract front matter
  const posts = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(
        path.join('./app/routes/posts', file),
        'utf-8'
      )

      const { data: frontMatter } = matter(mdWithData)

      return {
        frontMatter,
        slug: file.split('.')[0],
      }
    })
  )

  // Return all the posts frontMatter and slug as props
  return { posts }
}

export default function Index() {
  let data = useLoaderData<LoaderData>()

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mx-auto w-full lg:w-[1140px] my-8">
        this is posts/index.tsx
        <div>
          <ul>
            {data.posts.map((post: any, index: number) => (
              <li key={index}>
                <Link prefetch="intent" to={`posts/${post.slug}`}>
                  {post.frontMatter.meta.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
