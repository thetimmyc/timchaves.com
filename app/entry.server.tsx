import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'
import { redirect } from '@remix-run/node'
import * as fs from 'fs'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  // Redirects
  const redirects = JSON.parse(fs.readFileSync('./redirects.json', 'utf-8'))
  const pathname = new URL(request.url).pathname
  for (const originalUrl in redirects) {
    if (originalUrl === pathname || originalUrl + '/' === pathname) {
      return redirect(redirects[originalUrl], 301)
    }
  }

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
