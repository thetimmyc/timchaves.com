import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { Link, useLoaderData } from '@remix-run/react'
import { EmailSubscribeBox } from '~/components/EmailSubscribeBox'
import Imgix from 'react-imgix'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import { H1 } from '~/components/H1'

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
      <Grid>
        <GridMainBody>
          <H1 className="px-8 xl:px-0 text-center">
            Hi, there — I’m Tim.
            <br />
            <br />
            I’m an entrepreneur, podcast host, and non-profit board member.
          </H1>
          <EmailSubscribeBox id="subscribe" className="mt-12" />
          <ul>
            {data.posts.map((post: any, index: number) => (
              <li key={index}>
                <Link prefetch="intent" to={`posts/${post.slug}`}>
                  {post.frontMatter.meta.title}
                </Link>
              </li>
            ))}
          </ul>
        </GridMainBody>
      </Grid>
    </div>
  )
}
