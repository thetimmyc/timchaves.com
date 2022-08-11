import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { Theme } from '~/utils/theme-provider'
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from '~/utils/theme-provider'
import * as fs from 'fs'

import clsx from 'clsx'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'

import { Nav } from '~/components/Nav'
import styles from './styles/app.css'
import { getThemeSession } from './utils/theme.server'
import { Button } from './components/Button'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tim Chaves',
  viewport: 'width=device-width,initial-scale=1',
})

export type LoaderData = {
  theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  }

  return data
}
function App() {
  const data = useLoaderData<LoaderData>()
  const [theme, setTheme] = useTheme()
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    )
  }

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>

      <body className="bg-background-1 dark:bg-background-1-dark text-foreground-1 dark:text-foreground-1-dark transition duration-500">
        {process.env.NODE_ENV === 'development' ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-58K2PGXCWX`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-58K2PGXCWX', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Nav />
        <div className="px-5">
          <Outlet />
        </div>
        <div className="text-center mt-16">
          <div className=" text-foreground-3 dark:text-foreground-3-dark">
            &copy; Tim Chaves {new Date().getFullYear()}.
          </div>
          <div className="mt-5 mb-10">
            <Button onClick={toggleTheme} size="small" variant="secondary">
              {data.theme === 'dark' ? 'Light' : 'Dark'} mode
            </Button>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  )
}
